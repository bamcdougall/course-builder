<h1>Frequently Asked Questions</h1>



## Costs ##
### How much does running Course Builder cost? ###
The Course Builder software is free of charge. When you use Course Builder, you create your course as an App Engine application. Currently, each App Engine application can consume a certain level of computing resources for free, controlled by a set of limits. If you need resources above these free limits, you can switch to a paid app to set a daily resource budget. For more information, see [Develop with App Engine](AppEngine.md).

## Course ##
#### Can I restrict who takes my course? ####
There is no feature that allows only certain students (like a "whitelist") to take your course.

#### Do my students need a Google account to register for a course made with Course Builder? ####
Yes, if students want to register for a course made with Course Builder, they will need a [Google account](https://accounts.google.com/SignUp?service=mail). However, if you turn browsing on for your course through [course settings](CourseSettings.md), students can take your course without ever registering.

#### How do I make my root course editable through the browser? ####
Even though you cannot make your root course editable through the browser, you can make a new course and import everything from the root course. Next, you would [re-route](URLMap.md) (switch) your URLs. Here are the steps to clone your root course and route the clone course to the root URL:

  1. In **Admin > Courses** create a [new course](CreateNewCourse.md).
  1. [Import](Dashboard#Outline.md) your old (read-only) course into the new course you created.
  1. In your new course, go to **Dashboard > Settings > Contents of course.yaml file** and click **Edit**.
  1. Delete all the contents in the text box.
  1. Copy all the contents of your `course.yaml` file that is now in your root course. Be careful of any extra spaces, which can cause an error.
  1. Add this line in the `course` section:
```
    now_available: False
```
> > Make sure you add the indentation (two spaces) before the specification. For example,
```
    course:
      # Course title
      title: 'My New Example Course'
      
      # Course Availability
      now_available: False
```
  1. Click **Save**.
  1. Go to **Admin > Settings > gcb\_courses\_config** and click **Edit**.
  1. Make your new course the root URL and place your old course on the URL path that you specified when creating your new course:
    1. In the final value (`course:/:/:`)) delete the `/` entry from the location entry. Your new course will get its data from the datastore, not from the file system.
    1. Add the datastore namespace of your new course. For example, if you specified `aux` as your Unique Name when you created your new course, your `gcb_courses_config` values will look like:
```
    course:/aux:/:
    course:/::ns_aux
```
    1. Click **Save**. The page itself shows how to interpret and specify the `gcb_courses_config` values.

#### Why does my course say Read-only course? ####
The root course you upload from your local computer to your live App Engine instance will always be read-only. The root course is located at the root  URL (at yourcourse.appspot.com vs. yourcourse.appspot.com/anothercourse). To edit that root course, you would make those edits like you originally did: on your local computer or development server and then push the changes to App Engine. The new courses you make through the browser on App Engine are editable through the browser. By default, those new courses are off root (yourcourse.appspot.com/anothercourse, yourcourse.appspot.com/anothercourse2, etc.).

## Google App Engine and Goolgle App Engine SDK ##
#### Cannot connect to upload data ####
When you enter your credentials, you may get the following error:


> <font color='green'> <code>urllib2.URLError: &lt;urlopen error [Errno 61] Connection refused&gt;</code> </font>

If you do, then you have forgotten to start your development server.

#### Custom URL ####
You don't have to be limited in using the `appspot.com`.  You can use a custom domain or subdomain that you own.  The instructions are here:
[Using a Custom Domain](https://cloud.google.com/appengine/docs/domain).

#### Development server won't start ####
If you do not see the registration page when you start your development server for the first time, there may be an error somewhere.

If you start your app from the command line, errors messages appear on the console. If you start your app from the Launcher, error messages appear in the logs. To see the logs, click on **Logs** in the Launcher's task bar.

One common problem is that, even though you downloaded Python 2.7, GAE may not notice. In this case, the log says either that you are not running Python 2.7 or has warnings about using a runtime older that is than the production runtime.

In this situation, you need to manually specify the path for Python 2.7. To do so:
  1. First, find out what that path is:
    1. Open a shell or command prompt.
    1. Run the command `which python`
    1. Copy the path that appears (for example, `/Library/Frameworks/Python.framework/Versions/2.7/bin/python`)
  1. From the **GoogleAppEngineLauncher** menu, choose **Preferences**.<br>A dialog box appears.<br>
<ol><li>On the <b>Python Path</b> line, enter the path you found above.</li></ol>

<h4>My course does not show up after I deploy</h4>
Make sure your <code>.yaml</code> files are formatted correctly.  <a href='http://yaml.org/'>YAML</a> files are sensitive to spacing since the spacing itself is part of the syntax. For example, although the following examples from <code>app.yaml</code> seem similar, the first example is wrong.<br>
<br>
Wrong (extra spaces before first word):<br>
<pre><code>blurb: |<br>
  Google Search makes it amazingly easy to find information. Come learn about<br>
the powerful advanced tools we provide to help you find just the right<br>
information when the stakes are high.<br>
</code></pre>

Correct:<br>
<pre><code>blurb: |<br>
  Google Search makes it amazingly easy to find information. Come learn about<br>
  the powerful advanced tools we provide to help you find just the right<br>
  information when the stakes are high.<br>
</code></pre>


<h2>Technical Terminology</h2>
<h4>How do CSV files work?</h4>
We suggest you use the <a href='CreateLessons#Create_lesson_content_from_the_browser.md'>browser</a> to create your units and lessons. For the default course, Course Builder gets such information from CSV files. <a href='http://en.wikipedia.org/wiki/Comma-separated_values'>CSV (comma-separated value)</a> is a simple format for storing lines of data. If you are going to edit the CSV files, you must use a plain text editor, like vi or Notepad++. Otherwise, the editor may introduce characters that will cause Course Builder to fail.<br>
<br>
CSV files can differ. As used by Course Builder:<br>
<br>
<ul><li>Each line represents one set of related data (think of a row in a table).</li></ul>

<ul><li>The pieces of data on a single line are separated by commas.</li></ul>

<ul><li>The  first line in the CSV file is special. It indicates what information is on each line and in what order. For example, the first line of the <code>data/unit.csv</code> file is:<br> <code>id,type,unit_id,title,release_date,now_available</code><br>This says that each subsequent line has those six pieces of information in the specified order.</li></ul>

<ul><li><b>The tricky part:</b> If one of the pieces of data on a line contains a comma, that entire piece of data needs to be surrounded by double quotes. For example, if you want to have a unit whose title is <b>All about cats, dogs, and mice</b>, then the line in <code>data/unit.csv</code> might look as follows:<br> <code>6,U,3,"All about cats, dogs, and mice",available July 12,True</code></li></ul>

<h4>What is a shell or command prompt?</h4>
In several places, you're asked to open a "shell or command prompt" and then enter some arcane command.<br>
<br>
Every operating system has a utility you can use that lets you type in text-based "commands" for some arbitrary piece of software. Each operating system calls this utility something different.<br>
<br>
<ul><li><b>Windows</b> calls it a <b>Command Prompt</b>.<br><br>Choose <b>Start > Command Prompt</b>. If Command Prompt does not appear on the <b>Start</b> menu, then instead choose <b>Start > All Programs > Accessories > Command Prompt</b>.</li></ul>

<blockquote><a href='http://wiki.course-builder.googlecode.com/git/images/windows_prompt.PNG'>http://wiki.course-builder.googlecode.com/git/images/windows_prompt.PNG</a></blockquote>

<ul><li><b>Mac</b> calls it either a <b>terminal</b> or a <b>shell</b>.<br><br>Open the <b>Finder</b>. Choose <b>Go > Utilities</b>. From the window that appears, choose <b>Terminal.app</b>.</li></ul>

<blockquote><img src='http://wiki.course-builder.googlecode.com/git/images/mac_terminal.png' /></blockquote>

<ul><li><b>Linux</b> and other <b>POSIX-compliant systems</b> call it a <b>shell</b>.