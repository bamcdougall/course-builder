<h1>Create Custom Jobs</h1>

Course Builder allows you to create and execute custom jobs. Custom jobs allow you to perform arbitrary computations on your data and construct data pipelines that are not possible within Google App Engine's execution environment. For example, you can create a job to feed your data into a statistics package like R or SPSS. You can also create a job to load your data into a MySQL database.

**Note:** Creating custom jobs requires Python programming knowledge.



## Execute custom jobs ##
You must extend the class called `Job` in `tools/etl/etl_lib.py`. To do so, create a Python file (.py) with the following template:
```
class MyJob(custom.Job):
  def _configure_parser(self):
    self.parser.add_argument(
      ‘greet’, help=’Greeting to print’, default=’world’,
      type=str)

  def main(self):
    print ‘Hello, ‘ + self.args.greet
```

Define your custom computation or function in `main`. In the above example, it prints "Hello, World".

To run this custom job, use the `run` option of `etl.py`:

`python etl.py run <path_to_my_Job> <course_url_prefix> <app_name> <app_server_name> --job_args='<argument>'`

If your custom job was:
  * named `stats.py`
  * located in `/Users/sammich/coursebuilder/tools/etl`

and your application:
  * had a course URL of `/poetry`
  * was named `bbq`
  * had the server named `bbq.appspot.com`

and wanted to output "Hello, Dolly" in the template code, you would type from your Course Builder root directory:

`python etl.py run tools/etl/stats.py /poetry bbq bbq.appspot.com --job_args='Dolly'`

Here is the description of the `etl.py` command.

| **Options and Arguments** | **Description** |
|:--------------------------|:----------------|
| -h                        | Get help on the `etl.py` command. |
| --archive\_path           | The path and filename of the exported files, which will be compressed. |
| --batch\_size             | Specifies the number of results to attempt to retrieve per batch. |
| --datastore\_types        | When the type is `datastore`, this option specifies a comma-separated list of datastore model types to process. All models are processed by default.  Models are Google app engine db.Model subclass instances. They contain the data in the app's datastore. You can tell which type a model is by its name in the datastore. |
| --job\_args               | If the mode is run, the string containing the arguments is delegated to etl\_lib.Job subclass. |
| --log\_level {DEBUG,ERROR,INFO,WARNING} | Choose one error level. Specifies the log file messaging level. |
| --privacy                 | When mode is `download` and type is `datastore`, this flag will strip or obfuscate information that can identify a single user. |
| delete, download, run, upload | Choose either `delete`, `download`, `run`, or `upload`. Delete will delete all your course information. Download will download (export) files out of Course Builder. Upload will upload (import) files into Course Builder. |
| type                      | Choose either `course` or `datastore`. Specifies the "type" you are downloading. |
| course\_url\_prefix       | The URL where the lesson is located. |
| application\_id           | The name of your app. |
| server                    | The fullname of the server that is hosting your app. |

## Explore etl.py ##
Google App Engine provides useful services like `datastore` and `memcache`. Internally, these services are stored in a data structure that maps the name of the service to a service stub. For example, when a datastore operation like `db.put()` is run in user code, Google App Engine looks up the datastore stub and uses it to issue the real remote procedure call (RPC) to put data into the datastore.

This allows you to swap out service stubs at runtime. When you are running unit tests, for example, you can swap out the stubs that talk to prod services with stubs that talk to local implementations. This is helpful because it makes your tests small and reduces the unpredictability that inevitably happens when tests rely on remote services that are not always available and certainly are not entirely under the control of the test.

The service stub is one part of using `etl.py`. The other part is Remote API. The remote API is an optional feature that exposes your app’s datastore programmatically. Once you enable the remote API, you can use the `remote_api` library to make calls against it.

Course Builder comes with a library, `remote.py`, that lets code you run locally on your machine swap in service stubs that issue RPCs against your remote API endpoints, whether they are on your dev appserver or on your production instances. This means that you can take production code and run it on your local machine, issuing RPCs against the server of your choice. As long as you can provide credentials for that server, your local code can execute against its services like `datastore` and `memcache` with no modification to the code making those RPCs.

The lifecycle of a custom job is:

  1. You invoke `etl.py`, feeding it your custom job and any arguments.
  1. `etl.py` parses command line arguments and establishes a remote connection against the server specified on the command line.
  1. `etl.py` loads your custom job. It delegates arguments to the job (`--job_args`), if any, to your job’s argument parser. Your job parses those args.
  1. Your job’s `main()` is invoked. In it, you can execute arbitrary code locally against the server enumerated on the command line.

Now you can download data, run it through an arbitrary computation, and then upload it to another Course Builder instance or another business application entirely.

## Convert JSON to CSV or XML ##
You can convert a JSON file that is outputted by ETL and convert it to a CSV or XML file. You must convert one file at a time. To convert a JSON file, run the following command from your Course Builder root directory:

```
python tools/etl/gcbpaths.py run tools.etl.mapreduce.JsonToCsv /<coursename> <appid> <server.appspot.com> \
    --job_args='<full_path_to_an_Entity_file> <full_path_to_output_directory>'
```

The following example converts the `Students.json` file to CSV and puts it in the directory called `movies`.

```
python tools/etl/etl.py run tools.etl.mapreduce.JsonToCsv /cinema filmstudies filmstudies.appspot.com \
    --job_args='/home/willacather/coursebuilder/Students.json /home/willacather/coursebuilder/csv/students.csv'
```