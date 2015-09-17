<h1>Explore the Directories</h1>

This page briefly describes the directory structure for the source code files provided with Course Builder.

  * `assets` - various files that make up the content of your course
    * `css` - cascading style sheet (CSS) files
    * `img` - images
    * `js` - activity and assessment JavaScript files
    * `lib` - Course Builder and third party front-end libraries
  * `controllers` - various web request handlers
  * `data` - CSV data files that define sequence of units and lessons of the course. These .csv files are for the example course only. For the content and structure of your course, you should deploy Course Builder to Google App Engine and create your course through the browser. Your data will subsequently be saved on the Google App Engine datastore.
  * `lib` - third party open-source libraries not developed by Google; it's your responsibility to review and accept licensing terms for each library
  * `models` - common infrastructure classes and database entities
  * `modules` - various extension modules
    * `admin` - administrator console
    * `announcements` - announcements display and editor
    * `assessment_tags` - model for implementing question tags
    * `course_explorer` - course explorer when you want to list all your courses on the homepage
    * `dashboard` - course author dashboard
    * `i18n` - translation files for supporting user interface in multiple languages
    * `mapreduce` - provides handlers for URLs related to map/reduce and pipelines.
    * `oauth2` - Oauth2 module
    * `oeditor` - generic AJAX object editor used by other modules
    * `review` - peer review subsystem
    * `search` - search module
    * `upload` - file upload module
  * `tests` - all unit and functional tests
  * `tools` - course structure and activity/assessment verification tools and data export tools. This applies only to the example and disk created courses only.
  * `views` - HTML page templates for various course pages

| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|