<h1>Upload Course Data</h1>

After you [download](ExportCourseData.md) data from Course Builder, you may want to upload (import) that data back into Course Builder later. For example, you download data from one version so that you can upload it to a new version of Course Builder. You can upload data either to your development or production server. The steps are the same. The only difference is that when you upload data to your production server, you need to use your app-specific password, as described in [Set up an app-specific password](UploadCode#Set_up_an_app-specific_password.md).



## Types of data ##
You can upload course data and datastore data. See [Download Course Data](ExportCourseData#Types_of_data_available.md) to see the different data types.

## Upload course information ##
Similar to downloading course information, create a script that contains your correct paths and calls the `etl.py` command. Although you should feel free to view and make copies of data exported from Course Builder, you should not edit them if you want to load them back into Course Builder. If you do, you may receive an immediate upload error or pass uploading and create downstream errors that you must troubleshoot on your own. If you want to upload data back into Course Builder, you must upload exactly what you downloaded.

```
sh scripts/etl.sh upload course <course_url_prefix> <app_name> <app_server_name> --archive_path <archive_path>
```

Here is the description of the ETL command.

| **Options and Arguments** | **Description** |
|:--------------------------|:----------------|
| -h                        | Get help on the `etl.py` command. |
| --archive\_path           | The path and filename of the exported files, which will be compressed. |
| --batch\_size             | Specifies the number of results to attempt to retrieve per batch. |
| --datastore\_types        | When the type is `datastore`, this option specifies a comma-separated list of datastore model types to process. All models are processed by default.  Models are Google app engine db.Model subclass instances. They contain the data in the app's datastore. You can tell which type a model is by its name in the datastore. |
| --disable\_remote         | If the mode is `run`, this flag instructs Course Builder to skip authentication and remote environment setup. You should only use this flag for jobs that run entirely locally and do not require remote procedure calls (RPCs). |
| --force\_overwrite        | If the mode is `download` and type is `course`, this flag instructs Course Builder to completely overwrite all the existing data in the target system with the uploaded data. Backup your data before using this feature. |
| --job\_args               | If the mode is `run`, the string containing the arguments is delegated to `etl_lib.Job` subclass. |
| --log\_level {DEBUG,ERROR,INFO,WARNING} | Choose one error level. Specifies the log file messaging level. |
| --privacy                 | When mode is `download` and type is `datastore`, this flag will strip or obfuscate information that can identify a single user. |
| delete, download, run, upload | Choose either `delete`, `download`, `run`, or `upload`. Delete will delete all your datastore information. Download will download (export) files out of Course Builder. Upload will upload (import) files into Course Builder. |
| type                      | Choose either `course` or `datastore`. Specifies the "type" you are downloading. |
| course\_url\_prefix       | The URL where the lesson is located. |
| application\_id           | The name of your app. |
| server                    | The fullname of the server that is hosting your app. |

It is best to use this command from the root of your Course Builder installation. In the following example, the Course Builder installation is at `/Users/sammich/coursebuilder`:
  1. `cd /Users/sammich/coursebuilder`
  1. `sh scripts/etl.sh upload course /physics zabaione zabaione.appspot.com --archive_path ./physics.zip`

You would see a file called `physics.zip` in the current directory, `/Users/sammich/coursebuilder`.

## Upload datastore information ##
Although you should feel free to view and make copies of data exported from Course Builder, you should not edit them if you want to load them back into Course Builder. If you do, you may receive an immediate upload error or pass uploading and create downstream errors that you must troubleshoot on your own. If you want to upload data back into Course Builder, you must upload exactly what you downloaded.

The following command imports information, like student data, to the datastore:

```
sh scripts/etl.sh upload datastore <course_url_prefix> <app_name> <app_server_name> --archive_path <archive_path> --datastore_types <model1,model2>
```

It is best to use this command from the root of your Course Builder installation. In the following example, the Course Builder installation is at `/Users/sammich/coursebuilder` and the command downloads student information:
  1. `cd /Users/sammich/coursebuilder`
  1. `sh scripts/etl.sh upload datastore /poetry bbq bbq.appspot.com --archive_path ./poetry.zip --datastore_types Student`

| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/evaluate-course-efficacy) |
|:------------------------------------------------------------------------------------------------------------------------------------|