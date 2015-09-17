<h1>Run Multiple Courses</h1>



Course Builder supports multitenancy: you can host as many courses as you like on a single Google App Engine instance. There is nothing special to enable to run multiple courses, merely create new courses as described in [Create New Courses](CreateNewCourse.md).

![http://wiki.course-builder.googlecode.com/git/images/admin-home.png](http://wiki.course-builder.googlecode.com/git/images/admin-home.png)

Each course must have its own unique namespace although it does not need to have unique course titles. Except the course on the [root URL](URLMap.md), these namespaces will also be a part of your URL. For example, a course with namespace `foxtrot` can be accessed at `yourcourseid.appspot.com/foxtrot`.

![http://wiki.course-builder.googlecode.com/git/images/admin-course-entry.png](http://wiki.course-builder.googlecode.com/git/images/admin-course-entry.png)

Ensure you set your [custom settings](Dashboard#Settings.md) for each new course you create.