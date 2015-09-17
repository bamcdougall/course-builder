<h1>Upgrade Course Builder Versions</h1>



# Upgrade from any version to the latest version #
You should never upgrade when your course is live.

  1. Make a complete copy of your existing version of Course Builder on your localhost and all your Google App Engine Datastore data. For Datastore data, you can use [ETL](ExportCourseData#Download_course_information.md) or use the backup feature in the [Cloud Developers Console](https://console.developers.google.com). This step is for backup purposes.
  1. Download and unzip the latest version of Course Builder.
  1. Optionally, copy the `/assets` folder from your existing version to the new version. If you encounter visual oddities, check and adjust your .css file in `/assets/css`. New definitions may have been added or previous definitions changed.
  1. Change `application:` value to your app ID in `app.yaml` in the new version of Course Builder.
  1. Optionally, manually transfer other modifications you made in the individual template files.
  1. Optionally, manually transfer any modifications you made to the Python .py files.
  1. In the [terminal](FAQ#What_is_a_shell_or_command_prompt?.md), go to your new Course Builder root directory.
  1. Use the [appcfg.py](UploadCode#Upload_(or_deploy)_your_app.md) command to update your index by typing (do not forget the period at the end): `appcfg.py update_indexes .`
  1. Type your email and application-specific password. There are no messages from Course Builder if you are successful.
  1. [Deploy](UploadCode#Upload_(or_deploy)_your_app.md) your new version to Google App Engine.

# Upgrade from any version to 1.7.0 #
  1. Make a complete copy of your old version of Course Builder and all your data.
  1. Download and unzip the latest version of Course Builder.
  1. Copy the `/assets` and `/data` folders from your old version to the latest version. If you encounter visual oddities, check and adjust your .css file in `/assets/css`. New definitions may have been added or previous definitions changed.
  1. Make the appropriate changes in your `course.yaml`.
  1. Make the appropriate changes in your `course_template.yaml`.
  1. Change your course name in `app.yaml` in the latest version of Course Builder.
  1. Change your `version:` value in `app.yaml` in the latest version.
  1. Manually transfer other modifications you made in the individual template files.
  1. Manually transfer any modifications you made to the Python .py files.
  1. In the [terminal](FAQ#What_is_a_shell_or_command_prompt?.md), go to your new Course Builder root directory.
  1. Use the [appcfg.py](UploadCode#Upload_(or_deploy)_your_app.md) command to update your index by typing (do not forget the period at the end): `appcfg.py update_indexes .`
  1. Type your email and application-specific password. There are no messages from Course Builder if you are successful.
  1. [Deploy](UploadCode#Upload_(or_deploy)_your_app.md) your new version to Google App Engine.

# Upgrade from any version to 1.6.0 #
  1. Make a complete copy of your old version of Course Builder and all your data.
  1. Download and unzip the latest version of Course Builder.
  1. Copy the `/assets` and `/data` folders from your old version to the latest version. If you encounter visual oddities, check and adjust your .css file in `/assets/css`. New definitions may have been added or previous definitions changed.
  1. Make the appropriate changes in your `course.yaml`.
  1. Make the appropriate changes in your `course_template.yaml`.
  1. Change your course name in `app.yaml` in the latest version of Course Builder.
  1. Change your `version:` value in `app.yaml` in the latest version.
  1. Manually transfer other modifications you made in the individual template files.
  1. Manually transfer any modifications you made to the Python .py files.
  1. In the [terminal](FAQ#What_is_a_shell_or_command_prompt?.md), go to your new Course Builder root directory.
  1. Use the [appcfg.py](UploadCode#Upload_(or_deploy)_your_app.md) command to update your index by typing (do not forget the period at the end): `appcfg.py update_indexes .`
  1. Type your email and application-specific password. There are no messages from Course Builder if you are successful.
  1. [Deploy](UploadCode#Upload_(or_deploy)_your_app.md) your new version to Google App Engine.

# Upgrade notes from 1.5.0 on 1.5.1 #
  * We suggest you use the `course_template.yaml` in version 1.5.1 and manually transfer the settings from your 1.5.0 `course_template.yaml`. This is due to the Search box definition placed in `course_template.yaml` in version 1.5.1.

  * There was a bug in those cases when a reviewer reviewed multiple assessments, only the last assessment that was submitted or saved as draft was recorded. This bug was fixed in 1.5.1 although the fix required a backwards-incompatible change that will break your course if you deploy 1.5.1 on a course that has preexisting review data.

# Upgrade from 1.3.1 to 1.4.0 #
Before you deploy to Google App Engine with 1.4.0, you must update your index. First, use the same upgrade procedures as [upgrading to 1.3.0 from 1.2.x](Upgrade#Upgrade_from_1.2.x_to_1.3.0.md) except stop before the deployment step. In those instructions:
  * Replace 1.2.x with 1.3.1
  * Replace 1.3.0 with 1.4.0

Next, before you deploy to Google App Engine:
  1. In the [terminal](FAQ#What_is_a_shell_or_command_prompt?.md), go to your new Course Builder root directory.
  1. Use the [appcfg.py](UploadCode#Upload_(or_deploy)_your_app.md) command to update your index by typing (do not forget the period at the end): `appcfg.py update_indexes .`

You are prompted for your email and application-specific password. There are no messages from Course Builder if you are successful. If you do not build/update your index, you see Google App Engine errors until you do so.

You can track the statuses of your applications' indices by clicking on the **Datastore Indexes** menu item in the Google App Engine admin console.

<img src='http://wiki.course-builder.googlecode.com/git/images/datastore-indexes-menu.png' width='600'>

While your indices are building, you see a screen similar to the following:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/datastore-indexes-building.png' width='600'>

The time an index takes to build depends on the amount of data being indexed. For many users this will be fast. However, if you have a lot of data in the datastore you may have to wait for some time, up to days, for the indices to finish building. Plan ahead if you have lots of data. You only need to do this during a Course Builder upgrade.<br>
<br>
When indices are ready to serve, you see a screen that looks like the following:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/datastore-indexes-serving.png' width='600'>

The important point is the text under <b>Status</b>. When it says <b>Serving</b>, you should no longer experience errors.<br>
<br>
<h1>Upgrade from 1.3.0 to 1.3.1</h1>
Please use the same upgrade procedures as <a href='Upgrade#Upgrade_from_1.2.x_to_1.3.0.md'>upgrading to 1.3.0 from 1.2.x</a>. In those instructions:<br>
<ul><li>Replace 1.2.x with 1.3.0<br>
</li><li>Replace 1.3.0 with 1.3.1.</li></ul>

<h1>Upgrade from 1.2.x to 1.3.0</h1>
<ol><li>Make a copy of your current 1.2.x version of Course Builder.<br>
</li><li>Download and install version 1.3.0.<br>
</li><li>Copy the <code>/assets</code> and <code>/data</code> folders from 1.2.x to 1.3.0.<br>
</li><li>Copy your <code>course.yaml</code> from 1.2.x to 1.3.0.<br>
</li><li>Change your course name in <code>app.yaml</code> in 1.3.0.<br>
</li><li>Change your <code>version:</code> value in <code>app.yaml</code> in 1.3.0.<br>
</li><li>Manually transfer other modifications you made in the individual template files.<br>
</li><li>Manually transfer any modifications you made to the Python .py files.<br>
</li><li><a href='UploadCode#Upload_(or_deploy)_your_app.md'>Deploy</a> your app to Google App Engine.</li></ol>

<h1>Upgrade from 1.1.x to 1.2.x</h1>
<ol><li>Make a copy of your current 1.1.x version of Course Builder<br>
</li><li>Download and install version 1.2<br>
</li><li>Copy the <code>/assets</code> and <code>/data</code> folders from 1.1.x to 1.2.<br>
</li><li>Manually transfer the modifications you made in the <code>#FIXME</code> sections in the individual template files in the <code>/views</code> directory to the new <code>course.yaml</code> file. In 1.2, you can make all these customizations in one place, the <code>course.yaml</code> file, instead of to each individual template file.<br>
</li><li>Manually transfer other modifications you made in the individual template files.<br>
</li><li>Manually transfer any modifications you made to the Python .py files.