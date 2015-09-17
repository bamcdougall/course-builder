<h1>Create Lessons and Activities</h1>



When students click on a unit from the home page, they go to the page for the first lesson of the unit they chose. From there, they can go to any other lesson in that unit:

<img src='http://wiki.course-builder.googlecode.com/git/images/lesson.png' height='529' width='420' />

This page talks about the mechanics of creating a lesson page and its content, which includes activities. For information on what to put in your lesson, see [Develop the Content without Technology](TwoDevelop.md).

## What happens on a lesson page ##
A lesson page is where you teach your prepared material and optionally provide an activity to further help students understand the material just presented. Typically, each lesson consists of a short video, text version of the content, and an activity. You embed the video in the lesson page, hosting the video on YouTube. (See [Working with video](WorkWithVideo.md).) You put the text version in a file at some other URL; for Power Searching, we hosted the text versions as [Google Docs](http://support.google.com/docs/bin/answer.py?hl=en&answer=49008).

Students can watch the video as many times as they like. If they click on **Text version**, a separate browser window appears with that content.

## Page layout ##
This page consists of four areas:
  * The **header** contains
    * Course icon and name of your course.
    * Horizontal navigation bar, with two tabs on the left (Course and Forum) and an area with the person's address and a Logout link.
    * A breadcrumb indicating where in the course hierarchy this page exists, such as<br><code>Course &gt; Unit 1 &gt; Lesson 1</code>.<br>
<ul><li>The name and number of the unit.<br>
</li></ul><ul><li>A <b>vertical navigation bar</b>, consisting of a list of all lessons in the current unit.<br>
</li><li>The <b>content area</b> contains:<br>
<ul><li>The name of this lesson.<br>
</li><li>A button to access a text version of the lesson.<br>
</li><li>A list of the lesson objectives.<br>
</li><li>The lesson video.<br>
</li><li>Activities, if any.<br>
</li><li><b>Back</b> and <b>Next</b> buttons to navigate through the unit. (The first lesson of a unit does not include the <b>Back</b> button.)<br>
</li></ul></li><li>The <b>footer</b> contains the same two links as for the registration pages.</li></ul>

<h2>Create lessons</h2>
When you create lessons, the data gets stored in Google App Engine's datastore. Go to <b>Create > Outline</b> and click <b>+Add Lesson</b> from anywhere in the outline. Fill out the fields on the page and click <b>Save</b>. You have the option of creating the lesson but keeping it private (not viewable to students).<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/dashboard-lesson.png' />

You edit lessons that already exist in this page as well. Change any details you would like and click <b>Save</b>. There is a 4 MB limit on the size of the content you can enter. Usually, this is not a problem.  However, if you need to work around this, include links to the bigger resources instead of directly adding them into the lesson.<br>
<br>
<h2>Add components</h2>
Once you create your questions in the <a href='CreateQuestions#Question_Types_.md'>Question page</a> add them to the Lesson as components. In addition to questions, you can also add the following components:<br>
<br>
<ul><li>Embedded Code<br>
</li><li>Google Doc<br>
</li><li>Google Drive<br>
</li><li>Google Group<br>
</li><li>Google Spreadsheet<br>
</li><li>HTML 5 Video<br>
</li><li>Iframe<br>
</li><li>Image<br>
</li><li>Include<br>
</li><li>Link (type link first, then highlight and click the Link icon)<br>
</li><li>Markdown (we this this <a href='http://daringfireball.net/projects/markdown/'>markdown syntax</a>)<br>
</li><li>Mathematical Formula<br>
</li><li>Questionnaire<br>
</li><li>Question<br>
</li><li>Question Group<br>
</li><li>Text File Uploader (maximum size for uploaded files is 4MB)<br>
</li><li>YouTube videos</li></ul>

Each component will have its own icon. You can add multiple components or mix and match multiple images with multiple components. You can also directly write text into the textbox.<br>
<br>
The Lesson page has its own specific settings. Click the gear icon on the top left to access these settings. Most of the time you do not need to change the defaults on this page or can access them elsewhere when you can see this Lesson in the context of your entire course. The choice is yours when you want to edit them.<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/dashboard-lesson-setting.png' />

Note that there is a 4 MB limit on the size of the content you can enter. Usually, this is not a problem.  However, if you need to work around this, include links to the bigger resources instead of directly adding them into the lesson.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>