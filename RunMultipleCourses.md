<h1>Arrange Multiple Courses on Disk</h1>
Course Builder supports multitenancy. You should create and run all your courses through the [Admin page](CreateNewCourse.md). This page discusses staging your multiple courses on disk before deploying to Google App Engine. This method is for older Course Builder versions (before 1.3.0) or those who are creating their course(s) on disk.



## 1. Make sure the courses can be run on the same instance. ##

When you host multiple courses in one instance, all of those courses must share most of their code.

Specifically, assume that _**`APPPATH`**_ is the directory containing Course Builder. Multiple courses that run in one GAE instance must share all files and code except what is in the _**`APPPATH`**_`/assets`, _**`APPPATH`**_`/data`, and _**`APPPATH`**_`/views` directories.

If you have existing courses that you want to consolidate into one instance, first check that they share the correct code. If this is not the case, stop here. You cannot host the courses on the same instance.

## 2. Create or copy unshared files to appropriate directories. ##

Instead of using the top-level `assets`, `data`, and `views` directories, when multiple courses share an instance, they use a new top-level directory,  _**`APPPATH`**_`/courses`.

This directory contains a separate subdirectory for each course. Each of _those_ subdirectories contains `assets`, `data`, and `views` directories and the `course.yaml` file for that one course.

For example, assume that you have two courses, Algebra and Calculus. You would have files and directories such as the following:

> _**`APPPATH`**_`/app.yaml` <br>
<blockquote><code>...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/algebra/</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/algebra/course.yaml</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/algebra/assets/...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/algebra/data/...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/algebra/views/...</code> <br>
<code>...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/calculus/</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/calculus/course.yaml</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/calculus/assets/...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/calculus/data/...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/courses/calculus/views/...</code> <br>
<code>...</code> <br>
<i><b><code>APPPATH</code></b></i><code>/models/models.py</code> <br>
<code>...</code></blockquote>

All files and directories outside of <i><b><code>APPPATH</code></b></i><code>/assets</code>, <i><b><code>APPPATH</code></b></i><code>/data</code>, and <i><b><code>APPPATH</code></b></i><code>/views</code> remain the same.<br>
<br>
If you consolidate existing courses, make a copy of one entire <i><b><code>APPPATH</code></b></i> tree. Move the top-level <code>assets</code>, <code>data</code>, and <code>views</code> directories and <code>course.yaml</code> files in that copy into an appropriately named subdirectory for that course. Then create other subdirectories for your other courses and copy their <code>assets</code>, <code>data</code>, and <code>views</code> directories and <code>course.yaml</code> files into the new tree.<br>
<br>
<h2>3. Let Course Builder know about the multiple courses.</h2>

<h3>Add URL routing</h3>

Once you have your files in the appropriate directory structure, you need to configure Course Builder to know where to find the courses and what URLs to use to refer to them. You do this by setting  the <code>GCB_COURSES_CONFIG</code> environment variable in <i><b><code>APPPATH</code></b></i><code>/app.yaml</code>.<br>
<br>
In our example, assume that you plan to use <code>http://www.example.com/index.html</code> as the home page that lists all of your courses, <code>http://www.example.com/algebra101</code> for the Algebra course, and <code>http://www.example.com/calculus202</code> for the Calculus course. In this situation, you would add the following section to <code>app.yaml</code>.<br>
<br>
<pre><code>...<br>
env_variables:<br>
  GCB_COURSES_CONFIG: 'course:/algebra101:/courses/algebra, course:/calculus202:/courses/calculus'<br>
...<br>
</code></pre>

<code>GCB_COURSES_CONFIG</code> is a comma-separated list of rules. Each rule has three parts, separated by colons:<br>
<br>
<ul><li><b>Type of entry.</b><br>Every rule must start with the word <code>course</code>. (This allows for future expansion of configuration rules.)</li></ul>

<ul><li><b>URL prefix.</b><br>Specifies the URL to use for this portion of the site. In the example, the home page is accessible as <code>http://www.example.com/</code> and the second unit of the Algebra course is accessible as <code>http://www.example.com/algebra101/unit?unit=2</code>.</li></ul>

<ul><li><b>File system location for course files.</b><br>Specifies where to find the files associated with each course. In the example, the views files for Algebra 101 are stored under <i><b><code>APPPATH</code></b></i><code>/courses/algebra/views/</code>.</li></ul>

<h3>GAE namespaces</h3>

When you run multiple courses in a single GAE instance, Course Builder needs a way to separate information that belongs to different courses. For example, each of your courses has a Unit 1. Course Builder needs to know which information corresponds to Unit 1 in Algebra 101 and which corresponds to Unit 1 in Calculus 202. For this purpose, it uses GAE <i>namespaces</i>. A namespace is a method for disambiguating collections of information.<br>
<br>
All of your courses run in a single GAE instance, but each course runs in separate namespace. Course Builder creates the name of the namespace using the course's file system location. Course Builder replaces slashes in the location with dashes and gives the namespace a prefix of <code>gcb-</code>. So in the example, the Algebra course uses the namespace name <code>gcb-courses-algebra</code>, based on its file system location of <code>/courses/algebra</code>.<br>
<br>
<h2>4. (Only for CB 1.0 applications) Modify each course's views to use relative URLs.</h2>

If you originally developed your courses using Course Builder 1.0, there's a final step involved to run multiple courses from the same application instance. This step does not apply if you originally developed your courses with Course Builder 1.1.<br>
<br>
In Course Builder 1.0, by default, many of the files in <code>views/</code> referred to other Course Builder files using <i>absolute</i> URLs.  An absolute URL starts with <code>http://</code>,  <code>https://</code>, or  <code>/</code>. For example, <code>http://www.example.com/index.html</code> and  <code>/index.html</code> are absolute URLs. A URL that does not start with <code>http://</code>,  <code>https://</code>, or  <code>/</code> is a <i>relative</i> URL; for example, <code>index.html</code> is a relative URL. An absolute URL describes precisely where the page lives, in "absolute" terms. A relative URL describes where the page lives, relative to the current directory. For example, in CB 1.0 <code>views/base.html</code> contained the following line:<br>
<br>
<blockquote><code>&lt;link href="/assets/css/main.css" rel="stylesheet" type="text/css"&gt;</code></blockquote>

When you run Course Builder for only one application, <code>/assets/css/main.css</code> refers to <i><b><code>APPPATH</code></b></i><code>/assets/css/main.css</code>. When you run it for multiple applications, what <code>/assets/css/main.css</code> refers to depends on the routing defined by <code>GCB_COURSES_CONFIG</code>.<br>
<br>
To fix the URLs, first add the <code>base</code> tag to <code>views/base.html</code> and <code>views/base_registration.html</code>. Add the following line to both of those files, as the first line in the <code>&lt;head&gt;</code> section.<br>
<br>
<blockquote><code> &lt;base href="{{ gcb_course_base }}" /&gt; </code></blockquote>

This tag tells the browser where to start looking for relative URLs.<br>
<br>
Next, check all URLs in your Course Builder 1.0 courses to make sure they're ok.<br>
<br>
<ul><li>Absolute URLs that start with either <code>http://</code> or <code>https://</code> do not change.<br>
</li><li>Absolute URLs that start with <code>/</code> (slash) probably become relative. In most cases, you change URLs pointing to files that live in a <code>views</code> directory. In these situations, you can simply remove the initial <code>/</code>. For example, change <code>/assets/css/main.css</code> to  <code>assets/css/main.css</code>.