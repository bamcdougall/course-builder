# Verify Your Code #

As discussed on other pages, creating the [home page](CreateHomePage.md), [lessons](CreateLessons.md), [activities](CreateActivities.md), and [assessments](CreateAssessments.md) requires you to create CSV files (for the home page and for lessons) and a set of JavaScript files (for activities and for assessments). Course Builder contains a tool that lets you scan these files for broken references and other errors.

Note that this verifier may not catch all errors. It is a first step, to find certain anticipated problems. You should still test your app by visiting the course pages on your local development server and checking that links and input fields work as expected.

## Run the verification tool ##

To run this tool, open a [shell or command prompt](http://code.google.com/p/gcb-x-03141590/wiki/FAQ#What%27s_a_%22shell_or_command_prompt%22?). In that window:

> `cd `_**`APPPATH`**_<br>
<blockquote><code>python tools/verify.py</code></blockquote>

where <i><b><code>APPPATH</code></b></i> is the directory containing your app.<br>
<br>
<br>
<h2>What it verifies</h2>

The verification tool outputs a list of warnings and errors that indicate possible invalid data in the CSV files and incorrectly-formatted activities and assessments. For example, in CSV files it catches incorrectly numbered units or a row containing too many or too few elements.<br>
<br>
If the tool runs with no errors, you see output similar to the following:<br>
<br>
<blockquote><code>INFO: Started verification in: /oy/coursebuilder/tools/verify.py</code><br>
<code>INFO: Loading units from: /oy/coursebuilder/tools/../data/unit.csv</code><br>
<code>INFO: Loading lessons from: /oy/coursebuilder/tools/../data/lesson.csv</code><br>
<code>INFO: Unit 1: Pre-course assessment</code><br>
<code>INFO: Unit 2: Introduction</code><br>
<code>INFO:   Lesson 1: Introduction</code><br>
<code>INFO:   Lesson 2: Filter image results by color</code><br>
<code>...</code><br>
<code>INFO: Unit 9: Post-course assessment</code><br>
<code>INFO: Unit 10: Power Searching with Search Experts Video</code><br>
<code>INFO: Unit 11: Hang Out with Search Experts Video</code><br>
<code>INFO: Loading activities:</code><br>
<code>INFO:   Verified activity: /oy/coursebuilder/tools/../assets/js/activity-1.2.js</code><br>
<code>INFO:   Verified activity: /oy/coursebuilder/tools/../assets/js/activity-1.3.js</code><br>
<code>...</code><br>
<code>INFO:   Verified activity: /oy/coursebuilder/tools/../assets/js/activity-6.3.js</code><br>
<code>INFO: Read 26 activity files</code><br>
<code>INFO: Loading assessment:</code><br>
<code>INFO:   Verified assessment /oy/coursebuilder/tools/../assets/js/assessment-Pre.js</code><br>
<code>INFO:   Verified assessment /oy/coursebuilder/tools/../assets/js/assessment-Mid.js</code><br>
<code>INFO:   Verified assessment /oy/coursebuilder/tools/../assets/js/assessment-Fin.js</code><br>
<code>INFO: Read 3 assessment files</code><br>
<code>INFO: Read 11 units</code><br>
<code>INFO: Read 29 lessons</code><br>
<font color='green'> <code>INFO: Completed verification: 0 warnings, 0 errors.</code> </font></blockquote>

If the tool encounters errors, instead you see output similar to the following:<br>
<br>
<blockquote><code>INFO: Started verification in: /oy/coursebuilder/tools/verify.py</code><br>
<code>INFO: Loading units from: /oy/coursebuilder/tools/../data/unit.csv</code><br>
<code>INFO: Loading lessons from: /oy/coursebuilder/tools/../data/lesson.csv</code><br>
<code>INFO: Unit 1: Pre-course assessment</code><br>
<code>INFO: Unit 2: Introduction</code><br>
<code>INFO:   Lesson 1: Introduction</code><br>
<code>INFO:   Lesson 2: Filter image results by color</code><br>
<code>...</code><br>
<code>INFO: Unit 9: Post-course assessment</code><br>
<code>INFO: Unit 10: Power Searching with Search Experts Video</code><br>
<code>INFO: Unit 11: Hang Out with Search Experts Video</code><br>
<code>WARNING: Unused lesson_id 777 (9.777.Summary)</code><br>
<code>ERROR: Lesson has unknown unit_id 9 (9.777.Summary)</code><br>
<code>INFO: Loading activities:</code><br>
<code>INFO:   Verified activity: /oy/coursebuilder/tools/../assets/js/activity-1.2.js</code><br>
<code>INFO:   Verified activity: /oy/coursebuilder/tools/../assets/js/activity-1.3.js</code><br>
<code>...</code><br>
<code>INFO:   Verified activity: /oy/coursebuilder/tools/../assets/js/activity-6.2.js</code><br>
<code>ERROR:   Missing activity: /oy/coursebuilder/tools/../assets/js/activity-9.777.js</code><br>
<code>INFO: Read 26 activity files</code><br>
<code>INFO: Loading assessment:</code><br>
<code>INFO:   Verified assessment /oy/coursebuilder/tools/../assets/js/assessment-Pre.js</code><br>
<code>ERROR: Unable to parse assessment in file /oy/coursebuilder/tools/../assets/js/assessment-Mid.js</code><br>
<code>  1: </code><br>
<code>  2: </code><br>
<code>  ... </code><br>
<code>  20: blah blah blah</code><br>
<code>  21: </code><br>
<code>  22: assessment = {</code><br>
<code>...</code><br>
<code>  64:   assessmentName: 'midcourse',</code><br>
<code>...</code><br>
<font color='red'><code>ERROR: &lt;type 'exceptions.SyntaxError'&gt;</code></font><br>
<font color='red'><code>ERROR: invalid syntax (&lt;string&gt;, line 20)</code></font><br>
<font color='red'><code>ERROR: &lt;traceback object at 0x1ef5680&gt;</code></font><br>
<code>INFO:   Verified assessment /oy/coursebuilder/tools/../assets/js/assessment-Fin.js</code><br>
<code>INFO: Read 3 assessment files</code><br>
<code>INFO: Read 11 units</code><br>
<code>INFO: Read 29 lessons</code><br>
<font color='red'><code>INFO: Completed verification: 1 warnings, 7 errors.</code></font></blockquote>


You can go back and fix the errors, and run the verifier again after you finish.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>