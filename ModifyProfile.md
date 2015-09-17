<h1>Modify My Profile Tab</h1>



At any time, students can visit a profile page that displays information about their current status in the course and also lets them make some changes. This page looks as follows:

![http://wiki.course-builder.googlecode.com/git/images/myprofile-parts.png](http://wiki.course-builder.googlecode.com/git/images/myprofile-parts.png)

## Page layout ##

This page consists of three areas:
  * The **header** is the same as for the home page.
  * The **content area** contains the student profile.
  * The **footer** is the same as for the home page.

The app uses two files to render this page:
  * `views/base.html` defines the header and footer areas.  This page is used by all pages displayed to a registered student.
  * `views/student_profile.html` defines the structure of the content area.

## What happens from this page ##

This page displays information about student current status in the course and also lets students remove themselves from the course.

### Student information ###

By default, the profile page displays some, but not all, of the information available in the `Student` object. You can choose to display more or less information. Details of the `Student` information is in [Export Course Data](ExportCourseData.md).

Note that if you change the number of assessments for your course, you probably want to change what's displayed here. See  [Changing number of assessments](CreateAssessments#Changing_the_number_of_assessments.md).

Also, the profile provides a form in which students can change the name they supplied upon registration. If you change registration to not ask for a name, consider removing this form. See [Create Registration](CreateRegistration.md).

### Course unenrollment ###

The bottom of the profile contains a button that allows a student to unenroll from the course. When students click on that button, they are first presented with a page that requests confirmation of intent to unenroll:

<img src='http://wiki.course-builder.googlecode.com/git/images/unenroll-ask.png' height='265' width='315'>

If they confirm that they want to unenroll, they see a confirmation of unenrollment:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/unenroll-confirmation.png' height='265' width='315'>

The app uses two files to render each of these pages:<br>
<ul><li><code>views/base_registration.html</code> defines the header and footer areas.  This page is used by all pages displayed to an unregistered person.<br>
</li><li><code>views/unenroll_confirmation_check.html</code> defines the content of the page that asks for confirmation before unenrolling <br> <code>views/unenroll_confirmation.html</code> defines the content of the page that confirms the student is actually unenrolled.</li></ul>


<h2>Testing changes</h2>

Changes you make to any file in the <code>views</code> directory appear automatically in your running development server. That is, after you make a change to one of these files, simply load (or reload) a page that uses that view and the change appears.<br>
<br>
To see how to make these changes in your live, deployed course, see <a href='UploadCode.md'>Deploy Your App</a>.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>