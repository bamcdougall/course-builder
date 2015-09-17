<h1>URL Mapping</h1>

If you want to modify the URL of a course, use the **gcb\_courses\_config** setting in **Admin > Settings**. The page describes in detail the syntax for modifying a course:

  1. The word 'course', which is a required element.
  1. A unique course URL prefix. Examples could be '/cs101' or '/art'. Default: '/'
  1. A file system location of course asset files. If location is left empty, the course assets are stored in a datastore instead of the file system. A course with assets in a datastore can be edited online. A course with assets on file system must be re-deployed to Google App Engine manually.
  1. A course datastore namespace where course data is stored in App Engine. Note: this value cannot be changed after the course is created.

For example, you have a course with a URL mapping of `/alpha` and it is accessed at `<yourcoursename>.appspot.com/alpha`. You want to change the URL mapping so that you access the course at the root URL (`<yourcoursename>.appspot.com`). In this case, do the following steps:

  1. Go to **Site admin > Site settings > Course URLs and namespaces** and click **Edit**.
  1. In the final value (course:/:/:)) delete the "`/`" from the file system location entry. Your new course will get its data from the datastore, not from the file system. You must have the course with the root URL as the last entry in the list.
  1. Add the datastore namespace of your new course.
  1. Map your original course that was at root to another URL. In this example, we mapped the original course to the URL `/original`:
```
course:/original:/:
course:/::ns_alpha
```
  1. Click **Save**.