<h1>Course Builder Release Notes</h1>



## Release notes for version 1.9.0 ##

  * **Admin: Site Settings.** The setting names are changed for clarity.

  * **Analytics.** When you launch an analytics job, you see a visual spinner to indicate the work is in progress and when it is done.

  * **Analytics: Skill Maps.** A new subtab that visualizes the skill competencies of students.

  * **Assessments and Lessons: Components.** Question/content components that were once encapsulated in the red toolbox have been taken out of the red tool box. Now these components are all listed in the **Insert Item** section of the the content editor.

  * **Assessments and Lessons: Preview.** Preview your content with the "eye" icon instead of clicking into the lesson or assessment.

  * **Browser Support.** In line with official Google policy, we will only support the latest two versions of Internet Explorer: Internet Explorer 10 and 11.

  * **Content Editing.** The default editing mode for new content is now Rich Text, not HTML. For example, if you are creating a new Lesson, your editing experience in the content area will start in Rich Text mode.

  * **Dashboard.** The Dashboard is completely re-organized. The top navigation bar is encapsulated into the navigation drawer on the top left corner. The pages and subpages (tabs and subtabs) have also been re-organized into more logical groups.

  * **Dashboard: Various Pages.** Many of the pages in the Dashboard are updated to increase usability. For example, icons show up to the left of tiles in **Outline**, optional fields do not show until chosen, small help text is removed as is duplicate page headings, and more.

  * **Google App Engine: Files API.** Google App Engine turned down their Files API service. This only affected running Analytics in Course Builder and we no longer use the Files API service.

  * **Lessons: Editing.** Optionally edit lessons directly in the lesson view as opposed to going to the Lesson Editor.

  * **Localhost.** When running on localhost, users who did not have the `lxml` library received an error: "ImportError: No module named lxml.html". This is fixed.

  * **Skill Maps: Questions.** Skill tagging is now available on questions.

  * **Skill Maps: Student Progress.** Students can see their skills progress and skills competenecy on their Progress page.

  * **Student Data Deletion.** Students have the option of deleting all their course data when they unenroll. If they re-enroll, it will be as if they had never registered nor taken the course.

  * **Syllabus Page.** Choose whether Units or Assessments are visible on the syllabus page when they are marked private.

