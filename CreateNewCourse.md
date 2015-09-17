<h1>Create New Courses</h1>



You can create new courses directly in the Administrator Page. Such newly created courses will exist in the Google App Engine datastore, as opposed to the filesystem on your local computer. You can create as many courses as you like and they will persist on a single Google App Engine instance.

To create a new course:

  1. Create new courses by clicking the **Add Course** button in the **Courses** tab on the Administrator page.
> > ![http://wiki.course-builder.googlecode.com/git/images/admin-home.png](http://wiki.course-builder.googlecode.com/git/images/admin-home.png)
  1. On the **New Course Entry**  page,
    1. Add a Unique name. This name represents this course's URL as well as its unique name in the datastore namespace. Course Builder automatically adds a `ns_` prefix to your name for its namespace representation. For example, if you choose the name `alpha`, then the URL would be `/alpha` and the automatically generated namespace will be `ns_alpha`. This namespace name can never be changed once it is generated.
    1. Add a Course Title. You can change this title later if you wish.
    1. Add the email address for the course administrator.
  1. Click **Add New Course**.
  1. Click **Close**. Access and see a list of all courses on the **Site Admin > Courses** page.

## Import Data into an Empty Course ##
All newly created courses are completely empty. You can however, import data from an existing course that exists on the same Google App Engine instance.

  1. Go to the **Dashboard > Create > Outline** page of your empty course.
  1. Click **Import**.
  1. Choose a course that has the data you want from the **Available Courses** dropdown menu.
  1. Click **Import**.
  1. Click **Close**.

This does not import all the information in the `course.yaml` file. You must manually change any desired settings by going to **Dashboard > Settings** in your new course.

## Make Courses Viewable ##
When you create a new course, it is by default private, which means students cannot view it. To make your course public, go to **[Dashboard](Dashboard#Settings.md) > Create > Outline** and click the lock icon next to the Course name. When the lock is unlocked, the course is viewable to the public.