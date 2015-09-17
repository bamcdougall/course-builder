<h1>Administrator Page</h1>

The Administrator Page is for Course Builder and Google App Engine administrators. You must be a Course Builder admin to view this page. You access this page through the “Admin” link in the menu bar from the Dashboard.

![http://wiki.course-builder.googlecode.com/git/images/admin-home.png](http://wiki.course-builder.googlecode.com/git/images/admin-home.png)

The Administrator Page contains information regarding Google App Engine deployment. This page deals with items like setting up and managing Google App Engine and billing. This is in contrast to the Dashboard which dealt with things like course content and student enrollment.

The toolbar color here is different than that of the Dashboard to visually differentiate between the roles of administrator and course author. See [Course Builder Roles](CBRoles.md) for more information about Course Builder roles.

The Administrator Page contains the following sections:
  * **Courses**: Lists all the courses for which the administrator has responsibility.
  * **Settings**: Manage administrators, counters, record events to the datastore, memcache, the update interval, [new courses](CreateNewCourse.md), and [security](Security.md). To access those events in the datastore that are not shown in [Dashboard > Analytics](Dashboard#Analytics.md), you must export the data using [ETL](ExportCourseData.md) or go directly to Google App Engine. To access the Google App Engine instance you must be designated as a Google App Engine administrator. In either case, your data is available for viewing and analysis.
  * **Metrics**: Lists and gives the values of various in-process performance counters.
  * **Deployment**: Displays app and server settings for a particular course so the administrator does not have go to the individual files on the instance.
  * **Google App Engine**: Clicking on this link takes you directly to the Google App Engine Dashboard outside of Course Builder.
  * **Welcome**: Displays the welcome screen you see after you deploy Course Builder and before you create your first course.
  * **Help**: Takes you to the online documentation for the Admin Page.
  * **News**: Takes you to the latest announcements on Course Builder.