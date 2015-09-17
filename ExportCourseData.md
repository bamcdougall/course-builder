<h1>Download Course Data</h1>

The Course Builder application stores data in Google App Engine’s [High Replication datastore](https://developers.google.com/appengine/docs/python/datastore/structuring_for_strong_consistency). You can download (export) data either from your development or production server. The steps are the same. The only difference is that when you download data from your production server, you need to use your app-specific password, as described in [Set up an app-specific password](UploadCode#Set_up_an_app-specific_password.md).

With download and [upload](ImportCourseData.md), your data becomes accessible, portable, and liberated from any one system. Some reasons you may want to use this feature are:

  * Download current data so that you can import it into a new version of Course Builder.
  * Download data so that you can import into some third party system.
  * Download data so you can edit it in some custom way.
  * Download data "just so that you can have it with you."

You cannot download courses that you made with Course Builder versions earlier than 1.3.0. You would most likely have these courses on disk and hence would not need to download them from the datastore.



## Types of data available ##
Course Builder stores two types of data: course and datastore.

### Course data ###
You can find course data on your file system. Examples of course data include:

  * Assets — course CSS files, images, activities, assessments, and libraries
  * EventEntity — system level events and historical data about each activity or assessment completed. Event recording is off by default and can be enabled in **Site admin > Site settings**
  * Lessons — information about each lesson, such as the video's URL and the lesson's title
  * Student — information about students, their enrollment status and assessment scores
  * StudentAnswersEntity — the most recent detailed answers given by a student for each assessment
  * Units — course unit information like ID, type, title, release date, and availability

### Datastore data ###
Datatsore data resides in the Google App Engine datastore. Examples include:

  * Student
  * StudentAnswersEntity
  * StudentPropertyEntity

## Download course information ##
When you download the course information, some files will be in JavaScript Object Notation ([JSON](http://www.json.org/)), which is a data-interchange format that is human readable.  JSON is computer language independent.

The following command downloads your course data. ETL stands for "Extract, Transform, Load."

```
sh scripts/etl.sh download course <course_url_prefix> <app_name> <app_server_name> --archive_path <archive_path>
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
  1. `sh scripts/etl.sh download course /physics zabaione zabaione.appspot.com --archive_path ./physics.zip`

You would see a file called `physics.zip` in the current directory, `/Users/sammich/coursebuilder`.

Although you should feel free to view and make copies of data exported from Course Builder, you should not edit them if you want to load them back into Course Builder. If you do, you may receive an immediate upload error or pass uploading and create downstream errors that you must troubleshoot on your own. If you want to upload data back into Course Builder, you must upload exactly what you downloaded.

## Download datastore information ##
The following command exports information, like student data, from the datastore:

```
sh scripts/etl.sh download datastore <course_url_prefix> <app_name> <app_server_name> --archive_path <archive_path> --datastore_types <model1,model2>
```

It is best to use this command from the root of your Course Builder installation. In the following example, the Course Builder installation is at `/Users/sammich/coursebuilder` and the command downloads student information:
  1. `cd /Users/sammich/coursebuilder`
  1. `sh scripts/etl.sh download datastore /poetry bbq bbq.appspot.com --archive_path ./poetry.zip --datastore_types Student`

You would see a file called `poetry.zip` in the current directory, `/Users/sammich/coursebuilder`. You can also download multiple models:

`sh scripts/etl.sh download datastore /poetry bbq bbq.appspot.com --archive_path ./poetry.zip --datastore_types Student,StudentAnswersEntity`

## Consider time and costs ##

Usually, the course file will have a fairly small amount of data. Also, the amount of data does not change based on course enrollment.

Student entities, however, are different. If your course has a very large number of students, the exporting of data can take hours to run and may incur [Google App Engine costs](https://developers.google.com/appengine/docs/billing). Also note that even if your data is relatively small in size, frequent downloads could also incur costs.


| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/evaluate-course-efficacy) |
|:------------------------------------------------------------------------------------------------------------------------------------|