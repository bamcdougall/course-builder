<h1>Create Home Page</h1>



After successful registration, the student can click on **Course** in the navigation bar of the confirmation page to be taken to the home page for your course. Once registered, any time the student leaves your course and returns to its main URL, this is the page that appears.

<img src='http://wiki.course-builder.googlecode.com/git/images/homepage.png' height='529' width='420' />

You create the home page with these files:
  * `views/base.html` defines the header and footer areas. See [Modify Course Template](ModifyTemplate.md) for information about this file.
  * `views/course.html` defines the structure of the content area (the part that contains the blurb and the  schedule). You probably don't have to change this file.
  * `views/summary.html` defines course descriptive information for the introductory area above the course syllabus.
  * `data/unit.csv` defines the set of units in the course.

You _must_ change `views/base.html`, `views/summary.html`, and `data/unit.csv` to be relevant to your course.

By default, this version of the home page shares `views/base_registration.html`, `views/summary.html`, and `data/unit.csv` with the version that unregistered people see.


## Structure of home page ##

`views/course.html` contains the structure of the home page. It directly contains the parts of the home page that you do not need to change for a specific course, such as the structure for how the syllabus is displayed. `views/course.html` automatically includes `views/summary.html`.

`views/summary.html` contains the course-specific information, such as the  course description and an introductory video. You must change the information in `views/summary.html`.

You specify the actual text to display in `data/unit.csv`.


## Home page content ##

`data/unit.csv` contains the list of information to appear on the home page. The first line describes the content of the other lines:

> `id,type,unit_id,title,release_date,now_available`

Each line after that contains the information for an individual part of the course, such as:
> `1,A,Pre,Pre-course assessment,,True`<br>
<blockquote><code>2,U,1,Introduction,available July 10,True</code><br>
<code>...</code><br>
<code>11,O,http://www.youtube.com/watch?v=dwlpViuIYgU&amp;feature=player_embedded,Hang Out with Search Experts Video,,True</code></blockquote>

When you edit the file, leave the first line as is. Replace all of the other lines with the information relevant to your course. The template files and various Python files refer to these fields when displaying course information.  Each line contains the following fields:<br>
<br>
<ul><li><code>id:</code> An integer representing this item. These integers must start at 1 and be in order.<br>
</li><li><code>type:</code> One of A, U, or O, depending on whether this line represents an assessment, a unit, or something else (such as a link to a video or to an upcoming Hangout On Air).<br>
</li><li><code>unit_id:</code> An id for this item. Its value depends on the type:<br>
<ul><li>For an assessment (type=A): the suffix of the corresponding <code>assessment-</code><b><code>SUFFIX</code></b><code>.js</code> file. By default, one of <code>Pre</code>, <code>Mid</code>, or <code>Fin</code>. See <a href='CreateAssessments#Writing_assessments.md'>Writing assessments</a>.<br>
</li><li>For a unit (type=U): an integer representing the unit number.<br>
</li><li>For something else (type=O): a URL pointing to that thing.<br>
</li></ul></li><li><code>title:</code> The text to describe this item.<br>
</li><li><code>release_date:</code> When this release will be available to students. This string appears only if <code>now_available</code> is <code>False</code>. Optional.<br>
</li><li><code>now_available:</code> A Boolean representing whether or not students can currently access this item. If <code>False</code>, the title is not a link.  (Note that case is important in this value; it must be either <code>True</code> or <code>False</code>.)</li></ul>

Typically, you make the lessons in your course available over time, as the course progresses. When you first launch the course, for example, perhaps only the pre-course assessment and the first unit are available. In that case, only those two lines would have <code>now_available</code> set to <code>True</code>. Later, you change the data associated with subsequent lessons as they become available.<br>
<br>
<h2>Testing changes</h2>

If you change the content of the <code>data/unit.csv</code> file, you must load the changed data into your development server as described in <a href='AppEngine#Modify_your_app_and_see_the_effects.md'>Modify your app and see the effects</a>.<br>
<br>
Changes you make to any file in the <code>views</code> directory appear automatically in your running development server. That is, after you make a change to one of these files, simply load (or reload) a page that uses that view and the change appears.<br>
<br>
To see how to make these changes in your live, deployed course, see <a href='UploadCode.md'>Deploy Your App</a>.<br>
<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>