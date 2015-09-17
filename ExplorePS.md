<h1>Explore the Sample Course</h1>

This page helps you understand Course Builder on your local computer and give you a chance to explore Course Builder directly. This is a safe, exploration environment. Any new courses or modifications you make are lost when you turn off your computer. To make your changes permanent, you must [deploy](CourseBuilderChecklist#Deploy.md) and begin your implementation on Google App Engine (as opposed to your local computer with the Google App Engine SDK).



## Creating The Sample Course ##

In [Run Course Builder](GetCode.md), you downloaded the sample application and got it running on your development server.  Now, let's create a sample course.  If you are using a launcher, click the **Browse** button.
If you started using the command line, navigate to http://localhost:8081

The first page you will see is a login page. Check "Sign in as Administrator" so you can explore the course as an administrator and course author.
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/server-login.png' />
<br>
(If you have previously logged in to the development server, you may see the registration page or the home page for the sample course.)<br>
You can use any login name you want; this is the login for your development server, so it does not have to match any real email<br>
address.<br>
<br>
After the login page, you will see a welcome page.  Click on<br>
"Explore Sample Course" to start out with a large example.<br>
<br>
<br>
<img width='435' height='333' src='http://wiki.course-builder.googlecode.com/git/images/welcome.png' />
<br>

Feel free to modify this course; you can create another full copy at<br>
any time.  After the course is created, you'll be on a dashboard<br>
page.  Either click on the first line saying<br>
"Course - Power Searching with Google", or just navigate your<br>
browser back to <a href='http://localhost:8081'>http://localhost:8081</a>

Note: When you deploy for the first time, you will see this same screen except that you will be given a message within the same window about Google collecting Course Builder deployment information. Google uses this information to help improve Google's products and services and for research purposes. Google will maintain this data in accordance with the <a href='http://www.google.com/policies/privacy/'>Google Privacy Policy</a> and will not associate the data it collects with the course or a user. You can turn this off at any time, either at this Welcome window or by going to <b>Dashboard > Site Admin > Site Settings > gcb_report_usage_permitted</b> and setting the value to <code>False</code>.<br>
<br>
<h2>Course home page</h2>
When students first visit your course, Course Builder displays the course home page. By default, the example course allows you to access the course without registering. Students can always click <b>Course</b> in the navigation bar to get to the course home page.<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/homepage-parts.png' />

This page consists of three areas:<br>
<ul><li>The <b>header</b> contains<br>
<ul><li>Course icon and name of your course.<br>
</li><li>Horizontal navigation bar, with several tabs on the left (Announcements, Course, Forum, and My Profile) and an area with the person's address and a Logout link. Notice that the horizontal navigation is different once the student completes registration.<br>
</li></ul></li><li>The <b>content area</b> contains links to the each unit and to each assessment and also information about the availability of each of those links.<br>
</li><li>The <b>footer</b> contains the same two links as for the registration pages.</li></ul>

<h2>Registration</h2>
When prospective students visit the registration page, they see:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/registration-parts.png' />

This page consists of three areas:<br>
<ul><li>The <b>header</b> contains<br>
<ul><li>Course icon and name of your course.<br>
</li><li>Horizontal navigation bar, with two tabs on the left (Course and Registration) and an area with the person's address and a Logout link.<br>
</li></ul></li><li>The <b>content area</b> contains a form for the prospective student to fill out.<br>
</li><li>The <b>footer</b> contains two links -- one to your website and one to the privacy conditions and terms for your course.</li></ul>

Once a prospective student submits the registration form, the Course Builder the registration confirmation page:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/registrationconfirmation-parts.png' />

<h2>Lesson</h2>
When students click on a unit from the home page, they go to the page for the first lesson of the unit they chose. From there, they can go to any other lesson or activity in that unit:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/lesson-parts.png' />

This page consists of four areas:<br>
<ul><li>The <b>header</b> contains<br>
<ul><li>Course icon and name of your course.<br>
</li><li>Horizontal navigation bar, with two tabs on the left (Course and Forum) and an area with the person's address and a Logout link.<br>
</li><li>A breadcrumb indicating where in the course hierarchy this page exists, such as<br><code>Course &gt; Unit 1 &gt; Lesson 1</code>.<br>
</li><li>The name and number of the unit.<br>
</li></ul></li><li>A <b>vertical navigation bar</b>, consisting of a list of all lessons and activities in the current unit.<br>
</li><li>The <b>content area</b> is more complex than for previous pages. It contains:<br>
<ul><li>The name of this lesson.<br>
</li><li>A button to access a text version of the lesson.<br>
</li><li>A list of the lesson objectives.<br>
</li><li>The lesson video.<br>
</li><li><b>Back</b> and <b>Next</b> buttons to navigate through the unit. (The first lesson of a unit does not include the <b>Back</b> button.)<br>
</li></ul></li><li>The <b>footer</b> contains the same two links as for the registration pages.</li></ul>

<h2>Activity</h2>
Each unit may have some number of activities. An activity page shares almost the same structure as a lesson page:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/activity-parts.png' />

The only difference between a lesson page and an activity page (at least in look and feel) is that instead of a video for the main content, an activity has a summary of important points from the preceding lesson and has a set of questions, with places to answer the questions and to check your answers or get hints.<br>
<br>
<h2>Assessment</h2>
At certain parts throughout the course, students take assessments to see how they're doing. An assessment page has the simplest form of all:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/assessment-parts.png' />

This page consists of three areas:<br>
<ul><li>The <b>header</b> is the same as for the home page.<br>
</li><li>The <b>content area</b> contains the questions and answer areas and a submit button.<br>
</li><li>The <b>footer</b> is the same as for the home page.</li></ul>

<h2>The discussion forum</h2>
At any time, the student may decide to visit your discussion forum for the course. The sample course does not contain a link to a valid forum, so its forum page looks as follows:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/forum404-parts.png' />

This page consists of three areas:<br>
<ul><li>The <b>header</b> is the same as for the home page.<br>
</li><li>The <b>content area</b> contains the discussion forum.<br>
</li><li>The <b>footer</b> is the same as for the home page.</li></ul>

<h2>Announcements</h2>
At any time, the student may decide to visit a page that contains announcements for the course. The sample application contains announcements for the Power Searching with Google class, so its announcements page looks as follows:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/announcements-parts.png' />

This page consists of three areas:<br>
<ul><li>The <b>header</b> is the same as for the home page.<br>
</li><li>The <b>content area</b> contains the announcements.<br>
</li><li>The <b>footer</b> is the same as for the home page.</li></ul>

<h2>Student profile</h2>
Finally, at any time, students can visit a profile page that displays information about their current status in the course and also lets them make some changes. This page looks as follows:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/myprofile-parts.png' />

This page consists of three areas:<br>
<ul><li>The <b>header</b> is the same as for the home page.<br>
</li><li>The <b>content area</b> contains the student profile.<br>
</li><li>The <b>footer</b> is the same as for the home page.</li></ul>

One of the actions students can take from this page is to unenroll from the course. If they choose to do so, they are first presented with a page that requests confirmation of intent to unenroll:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/unenroll-ask.png' height='265' width='315'>

If they confirm that they want to unenroll, they see a confirmation of unenrollment:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/unenroll-confirmation.png' height='265' width='315'>

<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/general-troubleshooting'>Ask questions in the forum</a> </th></thead><tbody>