## Release notes for version 1.8.0 ##

  * **Admin Page.** The Admin section was moved to the Dashboard and can be accessed through its own tab in the Dashboard. See [Administrator Page](AdminPage.md).

  * **Analytics: Certificates.** See how many students received certificates. See [Analytics](Dashboard#Analytics.md).

  * **BigQuery.** There is now a pipeline to Google Big Query within Course Builder. See [Analytics](Dashboard#Analytics.md).

  * **Course Homepage.** The course homepage is now titled "Syllabus" instead of "Schedule".

  * **Dashboard.** The Dashboard visual style was refreshed. See [Dashboard](Dashboard.md).

  * **GIFT format.** Write questions and answers in the GIFT format.

  * **Google App Engine Launcher on Mac.** Fixed bug on Mac OS where Course Builder launch fails if there is no PyCrypto library.

  * **HTML Hooks.** The hooks are now turned off by default.

  * **Lessons.** The 1MB lesson size limit was increased to 4MB.

  * **Lessons: Feedback.** You can optionally turn on a rating widget to permit students to give feedback on each lesson page.

  * **Lessons: Questionnaire.** Create questionnaires in lessons. Questionnaires are ungraded.

  * **Localhost.** We suggest you deploy Course Builder to Google App Engine after downloading all the software. If instead you wish to explore Course Builder on localhost, you may need to download the lxml Python package. See [Installing Python lxml Package](Download#Installing_Python_lxml_Package.md).

  * **Registration emails.** Customize and Internationalize welcome emails.

  * **Skill map.** Added ability to create skill labels and map those labels onto lessons. Corresponding analytics were implemented to support this feature. See [Create Skill Maps](CreateSkillMap.md).

  * **Tab: Add arbitrary tabs.** Added ability to add aribtary tabs on the navigation menu bar through the User Interface.

  * **Usage.** We added the capability to collect information about the Course Builder deployment. Google will maintain this data in accordance with the [Google Privacy Policy](http://www.google.com/policies/privacy/) and will not associate data it collects with the course or a user. See [Sending Course Builder Deployment Information](UploadCode#Sending_Course_Builder_Deployment_Information.md).


## Release notes for version 1.7.0 ##
**Note**: To run 1.7.0 locally, you must download the [Python pycrypto package](https://groups.google.com/forum/?fromgroups#!searchin/course-builder-forum/Blank$20Course/course-builder-forum/1aSwta8sRU4/ux2r8KjRwrIJ). You do not need to do this if you only want to download and deploy to Google App Engine.

  * **Activities.** Import old style (version 1.2 and earlier) questions into modern question types. This is handled automatically when click the **Import** button.

  * **Analytics.** New visualizations and a way to cancel or re-run individual analytics jobs. See [Analytics](Dashboard#Analytics.md).

  * **Assessments.** You can now place assessments within units at the following locations: at the beginning, end, or both. That is, you can now submerge assessments within units as long as they are either at the beginning or end of the unit. See [Assessments](CreateAssessments.md).

  * **Breadcrumb.** If you have multiple courses, you can switch courses by selecting one from the breadcrumb navigation.

  * **Certificate generation.** Optionally generate certificates based on specified criteria. See [Settings](Dashboard#Settings.md).

  * **Course tracks.** Use labels to allow your students to take particular tracks or paths through your course as opposed to taking the entire course. See [Assets](Dashboard#Assets.md).

  * **Course Builder roles.** Create different roles and associate them with particular emails and permissions. Currently, the role is limited to a translator role. See [Roles](Dashboard#Roles.md).

  * **Dashboard.** The **Dashboard** now has sub-navigation tabs in the **Analytics**, **Assets**, and **Settings** tabs so sections can have their own page. A new top level navigation tab for **Roles** is also available. See [Dashboard](Dashboard.md).

  * **Dashboard: Assets.** Reorganized presentation into a five column, sortable table.  Sort the table by clicking on the column headers. Preview questions through the eye icon. Use the pencil icon to edit the question or question group.

  * **Dashboard: Assets.** Filter the question and question group through the filter button so you see only the items you want to see.

  * **Dashboard: Assets.** Preview a question directly from the Dashboard with the eye icon.

  * **Dashboard: Assets.** When you make changes to the default CSS, JavaScript, or Templates, a new pencil icon shows next to the name with the text "Overridden."

  * **Dashboard: Outline.** Make units and lessons private or public with a click of a icon.

  * **Documentation: Course Author.** The "Course Author" section was moved from the documentation and has separately become [Online Course Kit](http://www.google.com/edu/openonline/edukit/index.html).

  * **Email specification.** Separate multiple email specification anywhere in Course Builder by tabs, commas, newlines, spaces in **Admin > Settings** and **Dashboard > Settings**.

  * **ETL.** You no longer need to manually create a custom script that lists all the needed libraries and calls ETL indirectly. Now you can use the `etl.py` command directly. See [Download Course Data](ExportCourseData.md) and [Upload Course Data](ImportCourseData.md).

  * **ETL upload.** ETL can upload all the entity types that it can download. See [Upload Course Data](ImportCourseData.md).

  * **Google Drive.** Integrate Google Docs on Google Drive into Course Builder. See [Integrate with Google Drive](IntegrateDrive.md).

  * **Gradebook.** See results on individual student scores. The Gradebook is available as a separate sub-navigation tab under **Analytics**. See [Analytics](Dashboard#Analytics.md)

  * **HTML customizations.** Edit your course HTML with custom text, links, and graphics through the browser instead of through YAML files or HTML files. See [Settings](Dashboard#Settings.md).

  * **Internationalization.** A translation console that allows translators to translate your original course content. See [Internationalization](I18n.md).

  * **Internationalization: Locale Picker.** If you translate the course into different languages, students can select one of those particular languages in which to take the course.

  * **Invitations.** Students can send course invitations to other students from Course Builder. See [Settings](Dashboard#Settings.md).

  * **Lessons.** You can now add unit links on the lesson navigation bar. The navigation bar itself is collapsable (accordion style). See [Settings](Dashboard#Settings.md).

  * **Lessons.** Added option to disable auto numbering of lessons. See [Settings](Dashboard#Settings.md).

  * **Lessons.** You can optionally show all lessons in a single unit.

  * **LTI.** You can now add Learning Tools Interoperability (LTI) tools into Course Builder. The LTI module is a separate module and you can import it by running the `scripts/modules.py` script.

  * **Markdown.** Optionally use Markdown for content in the Lesson Body. See [Create Lessons](CreateLessons#Create_activities.md).

  * **Math component.**  Add math symbols and equations in LaTeX as a custom component. See [Create Lessons](CreateLessons#Create_activities.md).

  * **Mobile.** Course Builder's design is now adaptive down to 7 inch viewports.

  * **Pagination in assessments.** You can suppress the "Next" button. See [Settings](Dashboard#Settings.md).

  * **Question Groups.** Add questions to question groups directly from the dashboard. See [Assets](Dashboard#Assets.md).

  * **Question Groups.** Create empty question groups.

  * **Registration notification.** Option to send welcome emails to students upon their registration. See [Settings](Dashboard#Settings.md).

  * **Roles and permissions.** You can create arbitrary roles and assign them particular permissions. Currently, most permissions relate to translator. See [Roles](Dashboard#Roles.md).

  * **Scripts.** There are new scripts to test Course Builder on your local machine, bring in external modules, and use the core version of ETL without creating a custom script. These are located in the `scripts/` directory.

  * **Unit Numbering.** You can now suppress unit numbering. See [Settings](Dashboard#Settings.md).

  * **Welcome flow.** If you haven't created a course yet, you will now get a Welcome screen that allows you to create a new course or explore the sample course through a Welcome screen.

  * **Whitelisting.** You can now restrict who can register for your course. See [Settings](Dashboard#Settings.md).


## Release notes for version 1.6.0 ##
<font color='red'>Starting from Course Builder 1.6.0, you must download the zip from here:</font> [Course Builder Zip Files](https://code.google.com/p/course-builder/wiki/DownloadCourseBuilder?tm=2). The browsable source code will be in its usual area in [code.google.com](https://code.google.com/p/course-builder/source/browse/).

  * **Admin: News.** A new tab was added called "News." This links to Course Builder announcements.

  * **Appstats.** Google App Engine Appstats, a feature that profiles an app's Remote Procedure Calls (RPCs), is now available in Course Builder. In your `app.yaml` file, turn the `GCB_APPSTATS_ENABLED` to `true`. See [Enable Google App Engine Appstats](UploadCode#Enable_Google_App_Engine_Appstats.md).

  * **Assessments.** The viewing permissions for assessments were not being checked before they were shown to students. This bug was fixed. Peter Reutemann from the community contributed this fix.

  * **Bug Fix: Accessibility.** There were various accessibility fixes, including adding roles and labels to elements on course pages.

  * **Bug Fix: Embedding Google Groups in Firefox.** There was a bug in which embedded Google Groups did not show up specifically in Firefox. This was fixed when you deploy to Google App Engine. On your local computer (using the SDK), the problem will persist on Firefox. The fix for this on localhost is to change "localhost" with  "127.0.0.1" in the `extensions/tags/gcb/__init__.py` file. The comment in that file will reiterate these instructions.

  * **Bug Fix: Import questions and question groups.** There was a bug that did not import questions and question groups in the user interface. This was fixed.

  * **Dashboard: Breadcrumb.** The breadcrumb in the Dashboard is now hyperlinked.

  * **Dashboard: Support.** A new tab was added in the Dashboard called "Support." This links to the Course Builder Google Group that can help you get answers from other community members.

  * **Datastore Optimization.** An optimization was made that decreased the number of Google App Engine datastore operations on the **Dashboard > Assets** page under particular circumstances. Specifically, there is a reduction in the number of required datastore operations when uploading assets. This optimization helps decrease process time and quota, compared to previous releases.

  * **ETL: Question and QuestionGroup entities.** Downloading or uploading a course will now include Question and QuestionGroup entities.

  * **Google Analytics.** You no longer have to copy and paste the entire Google Analytics JavaScript as blocked text in the course.yaml file. Instead, add your Google Analytics Tracking ID in the new `google_analytics_id` setting in the same course.yaml file. See [Reach And Engagement Metrics](ReachAndEngagementMetrics.md).

  * **Google Docs.** You can now have anchors in Google Docs links.

  * **Google+ Hangouts.** Add Google+ Hangout to any page. See [List of Modules and Extensions](ListOfModulesExtensions.md).

  * **Google Tag Manager.** You can now use [Google Tag Manager](https://www.google.com/tagmanager/) with Course Builder. This allows you to capture analytics at the event level, as opposed to the page level with just Google Analytics. See [Customize Course Settings](CourseSettings.md).

  * **JsontoCsv.** The JsonToCsv converter did not flatten all string fields. The converter will now allow trailing commas. There was also a bug in unpacking nested JSON content. This bug was fixed.

  * **MapReduce.** MapReduce moves a small amount of code to run near the data it operates on, rather than pushing data to a specific processor. Course data is ideal for this due to a large number of nouns (students, questions, events, lessons, answers to questions, etc.) with fairly simple relations to one another. Mapreduce gives us a way to collect, aggregate, and analyze data comparatively inexpensively and quickly. The current version is just a proof-of-concept: it estimates how difficult a question is by simply averaging the scores of all students that answered that question.

  * **Navigation.** You can now hide the **Previous Page** and **Next Page** navigation buttons at the bottom of lesson and activity pages. See [Customize Course Settings](CourseSettings.md).

  * **Video.** YouTube videos will no longer show related videos at the end of the video. Steve Midgley from the community contributed this feature.

  * **Views Directory.** Here are the template files that were changed under the `views/` directory:
    * activity.html
    * assessment.html
    * base.html
    * course.html
    * forum.html
    * preview.html
    * register.html
    * review.html
    * review\_confirmation.html
    * review\_dashboard.html
    * reviewed\_assessment\_confirmation.html
    * student\_profile.html
    * test\_confirmation.html
    * unenroll\_confirmation.html
    * unenroll\_confirmation\_check.html
    * unit.html

  * **XBlock Module.** A new module was created that allows the use of XBlocks within Course Builder. See [List of Modules and Extensions](ListOfModulesExtensions.md).

## Release notes for version 1.5.1 ##

  * **Analytics for Student Progress.** You can view student progress, at an aggregate level, at **Dashboard > Analytics**. See [Dashboard > Analytics](Dashboard#Analytics.md).

  * **CSS Files.** The `main.css` and `butterbar.css` files under `assets/css/` have changed. Manually update any customizations you made in these files.

  * **Delete Course Data.** Delete all of a course's data from the datastore using `ETL`. See [Download course information](ExportCourseData#Download_course_information.md) for a summary of the `ETL` command.

  * **Documentation.** Added example on how to add a custom module. See [Create Custom Modules](CreateModules.md).

  * **File Uploading.** You can now allow students to upload text files through the Upload component. The maximum file size is 1MB. See [Create lesson content from the browser](CreateLessons#Create_lesson_content_from_the_browser.md).

  * **Google App Engine SDK.** For Course Builder version 1.5.1, you should use Google App Engine SDK version 1.8.2. See [Download the Software](Download#Download_and_install_Google_App_Engine.md).

  * **JSON to CSV and XML Conversion.** You can now convert a JSON file into a CSV or XML file through a custom job using `ETL`. See [Custom ETL jobs](CustomJob#Convert_JSON_to_CSV.md).

  * **Page Load Performance.** The speed of page loads was increased on average by roughly 40% from a contribution by Thomas Grenfell Smith.

  * **Peer Review.** There was a bug in those cases when a reviewer reviewed multiple assessments, only the last assessment that was submitted or saved as draft was recorded. This bug was fixed although the fix required a backwards-incompatible change that will break your course if you deploy 1.5.1 on a course that has preexisting review data.

  * **Privacy.** You can obfuscate personally identifiable information with the `ETL --privacy` command. See [Download course information](ExportCourseData#Download_course_information.md) for a summary of the `ETL` command.

  * **Question Answer Fields.** You can control the size of the answer field by specifying the number of rows and columns. See [Question Bank](Dashboard#Assets.md).

  * **Search.** All users can now search over a course through the search box. There is a new tab, **Dashboard > Search** where you index your course. See [Dashboard > Search](Dashboard#Search.md).

  * **Views Directory.** Here are the template files that were changed under the `views/` directory:
    * base.html
    * base\_course.html
    * course.html

Here is an informal video to show the highlights: [1.5.1 (running time: 4:18)](http://youtu.be/LdTX33xckoY)

## Release notes for version 1.5.0 ##

  * **Announcements tab.** The [Announcements](Announcements.md) tab is always visible.

  * **Activities.** You can now record activities. Turn the `gcb_can_persist_activity_events` setting on in [Admin > Settings](AdminPage.md).

  * **Analytics: tags.** The `gcb_can_persist_tag_events` flag in [Admin > Settings](AdminPage.md) specifies whether events from components (tags), like YouTube videos, should be recorded in a datastore.

  * **Butter Bar.** Two new files were added explicitly for the butter bar: `/assets/css/butterbar.css` and `/assets/lib/butterbar.js`. The butter bar is the floating, yellow, rectangle, textual information box that displays near the top of the browser. The butter bar will not work if you just drop these files into a previous release; you must start from the 1.5.0 release and bring any customizations into it.

  * **Course Explorer.** You can now use the `gcb_enable_course_explorer_page` setting in [Admin > Settings](AdminPage.md) to route the root URL (`"/"`) to a page that lists all your courses. This page is called Course Explorer and by default it is turned off.

  * **Course.yaml.** The `course.yaml` file is now separated into two parts: `course.yaml` and `course_template.yaml`. See [Course Settings](CourseSettings.md).

  * **CSS (main.css).** The `main.css` file under `assets/css/` has changed. Manually update any customizations you made in this file.

  * **Custom Jobs.** There is a new `--disable_remote` flag so [ETL](CustomJob.md) jobs that execute without remote procedure calls do not force authentication nor a remote environment setup.

  * **Dashboard: Assets.** You can now make edits to the HTML and CSS directly in [Dashboard > Assets](Dashboard#Assets.md) section. Previously, you had to develop on your development server and deploy the changes you made.

  * **Documentation: Developer's Guide.** A new section was added to the documentation for [Developers](ExtendCB.md). This section aids those who want to programmatically and safely customize Course Builder.

  * **Documentation: Custom Jobs.** The [Custom Jobs](CustomJob.md) section was moved to the Developer's section.

  * **Google App Engine SDK.** For version 1.5.0, you should use Google App Engine SDK version 1.8.1. See [Download the Software](Download#Download_and_install_Google_App_Engine.md).

  * **Component: iframe.** A new component type, inlined frames (iframe), was added. You can add iframes as a component in activities as part of a [lesson](CreateLessons.md) or [assessments](CreateAssessments.md).

  * **Lessons: saving the lesson.** There was a bug when you edited a lesson, clicked the **Save** button repeatedly, and then refreshed the page in your browser. In this case, the course information becomes lost in the datastore. This bug was fixed. Now after you click **Save**, the button will be unavailable until you make new changes.

  * **Memcache with multiple courses.** There was a bug if you run multiple courses in one instance where it was possible to access cached objects in one course from another course. This bug was fixed.

  * **Navigation: Logo.** Clicking the institution logo will now take you back to the course page.

  * **Questions.** You can now create questions for both activities and assessments through the browser without using any JavaScript. That is, you can create questions through the new WYSIWYG editor. You can also group your questions, which you can then insert as a component to both activities and assessments. Please use these question building methods to build your assessment and activity questions. See [Dashboard > Assets](Dashboard#Assets.md).

  * **Registration: Course Browsing.** There is now a setting, `browsable:`, in [course.yaml](CourseSettings.md) that allows students to browse the course without registering. By default this setting is `true`.

  * **Registration: Navigation.** Now you are taken to the course page after you register.

  * **Student Profile.** The new `gcb_can_share_student_profile` in [Admin > Settings](AdminPage.md) determines whether to share the student profile between different courses. It also enables single click registration for those instances with multiple courses on one instance.

  * **Upload Data.** The [ETL](ImportCourseData.md) command now has the `--force_overwrite` flag that completely overwrites all the existing data in the target system with the uploaded data.

  * **Views Directory.** Here are the template files that were changed under the `views/` directory:
    * activity.html
    * announcements.html
    * assessment.html
    * assessment\_html\_content.html (new)
    * bare.html
    * base.html
    * base\_course.html (new)
    * ~~base\_registration.html~~ (removed)
    * ~~confirmation.html~~ (removed)
    * course.html
    * error.html
    * forum.html
    * lesson\_navbar.html
    * preview.html
    * register.html
    * registration\_module.html (new)
    * review.html
    * review\_confirmation.html
    * review\_dashboard.html
    * reviewed\_assessment\_confirmation.html
    * student\_data\_table.html
    * student\_profile.html
    * test\_confirmation.html
    * unenroll\_confirmation.html
    * unenroll\_confirmation\_check.html
    * unit.html

Here is an informal video to show the highlights: [1.5.0 (running time: 3:45)](http://www.youtube.com/watch?v=hWCGwsSyaZc&feature=share&list=PLPai_O_OnSmBAfHXuozRvBJY2IOAuJvTf)

## Release notes for version 1.4.1 ##

  * <font color='red'>KNOWN ISSUE.</font>**If you run multiple courses in one instance go to**Admin > Settings > gcb\_can\_use\_memcache**and keep it at its default value of**false**. Otherwise, it is possible to access cached objects in one course from another course. Objects include student, course, lesson, unit, activity, and assessment. This issue will be fixed in version 1.5.0. See [Fix to 1.4.1 Memcache Issue](https://groups.google.com/forum/?fromgroups#!topic/course-builder-announce/bAKkkVo2wew).**

  * **Accessibility.** Added more ARIA landmarks and removed inappropriate headers.

  * **Assessments: Weighted scoring.** You can now weight questions in assessments. You can specify that some questions are "worth more points". This is also available on multiple choice questions with multiple answers. See [Assessment Scoring](http://code.google.com/p/course-builder/wiki/CreateAssessments#Scoring).

  * **Internationalization.** Added additional error strings to the i18n language module.

  * **Power Searching Course.** The default _Power Searching with Google_ course had dates next to the units on the course listing page. These were removed.

  * **Security: HTTPS.** Course Builder will now always connect through HTTPS.

Here is an informal video to show the highlights: [1.4.0 & 1.4.1 (running time: 5:30)](http://www.youtube.com/watch?v=04ggeGtTZo8&feature=share&list=PLPai_O_OnSmBAfHXuozRvBJY2IOAuJvTf).

## Release notes for version 1.4.0 ##

  * **Administrator Page: Student page interactions.** You can now record student interactions for each of your Course Builder pages. This is off by default. See [Administrator Page](AdminPage.md).

  * **Administrator Page: Counter values.** You can now aggregate and record counter values in memcache. This is off by default. See [Administrator Page](AdminPage.md).

  * **Announcement Emails.** Now when you create or update an announcement, you can optionally email it to students. See [Announcements-only Email List](CreateEmailList.md).

  * **Custom Jobs.** Course Builder allows you to create and execute custom jobs. You can perform arbitrary computations on your data and then feed it into programs like the R statistics package or a MySQL database. See [Create Custom Jobs](CustomJob.md).

  * **Dashboard: Settings.** A new form based editor was added to help edit your `course.yaml` file. See the [Settings section of Dashboard](Dashboard#Settings.md).

  * **Dashboard: Students.** This tab was renamed to **Analytics**. Bar charts were added to support the visualization of peer review statistics. See the [Analytics section of Dashboard](Dashboard#Analytics.md).

  * **Download/Upload Data.** The archive path is now specified as an argument to an option,`--archive_path`. See [download data](ExportCourseData#Download_course_information.md) or [upload course data](ImportCourseData#Upload_course_information.md).

  * **Footer text.** "Powered by Course Builder" is now in the footer of pages that are not student facing. You can delete this text. See [Modify Course Template](ModifyTemplate#Deleting_the_Course_Builder_footer_text.md).

  * **Google App Engine.** For version 1.4.0, you must use Google App Engine version 1.7.7. See [Download the Software](Download#Download_and_install_Google_App_Engine.md).

  * **Lessons: Adding components in Objectives.** When you create or edit lessons through the browser, you can now add various components through the rich text editor. Components include YouTube videos, your course forum, Google Doc, Google Spreadsheet, and Course Builder Activity. See [Create lessons from the browser](CreateLessons#Create_lesson_content_from_the_browser.md) or the [video (4:48)](http://www.youtube.com/watch?v=EpQqNkRdcck).

  * **Peer Review.** You can now use peer review as a grading mechanism. See [Peer Review](PeerReview.md) or the [video (7:38)](http://www.youtube.com/watch?v=5ERlbCXAkDg).

  * **Updating Course Builder.** When updating Course Builder, you must now update your index. See [Upgrade Course Builder Versions](Upgrade.md).

## Release notes for version 1.3.1 ##

  * **Announcements.** There was a bug in the **Announcements** editor when you typed text in Rich Text mode and switched to plain text mode. The text would be lost. This bug was fixed.

  * **Export and Import Data.** You can now export and import the files that constitute your Course Builder course. You can also export all Google App Engine datastore entities. See [source code](http://code.google.com/p/course-builder/source/browse/coursebuilder/tools/etl/etl.py).

  * **French language.** There was a bug when using the French language (`locale: 'fr'`). Some activities were truncated. This bug was fixed.

  * **HTTPS.** You can now access Course Builder through HTTPS.

  * **Lesson Notes.** If you do not specify lesson notes in your `lesson.csv` file or lesson editor, the **Text Version** button in the lesson will not show.

  * **Multiple Correct Answers.** You can now have questions that have multiple correct answers. See [Multiple Correct Answers](CreateActivities#Multiple-choice_questions_with_multiple_correct_answers.md).

  * **Yahoo Libraries.** Course Builder will no longer make direct web requests to http://yui.yahooapis.com/ to obtain Yahoo's open-source JavaScript and CSS libraries (YUI) files. This method is more secure than making requests for the libraries over the Internet.

## Release notes for version 1.3.0 ##
Many of the updates in version 1.3.0 enable course authors and administrators to edit their courses entirely online without the need to redeploy to Google App Engine.

  * **Administrator Page: Create courses.** You can now create new courses through the Administrator Page. See [Create New Courses](CreateNewCourse.md).

  * **Dashboard: course.yaml.** You can now edit the `course.yaml` file directly through the Dashboard. See [Dashboard Settings](Dashboard#Settings.md).

  * **Dashboard: Create assessments.** You can now create assessments through the Dashboard. See [Writing Assessments](CreateAssessments#Writing_assessments.md).

  * **Dashboard: Create external links.** You can now create links to external sites through the Dashboard. See [Dashboard Outline](Dashboard#Outline.md).

  * **Dashboard: Create lessons and activities.** You can now create lessons and actitivies for those lessons through the Dashboard. See [Dashboard Outline](Dashboard#Outline.md).

  * **Dashboard: Create units.** You can now create units through the Dashboard. See [Dashboard Outline](Dashboard#Outline.md).

  * **Dashboard: Import courses.** You can now import an existing course to a new, empty course. See [Dashboard Outline](Dashboard#Outline.md).

  * **Dashboard: Organize course structure.** You can now organize the structure of your course through the Dashboard. See [Dashboard Outline](Dashboard#Outline.md).

  * **Dashboard: Upload images.** You can now upload images through the Dashboard. See [Dashboard Assets](Dashboard#Assets.md).

The following are more updates for 1.3.0:

  * **Announcements.** There is a rich text editor to edit the body of [announcements](Announcements.md).

  * **Datastore clearing.** When developing on your development server, you should no longer clear the datastore between deployments to your live site. If you do so, you may lose any new courses that you created.

  * **Documentation structure.** The structure of the documentation was changed.

  * **Internationalization.** Course Builder now supports Zulu.

  * **Student State.** Students can now track their progress on the course, [activity](CreateActivities.md), and [assessment](CreateAssessments.md) through progress indicators. See [Student state](CourseFlow#Student_State.md).

  * **Tabs.** The current tab (the tab for the page on which you are currently on) is now underlined.

Here is an informal video to show the highlights: [1.3.0 (running time: 13:36)](http://www.youtube.com/watch?v=NncSiZhd8ds).

## Release notes for i18n language pack ##
  * **Internationalization.** Course Builder now supports 57 languages. [Download](http://code.google.com/p/course-builder/downloads/list) the language pack and integrate it with your installation of Course Builder. See [Internationalization](I18n.md).

## Release notes for version 1.2.1 ##
  * **CSV and international characters.** There was a bug that prevented you from uploading CSV files that contained international characters such as accents. This update fixes the issue.

  * **course.yaml and international characters.** There was a bug that disabled the **Settings** section in the Dashboard when [course.yaml](CourseSettings.md) contained international characters such as accents. This update fixes the issue.


## Release notes for version 1.2.0 ##
  * **Accessibility.** A variety of accessibility features were added. See [Accessibility](Accessibility.md).

  * **Administrator Page.** A new page was added for administrators who manage Google App Engine for Course Builder. See [Administrator Page](AdminPage.md).

  * **Announcements.** You can now create and edit announcements directly in the **Announcements** tab.  Furthermore, you can save announcements as drafts and publish them later. See [Update Announcements Tab](UpdateAnnouncementsTab.md).

  * **Bulk uploading.** You no longer have to manually upload the unit and lesson CSV files with the bulkuploader. The uploading of these files is now done automatically.

  * **course.yaml file.** The `course.yaml` file is a new file where you make course customizations. You no longer have to edit each individual template file in the `/views` directory. See [Customize Course Settings](CourseSettings.md).

  * **Dashboard.** A new dashboard was added for course authors to see a broad range of information about their course in one place. See [Dashboard](Dashboard.md).

  * **Event Recording.** Course Builder now allows recording of all assessment and activity interactions attempted by students. This feature is off by default and can be enabled in Admin > Settings.

  * **Internationalization.** An Internationalization framework was added so you can translate the student viewable text in a custom language. New translations in Spanish and Russian were also added. See [Internationalization](I18n.md).

  * **Third Party Libraries.** Course Builder now uses several open source third party libraries. The libraries are located in the `/lib` directory.

  * **Yahoo Libraries.** The Administrator and Dashboard interfaces use Yahoo's open-source JavaScript and CSS libraries (YUI) from http://yuilibrary.com/. Course Builder will make direct web requests to http://yui.yahooapis.com/ to obtain these files. If this is not acceptable, the Course Builder administrator can make a local copy of the YUI libraries and change the HTML templates to point to these local files. The Course Builder student-facing interface does not use YUI.

  * **Security.** Cross-site request forgery, also known as XSRF or CSRF, is a malicious attack that tries to exploit the relationship between a website and a user’s browser. Course Builder implements protection against XSRF using transient user-action specific tokens for all state-modifying HTTP operations supported by the product. Note that full in-depth security review has not yet been conducted. You should conduct independent security testing and take additional steps to secure your production site. If you find an issue, please report it immediately to the development team for assessment and resolution.

## Release notes for version 1.1.1 ##

  * **Windows platform support.** Course Builder version 1.1.0 contained a bug specific to running a development server on Windows platforms. This update fixes the issue.


## Release notes for version 1.1.0 ##

  * **New tabs.** Course Builder 1.0 contained two tabs: Course and Forum. CB 1.1 adds two new tabs: Announcements and My Profile.
    * **Announcements tab.** The new Announcements tab gives you a place that you can put course announcements, without having to create a separate forum. The content of the announcements tab is in `views/announcements.html`. See [Announcements and Optional Material](Announcements.md).
    * **My Profile tab.** The new My Profile tab displays basic student information, such as their name and scores on various assessments. It also provides a place for the student to un-enroll from the course or to change their name. See [Modify My Profile Tab](ModifyProfile.md).

  * **Arbitrary number of assessments.** Course Builder 1.0 supported exactly three assessments per course: a pre-course assessment, a mid-term, and a final. In Course Builder 1.1, you can create any number of assessments for each course, each with its own scoring algorithm. See [Create Assessments](CreateAssessments.md).

  * **Support for multiple courses.** In Course Builder 1.0, you could only host one course per Google App Engine application instance. That is, in the GAE Launcher, you needed a separate application for each course and running each course started its own copy of the GAE binary. Two courses could not share any of the same code. CB 1.1 allows you to host multiple courses simultaneously. See [Run Multiple Courses](RunMultipleCourses.md).

  * **List of existing courses.** This documentation now includes a [list of courses](ListOfCourses.md) people have created with Course Builder. If you have created a course and wanted it listed, fill out the form on that page.

  * **Course syllabus before registration.** In Course Builder 1.0, students had to register for a course before they could see the syllabus of the course. Course Builder 1.1 removes this restriction. See [Create Registration](CreateRegistration.md).

  * **Page caching.** Course Builder 1.1 [caches pages](UploadCode#Clear_cached_pages.md) displayed to students during production (but not during development). This should reduce the latency perceived by students and can also reduce [Google App Engine costs](AppEngine#Important:_Quotas_and_billing.md).

  * **Changes to assessment data.**  Course Builder 1.1 changes how it stores information about student assessments. See [Export Course Data](ExportCourseData.md).

  * **Testing.** Course Builder 1.1 includes a set of functional tests in the new `tests` directory. If you make significant changes to Course Builder's source code, consider running (and possibly changing) these tests. See [Run Course Builder tests](AppEngine#Run_Course_Builder_tests.md).

## Release notes for version 1.0 ##

  * **First public release.** Course Builder is our experimental first step in the world of online education.