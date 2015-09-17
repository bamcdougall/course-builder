<h1>Modify Course Template</h1>



Course Builder uses _view_ files as templates to determine the look and feel of all of the pages in your course. The view files are HTML files defined in the `views/` directory.

The templates work together hierarchically. Every page displayed for your course starts from either the `base_registration.html` template (for unenrolled people) or the `base.html` template (for enrolled people). The two base templates define the overall HTML structure of a page.

The other views, such as `activity.html`, fill in more structure for a specific type of page. Finally, files outside of `views` may fill in the content for a particular page, such as `activity-1.1.js`.

For more information on the structure of these pages, see [Using templates](https://developers.google.com/appengine/docs/python/gettingstartedpython27/templates) for an introduction and then check out the [Jinja2 documentation](http://jinja.pocoo.org/docs).

## Registration ##
Course Builder uses the following files to render the Registration page:
  * `views/base_registration.html` defines the header and footer areas. This page is used by all pages displayed to an unregistered person.
  * `views/confirmation.html` defines the content of the registration form.
  * `views/preview.html` defines the structure of the content area. This page is very similar to its registered counterpart, `views/course.html`.
  * `views/register.html` defines the content of the registration form.
  * `views/summary.html` provides the course description and other introductory material.   This page is also used by `views/course.html`.
The [Registration confirmation page](CreateRegistration#Registration_confirmation_page.md) additionally uses:
  * `views/confirmation.html` defines the content of the registration form.

We strongly suggest you deploy Course Builder to Google App Engine and create your course in the browser after doing so. This places the course in the Google App Engine datastore. If you wanted to change the content of the example course on disk, you would change the .csv files in the `data/` directory.
  * `data/unit.csv` provides the actual content of the content area.   This page is also used by `views/course.html`.

## Course home page ##
The following files render the course home page (**Course** in the navigation bar):

  * `views/base.html` defines the header and footer areas.  This page is used by all pages displayed to a registered student.
  * `views/course.html` defines the structure of the content area. This page is very similar to its unregistered counterpart, `views/preview.html`.
  * `views/summary.html` provides the course description and other introductory material.  This page is also used by `views/preview.html`.

We strongly suggest you deploy Course Builder to Google App Engine and create your course in the browser after doing so. This places the course in the Google App Engine datastore. If you wanted to change the content of the example course on disk, you would change the .csv files in the `data/` directory.

  * `data/unit.csv` provides the actual content of the content area.  This page is also used by `views/preview.html`.

The first line describes the content of the other lines:
> `id,type,unit_id,title,release_date,now_available`

Each line after that contains the information for an individual part of the course, such as:
> `1,A,Pre,Pre-course assessment,,True`<br>
<blockquote><code>2,U,1,Introduction,available July 10,True</code><br>
<code>...</code><br>
<code>11,O,http://www.youtube.com/watch?v=dwlpViuIYgU&amp;feature=player_embedded,Hang Out with Search Experts Video,,True</code></blockquote>

If you edit the file, leave the first line as is. Replace all of the other lines with the information relevant to your course. The template files and various Python files refer to these fields when displaying course information.  Each line contains the following fields:<br>
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

<h2>Lesson</h2>
The following files render a lesson page:<br>
<ul><li><code>views/base.html</code> defines the first two parts of the header and defines the footer.  This page is used by all pages displayed to a registered student.<br>
</li><li><code>views/unit.html</code> defines the second two lines of the header, the vertical navigation, and the content area.</li></ul>

We strongly suggest you deploy Course Builder to Google App Engine and create your course in the browser after doing so. This places the course in the Google App Engine datastore. If you wanted to change the content of the example course on disk, you would change the .csv files in the <code>data/</code> directory. It contains information about each lesson, such as the video's URL and the lesson's title.<br>
<ul><li><code>data/lesson.csv</code> contains the content of the content area for all lessons in your example course on disk.</li></ul>

The first line describes the content of the other lines:<br>
<blockquote><code>unit_id,unit_title,lesson_id,lesson_title,lesson_activity,lesson_activity_name,lesson_notes,lesson_video_id,lesson_objectives</code></blockquote>

Each line after that contains the information for an individual lesson, such as:<br>
<br>
<blockquote><code>3,Advanced techniques,1,Web organization,Yes,Lesson 3.1 Activity,https://docs.google.com/SOMETHING,DndOoEVCWfI,"&lt;ul&gt;&lt;li&gt;Describe how operators filter results.</code><br>
<code>&lt;li&gt;Use the site: operator at the top-level domain and website levels.&lt;/li&gt;</code><br>
<code>&lt;li&gt;Use a word you expect to appear on the target page to refine results.&lt;/li&gt;</code><br>
<code>&lt;li&gt;Use the site: operator within images and news results.&lt;/li&gt;&lt;/ul&gt;"</code></blockquote>

When you edit the file, leave the first line as is. Replace all of the other lines with the information relevant to your course. Each line contains 9 fields. The template files and various Python files refer to these fields when displaying course information. Those files use a different name for the field than does <code>data/lesson.csv</code>. The mapping between the two names is defined in <code>verify.py</code>.<br>
<br>
<table><thead><th> </th><th> <b><code>data/lesson.csv</code> field</b> </th><th> <b>Referred to as</b> </th><th> <b>Description</b> </th></thead><tbody>
<tr><td> 1 </td><td> <code>unit_id</code>                      </td><td> <code>unit.unit_id</code> </td><td> An integer indicating which unit this lesson is part of.  You must number units consecutively starting with 1. </td></tr>
<tr><td> 2 </td><td> <code>unit_title</code>                   </td><td> <code>unit.title</code> </td><td> The name of the unit. </td></tr>
<tr><td> 3 </td><td> <code>lesson_id</code>                    </td><td> <code>lesson.id</code> </td><td> An integer indicating which lesson this is.  You must number lessons in each unit consecutively starting with 1. </td></tr>
<tr><td> 4 </td><td> <code>lesson_title</code>                 </td><td> <code>lesson.title</code> </td><td> The name of the lesson. </td></tr>
<tr><td> 5 </td><td> <code>lesson_activity</code>              </td><td> <code>lesson.activity</code> </td><td> Set this value to <code>Yes</code> if there is an associated activity. Leave it blank if there is not. </td></tr>
<tr><td> 6 </td><td> <code>lesson_activity_name</code>         </td><td> <code>lesson.activity_title</code> </td><td> The name of the associated activity, to appear as the title of the activity page. </td></tr>
<tr><td> 7 </td><td> <code>lesson_notes</code>                 </td><td> <code>lesson.notes</code> </td><td> URL of the text version of the lesson. </td></tr>
<tr><td> 8 </td><td> <code>lesson_video_id</code>              </td><td> <code>lesson.video</code> </td><td> The id of the YouTube video associated with the lesson. For example, if the URL of the video is <a href='http://www.youtube.com/watch?v=DndOoEVCWfI'>http://www.youtube.com/watch?v=DndOoEVCWfI</a>, then the id is <code>DndOoEVCWfI</code>. </td></tr>
<tr><td> 9 </td><td> <code>lesson_objectives</code>            </td><td> <code>lesson.objectives</code> </td><td> A string containing lesson objectives, to appear after the title of the lesson. The string can contain HTML elements. </td></tr></tbody></table>

The following image shows where this information appears on the screen:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/annotatedlesson.png' />

<h3>Change lesson layout example</h3>
Assume that you do not want to use videos in your course. And that, for every lesson, you have associated reference material you want to provide. In this case, a typical lesson might look as follows:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/lesson-text.png' height='388' width='420' />

For this change, all you need to do is edit the file that renders a lesson page (<code>views/unit.html</code>) and supply different information in <code>data/lesson.csv</code>. Originally, <code>views/unit.html</code> contains, in part:<br>
<br>
<pre><code>  ...<br>
  &lt;div class="gcb-col-3"&gt;<br>
    &lt;p style="float:right; margin-top: 0px;"&gt;<br>
      &lt;a class="gcb-button gcb-button-primary" href="{{ lesson.notes }}" target="_blank"&gt;Text Version&lt;/a&gt;<br>
    &lt;/p&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;&lt;!-- /gcb-cols --&gt;<br>
  {% if lesson.video %}<br>
  &lt;p class="video-container"&gt;<br>
    &lt;iframe width="650px" height="400px" <br>
      src="http://www.youtube.com/embed/{{ lesson.video   }}?feature=player_embedded&amp;rel=0" <br>
      frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;<br>
  &lt;/p&gt;<br>
  {% endif %}<br>
  ...<br>
</code></pre>

To make the changes suggested above, change that snippet to:<br>
<br>
<pre><code>  ...<br>
  &lt;div class="gcb-col-3"&gt;<br>
    &lt;p style="float:right; margin-top: 0px;"&gt;<br>
      &lt;!-- DIFFERENT BUTTON LABEL --&gt;<br>
      &lt;a class="gcb-button gcb-button-primary" href="{{ lesson.notes }}" target="_blank"&gt;Reference Material&lt;/a&gt;<br>
    &lt;/p&gt;<br>
  &lt;/div&gt;<br>
  &lt;/div&gt;&lt;!-- /gcb-cols --&gt;<br>
  {% if lesson.video %}<br>
  &lt;!-- SIMPLER IFRAME --&gt;<br>
  &lt;iframe width="95%" height="600" src="{{ lesson.video }}"&gt;&lt;/iframe&gt;<br>
  {% endif %}<br>
  ...<br>
</code></pre>

Then, in <code>data/lesson.csv</code>, where you previously put the ID of a YouTube video, you instead put the URL of the file you want to appear inside the iframe. Yes, the code still calls it a "video", but it doesn't really care. That's all you need to do for this change.<br>
<br>
Notice that in the example you changed the semantics of the <code>lesson_video_id</code> field in <code>data/lesson.csv</code>. Previously, the code expected that field to contain a part of a URL and <code>views/unit.html</code> supplied the rest of the URL. With this change, the code expects that field to be a complete URL.<br>
<br>
In general, if you make changes to the <b>semantics</b> of the data (as we did here), you need to be very careful that you make the changes everywhere that data is used. It happens to be the case that <code>lesson_video_id</code> is only used in <code>views/unit.html</code>, so this was a safe, easy change. If you change the semantics of other data fields, you need to be sure to account for that change everywhere.<br>
<br>
We strongly suggest that you do not change the semantics of these fields unless you thoroughly understand the Course Builder code. These fields are used in many places:<br>
<ul><li><code>unit_id</code>
</li><li><code>lesson_id</code>
</li><li><code>lesson_activity</code></li></ul>

You can change the semantics of the following fields. They are used only in the template files listed here:<br>
<br>
<table><thead><th> <b>Field in <code>data/lesson.csv</code></b> </th><th> <b>Which templates use it</b> </th></thead><tbody>
<tr><td> <code>unit_title</code>                      </td><td> <code>views/activity.html</code> <br><code>views/course.html</code> <br> <code>views/unit.html</code> </td></tr>
<tr><td> <code>lesson_title</code>                    </td><td> <code>views/unit.html</code>  </td></tr>
<tr><td> <code>lesson_activity_name</code>            </td><td> <code>views/activity.html</code> </td></tr>
<tr><td> <code>lesson_notes</code>                    </td><td> <code>views/activity.html</code> <br> <code>views/unit.html</code> </td></tr>
<tr><td> <code>lesson_video_id</code>                 </td><td> <code>views/unit.html</code>  </td></tr>
<tr><td> <code>lesson_objectives</code>               </td><td> <code>views/unit.html</code>  </td></tr></tbody></table>

You can change the <b>look</b> of any field in one place, without consequences in other places.<br>
<br>
<h2>Activity</h2>
The following files render an activity page:<br>
<ul><li><code>views/base.html</code> defines the footer and the first two lines of the header; it is the same file as for lessons.<br>
</li><li><code>views/activity.html</code> defines the second two lines of the header, the vertical navigation, and the content area. Note that these are the same parts <code>views/unit.html</code> defines for lessons. You probably want to be consistent in these files.</li></ul>

We strongly suggest you deploy Course Builder to Google App Engine and create your course in the browser after doing so. This places the course in the Google App Engine datastore. If you wanted to change the activity questions of the example course on disk, you would change the .js files in the <code>assets/js/</code> directory.<br>
<ul><li><code>assets/js/activity-</code><i><b><code>N.M</code></b></i><code>.js</code> contains a JavaScript array that fills in the actual question and answer areas for the activity. Each activity section has its own file.</li></ul>

The activity for a particular lesson goes in a corresponding JavaScript file. The JavaScript filename is <code>activity-</code><i><b><code>N.M</code></b></i><code>.js</code>, where <i><b><code>N</code></b></i> is the unit number and <i><b><code>M</code></b></i> is the lesson number.<br>
<br>
The format of the file is<br>
<pre><code>var activity = [<br>
  entry1,<br>
  ...,<br>
  entryN<br>
]<br>
</code></pre>

The file contains a single array variable named <code>activity</code>. Each element in the array is arbitrary HTML, a question, or answer information.<br>
<br>
While it looks like the questions and their answers are connected to each other, the code does not enforce this. The code just renders the elements of the array one after the other. It is up to you to make sure they are in a logical order.<br>
<br>
<h3>Arbitrary HTML</h3>

The first choice for an array element is a string that contains a set of complete HTML elements.  That is, if the string contains an open HTML tag (such as <code>&lt;em&gt;</code>), it must also have the corresponding close tag (such as <code>&lt;/em&gt;</code>).<br>
<br>
The code simply renders the HTML you enter. For example, the sample activities all start with a 1-cell table that summarizes the major points of the associated lesson. With this HTML:<br>
<br>
<pre><code>'&lt;table border="2"&gt;&lt;tr&gt;&lt;td&gt;&lt;b&gt;Search Tips:&lt;/b&gt;&lt;p&gt;&lt;ul&gt;&lt;li&gt;In the last video, you<br>
learned how to use color filtering within image search to narrow your image results to<br>
images made up primarily of a certain color. You do this by clicking on the<br>
appropriate colored box in the left panel. &lt;li&gt;Please note that you can’t filter<br>
by color on iPad or Android tablets, but you can answer the questions below as<br>
if you were using a laptop or desktop computer.&lt;/ul&gt;&lt;p&gt;&lt;/tr&gt;&lt;/td&gt;&lt;/table&gt;&lt;br/&gt;',<br>
</code></pre>

The code displays the following:<br>
<br>
<blockquote><table><thead><th> <b>Search Tips:</b><br><ul><li>In the last video, you learned how to use color filtering within image search to narrow your image results to images made up primarily of a certain color. You do this by clicking on the appropriate colored box in the left panel.</li><li>Please note that you can’t filter by color on iPad or Android tablets, but you can answer the questions below as if you were using a laptop or desktop computer.</li></ul> </th></thead><tbody></blockquote></tbody></table>

<b>Note:</b> This and other example code contains line breaks inside a JavaScript string for readability. You cannot do that in your code. Each string must be on a single line.<br>
<br>
<h3>Questions</h3>

As far as the code is concerned, there is no difference between a question and any other arbitrary HTML string. The difference is only in that you follow a question with <a href='#Answer_information.md'>answer information</a>.<br>
<br>
If you want to number your questions, you must include the numbers in your HTML. For example, with the following two HTML strings:<br>
<br>
<pre><code>"&lt;p&gt;&lt;img src='assets/img/Image1.1a.png' height=450 width=785&gt;&lt;/p&gt;", <br>
'&lt;p&gt;&lt;b&gt;1.&lt;/b&gt; You want to reread an introductory accounting textbook from<br>
school, but you cannot remember the exact title. You recall that the cover is<br>
yellow and has puzzle pieces on it. In the image above, where would you click to<br>
filter the results in order to locate the book?&lt;/p&gt;',<br>
</code></pre>

The code displays the following:<br>
<br>
<blockquote><b><em>...the image...</em></b><br><b>1.</b> You want to reread an introductory accounting textbook from school, but you cannot remember the exact title. You recall that the cover is yellow and has puzzle pieces on it. In the image above, where would you click to filter the results in order to locate the book?</blockquote>

<h3>Answer information</h3>

The final possibility for an entry in the <code>activity</code> array is a JavaScript object that represents answer information. Depending on the answer type, this information can have several forms. The object contains properties such as the type of question, a <a href='https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions'>regular expression</a> indicating the correct answer, or a string to show in case of either correct or incorrect answers or to show when the student asks for help.<br>
<br>
A question can be one of three types:<br>
<ul><li><a href='#Single_multiple-choice_question.md'>A single multiple-choice question</a>
</li><li><a href='#Group_of_multiple-choice_questions.md'>A group of multiple-choice questions</a>
</li><li><a href='#Free_text.md'>Free text</a>
</li><li><a href='#Multiple-choice_questions_with_multiple_correct_answers.md'>Multiple correct answers</a></li></ul>

<h4>Single multiple-choice question</h4>

The code for a single multiple-choice question looks like the following example:<br>
<br>
<pre><code>var activity = [<br>
<br>
  {questionType: 'multiple choice',<br>
  choices: [<br>
    ['[yarnbombing news article]', false, <br>
      'Try again. This is a risky approach, since many news articles do not call themselves \'news articles\' on the page.'],<br>
     ['[yarnbombing] then click News in the left menu', true,<br>
       'Correct! Using a collection of a specific type of media, like News, can help you get to the best pages faster.'],<br>
     ['[i would like to find news articles about yarnbombing]', false,<br>
      'Try again. We want to avoid including a lot of extra, confusing words into a query.'],<br>
     ['[what are some recent publications about yarnbombing]', false,<br>
      'Try again. Stating what you want in this way, introduces a lot of extra words into a query.']<br>
    ]<br>
  }<br>
<br>
];<br>
</code></pre>

This code represents a single JavaScript object with two required attributes. The first attribute is <code>questionType</code>. The value <code>'multiple choice'</code> indicates that this answer is for one multiple-choice question. The second attribute is <code>choices</code>. The value of this attribute is an array of the possible answers to the question and what to do with each.<br>
<br>
Each element of the <code>choices</code> array is itself a 3-element array whose required values are:<br>
<ul><li>The text to display for this answer.<br>
</li><li>A Boolean value indicating whether or not this is the correct answer.<br>
</li><li>The text to display if this choice is submitted.</li></ul>

For this question, students see the following:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/answer-multiple.png' />

Students see a list of possible answers, a button labelled <b>Check Answer</b>, and an empty text box. When they choose one of the answers and click on <b>Check Answer</b>, the code displays the string associated with that answer. In this example, if the user submits the answer <code>[yarnbombing news article]</code>, the code displays <code>Try again. This is a risky approach, since many news articles do not call themselves 'news articles' on the page.</code>

If students choose the correct answer, the code also highlights the line containing that answer.<br>
<br>
<h4>Group of multiple-choice questions</h4>

Sometimes you want to group a set of multiple-choice questions so that students can only check their answers after answering all of the questions in the group. You can do this with code that looks like the following example:<br>
<br>
<pre><code>var activity = [<br>
<br>
  {questionType: 'multiple choice group',<br>
    questionsList: [ <br>
      {questionHTML: '&lt;b&gt;1.&lt;/b&gt; In the United States, the state of California is known for its earthquakes. Have there been earthquakes in Iowa?&lt;br/&gt;',<br>
        choices: ['Yes', 'No'],<br>
        correctIndex: 0},<br>
      {questionHTML: '&lt;b&gt;2.&lt;/b&gt; Has there ever been an earthquake in Maine?&lt;br/&gt;',<br>
        choices: ['Yes', 'No'],<br>
        correctIndex: 0},<br>
      {questionHTML: '&lt;b&gt;3.&lt;/b&gt;Which state (Iowa or Maine) had an earthquake more recently?&lt;br/&gt;',<br>
        choices: ['Iowa', 'Maine'],<br>
        correctIndex: 1}<br>
    ],<br>
    allCorrectOutput: 'Hopefully you used Control-F to find the information quickly.',<br>
    someIncorrectOutput: 'Remember, you can use Control-F to find information like this more quickly. Please try again.'<br>
  }<br>
<br>
];<br>
</code></pre>

This code represents a single JavaScript object with four required attributes:<br>
<br>
<ul><li><code>questionType</code>. The value <code>'multiple choice group'</code> indicates that this answer is a group of multiple-choice questions.</li></ul>

<ul><li><code>questionsList</code>. The value of this attribute is an ordered array of the related questions. Each element of the <code>questionsList</code> array is a JavaScript object representing one question and answer. Each of those objects has 3 attributes:<br>
<ul><li><code>questionHTML:</code> HTML representing the text to display for this question.<br>
</li><li><code>choices:</code> An array of the possible answers to this question.<br>
</li><li><code>correctIndex:</code> The index in the <code>choices</code> array of the correct answer. (Remember that JavaScript arrays are 0-based.)</li></ul></li></ul>

<ul><li><code>allCorrectOutput.</code> The text to display when the student correctly answers all questions in the group. Before this text, the code includes the string "All your answers are correct!"</li></ul>

<ul><li><code>someIncorrectOutput.</code> The text to display when the student incorrectly answers at least one of the questions. In addition to this text, students see how many of their answers were incorrect.</li></ul>

For this example, if students answer one question correctly, they see the following:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/answer-group.png' />

<h4>Multiple-choice questions with multiple correct answers</h4>

You can present multiple choice questions that have more than one correct answer. The code for this question type looks like the following example:<br>
<br>
<pre><code>var activity = [<br>
<br>
  { questionType: 'multiple choice group',<br>
    questionGroupHTML: '&lt;p&gt;This section will test you on colors and numbers.&lt;/p&gt;',<br>
    questionsList: [<br>
          {questionHTML: 'Pick all &lt;i&gt;odd&lt;/i&gt; numbers:',<br>
           choices: ['1', '2', '3', '4', '5'], correctIndex: [0, 2, 4]},<br>
          {questionHTML: 'Pick one &lt;i&gt;even&lt;/i&gt; number:',<br>
           choices: ['1', '2', '3', '4', '5'], correctIndex: [1, 3],<br>
           multiSelect: false},<br>
          {questionHTML: 'What color is the sky?',<br>
           choices: ['#00FF00', '#00FF00', '#0000FF'], correctIndex: 2}<br>
    ],<br>
    allCorrectMinCount: 2,<br>
    allCorrectOutput: 'Great job! You know the material well.',<br>
    someIncorrectOutput: 'You must answer at least two questions correctly.'<br>
  }<br>
<br>
];<br>
</code></pre>

You can specify whether a student must choose all the answers correctly or just one, in order for the question to be correct. By default, the <code>multiSelect:</code> setting is <code>true</code>, which means that the student needs to select all the correct answers. You do not need to specify <code>multiSelect: true</code> since by default it is the case.<br>
<br>
To change the default behavior, specify <code>multiSelect: false</code>. With <code>multiSelect: false</code> specified in the second question in the following example, the student receives an overall score of two out of three. Question one is incorrect while question two is correct because with question two, the student only needed to select one correct answer.<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/answer-multiple-correct.png' />

If we specified <code>multiSelect: true</code> (or omitted any specification) in question two and the student only selected one correct answer, then the student would have received an overall score of one out of three.<br>
<br>
When answers are presented as checkboxes, it means that all correct choices must be selected. When answers are presented as radio buttons, it means you must select only one correct answer.<br>
<br>
The <code>allCorrectMinCount:</code> setting indicates how many questions in the activity must be answered correctly for successful completion. If the students are successful, they received the message in <code>allCorrectOutput:</code>. Else, they receive the message in <code>someIncorrectOutput</code>.<br>
<br>
<h4>Free text</h4>

The final type of answer is a free text area. Use this answer type when your question is somewhat open ended. Students type their answer into a text box of a size you specify.<br>
<br>
The code uses a <a href='https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions'>regular expression</a> to verify the answer. Regular expressions can be notoriously difficult for a programmer to get right. For this reason, you need to be very careful with the wording of any question that takes a free text answer. Your regular expression needs to account for reasonable variations in student responses. The code for a simple free text answer looks as follows:<br>
<br>
<pre><code>var activity = [<br>
<br>
  { questionType: 'freetext',<br>
    correctAnswerRegex: /white?/i,<br>
    correctAnswerOutput: "Correct--Many charts, tables, and graphs have white backgrounds, so filtering for white images helps you find them faster.",<br>
    incorrectAnswerOutput: "Try again. Consider what color would be dominant in images of charts, tables, and graphs. Look at the results above. Each of those sources is traditionally printed on paper.",<br>
    showAnswerOutput: "Our search expert says: I would click on white in the color grid, since many charts, tables, and graphs have white backgrounds." <br>
  }<br>
<br>
];<br>
</code></pre>

This code represents a single JavaScript object with several attributes. The first two are required; the others are optional.<br>
<br>
<ul><li><code>questionType</code>. The value <code>'freetext'</code> indicates that this answer expects a string from the student.</li></ul>

<ul><li><code>correctAnswerRegex</code> is a regular expression to use to check whether or not the student's answer is correct.  In constructing a regular expression, consider come situations such as whether or not capitalization in the answer matters and how exact the wording must be. See the <a href='https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions'>Mozilla docs on regular expressions</a> for help.</li></ul>

<ul><li><code>correctAnswerOutput</code> is the text to display when the student's answer is correct. Optional.<br>
</li><li><code>incorrectAnswerOutput</code> is the text to display when the student's answer is not correct. Optional.<br>If you do not supply both <code>correctAnswerOutput</code> and <code>incorrectAnswerOutput</code>, then the code does not display the <b>Check Answer</b> button. If you supply one of these, you must supply both of them.</li></ul>

<ul><li><code>showAnswerOutput</code> is the hint to display if the user clicks on <b>Skip & Show Answer</b>. Optional. If you do not supply this attribute, then the code does not display the <b>Skip & Show Answer</b> button.</li></ul>

<ul><li><code>showAnswerPrompt</code> is the text to display on the <b>Skip & Show Answer</b> button. Optional. If you do not supply this attribute, the text is (unsurprisingly) <b>Skip & Show Answer</b>.</li></ul>

<ul><li><code>outputHeight</code> is the height of the text box to display. Optional; defaults to 50px (a single line of text).</li></ul>

<img src='http://wiki.course-builder.googlecode.com/git/images/answer-free.png' />

<h2>Assessment</h2>
The following files render an assessment page:<br>
<ul><li><code>views/base.html</code> defines the header and footer areas.  This page is used by all pages displayed to a registered student.<br>
</li><li><code>views/assessment.html</code> defines the structure of the content area.</li></ul>

We strongly suggest you deploy Course Builder to Google App Engine and create your course in the browser after doing so. This places the course in the Google App Engine datastore. If you wanted to change the assessment questions of the example course on disk, you would change the .js files in the <code>assets/js/</code> directory.<br>
<ul><li><code>assets/js/assessment-</code><i><b>{{SUFFIX}}}</b></i><code>.js</code> contains a JavaScript array that fills in the actual question and answer areas for the assessment. Each assessment has its own file.</li></ul>

In the Course Builder code, the example assessments are their own JavaScript file. The filenames have the form <code>assessment-</code><i><b><code>SUFFIX</code></b></i><code>.js</code>. For the sample course <i><b><code>SUFFIX</code></b></i> is one of <code>Pre</code>, <code>Mid</code>, or <code>Fin</code>.<br>
The file contains a single object named <code>assessment</code>. This object describes everything the code needs to know about an assessment. The attributes of the <code>assessment</code> object are as follows:<br>
<br>
<ul><li><code>assessmentName.</code> This attribute is optional, since the name will be taken directly from the <b>Title</b> field. The <code>assessmentName</code> attribute is a string containing a unique name for this assessment. The code uses the assessment name to determine what special processing to do for an assessment. The sample course uses <code>"precourse"</code>, <code>"midcourse"</code>, and <code>"postcourse"</code>. See <a href='#Assessment_name.md'>Assessment name</a>.<br>
</li><li><code>preamble.</code> A string containing text and complete HTML elements. The preamble appears as the first thing on the assessment page.  See <a href='#Preamble.md'>Preamble</a>.<br>
</li><li><code>checkAnswers.</code> A Boolean. If <code>True</code>, then students can check their answers before submission.  (Note that case is important in this value; it must be either <code>True</code> or <code>False</code>.) See <a href='#Submitting_and_checking_answers.md'>Submitting and checking answers</a>.<br>
</li><li><code>questionsList.</code> An ordered array, each of whose elements describes a question in the assessment. The questions appear after the preamble. See <a href='#Questions.md'>Questions</a>.</li></ul>

By default, Course Builder has 3 assessments -- a precourse assessment, midterm assessment, and final assessment. The precourse assessment is not included in the overall score for the course.<br>
<br>
You can change Course Builder to use more or fewer assessments. To do so, you need to make the following changes:<br>
<br>
<ol><li>Create a separate <code>assessment-</code><i><b><code>SUFFIX</code></b></i><code>.js</code> file for each assessment. Using the default suffixes of <code>Pre</code>, <code>Mid</code>, and <code>Fin</code> for those 3 assessments is optional. See <a href='#Writing_assessments.md'>Writing assessments</a> for details on creating assessment files. A couple of points:<br>
<ul><li>You need the suffix in the next step when updating <code>data/unit.csv</code> to include the new assessment.<br>
</li><li>In each assessment file, you choose a value for the <code>assessmentName</code> attribute. The scoring function in <code>controllers/assessments.py</code> uses these values.<br>
</li></ul></li><li>Change <code>data/unit.csv</code> to add your assessments to the appropriate points in your course. See <a href='CreateHomePage#Home_page_content.md'>Home page content</a> for details.<br>
</li><li>Update <code>storeAssessmentData</code> in <code>controllers/assessments.py</code> to consider all assessments when computing the student's overall score for the course. See <a href='#Scoring.md'>Scoring</a>.<br>
</li><li>Update <code>views/student_profile.html</code> to display information about the assessments on the student's profile page. This file identifies which information to display using values supplied by <code>storeAssessmentData</code>. See <a href='ModifyProfile#Student_information.md'>Modify My Profile Tab</a>.<br>
</li><li>Update <code>views/test_confirmation.html</code> to display appropriate confirmation messages upon completion of each assessment. This file identifies which message to send using values supplied by <code>storeAssessmentData</code>.</li></ol>

<h3>Assessment name</h3>
For the sample course, the value of the <code>assessmentName</code> attribute is one of  <code>"precourse"</code>, <code>"midcourse"</code>, or <code>"postcourse"</code>. The code in <code>controllers/assessments.py</code> uses <code>assessmentName</code> to determine how to score assessments. See <a href='#Scoring.md'>Scoring</a>.<br>
<br>
When students complete an assessment, they see a message about how they did. You can change the contents of these messages in <code>views/test_confirmation.html</code>. (See <a href='#Submitting_and_checking_answers.md'>Submitting and checking answers</a>.)<br>
<br>
<h3>Preamble</h3>
The value of the <code>preamble</code> attribute is a string that contains a set of complete HTML elements. That is, if the string contains an open HTML tag (such as <code>&lt;em&gt;</code>), it must also have the corresponding close tag (such as <code>&lt;/em&gt;</code>). The code simply renders the HTML you enter as the first thing on the assessment page.<br>
<br>
Also note that the entire string must be on a single line. If you want it to render as multiple lines, you must include the appropriate HTML markup.<br>
<br>
The following code snippet is a preamble example:<br>
<br>
<pre><code>var assessment = {<br>
  preamble: '&lt;b&gt;This assessment addresses content in units 1-6. You can try it as many times as you like. When you click "Check Answers," we will give you your score and give you a list of lessons to review.&lt;/b&gt;&lt;br&gt;',<br>
  }<br>
</code></pre>

<h3>Submitting and checking answers</h3>
The bottom of an assessment page always includes a <b>Save Answers</b> button. When students submit an assessment by clicking on this button, they see a page such as the following:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/assessment-submit.png' />

By default, this page acknowledges that they submitted the assessment and gives them information about next steps. You can change the messages for different assessments by changing the file at <code>views/test_confirmation.html</code>.<br>
<br>
Notice that this page does not tell students how they did on the assessment or give any feedback about what they might want to study some more. You can give students the option of checking their answers before submitting an assessment. If you set the <code>checkAnswers</code> attribute of the <code>assessment</code> object to <code>True</code>, then the assessment page has an additional <b>Check your Answers</b> button and an area for feedback, as shown here:<br>
<br>
<img src='http://wiki.course-builder.googlecode.com/git/images/assessment-check.png' />

The feedback contains the student's score. If the student doesn't answer all questions correctly, the code displays which lessons the student should review to improve their score. How you specify this information is discussed in the next section.<br>
<br>
The following code snippet is an example of turning on check settings. The boolean value is case sensitive.<br>
<br>
<pre><code>var assessment = {<br>
  checkAnswers: true  <br>
  }<br>
</code></pre>

<h3>Questions</h3>
The <code>questionsList</code> attribute is an ordered array of JavaScript objects, each of which describes a question in the assessment.<br>
<br>
Each question object has three attributes. Two of these are the same for all question types. Which third attribute you include determines what type of question this is.<br>
<br>
The common attributes are:<br>
<br>
<ul><li><code>questionHTML.</code> A string containing text and complete HTML elements. This string is the text to display for this question. As with a preamble string, if this string contains an open HTML tag (such as <code>&lt;em&gt;</code>), it must also have the corresponding close tag (such as <code>&lt;/em&gt;</code>). Also note that the entire string must be on a single line. If you want it to render as multiple lines, you must include the appropriate HTML markup.</li></ul>

<ul><li><code>lesson.</code> A string representing the lesson (or lessons) that cover the material this question is about. The app displays this string if the student incorrectly answers the question and has requested the app to <a href='#Submitting_and_checking_answers.md'>check answers</a>.</li></ul>

A question can be one of four types, depending on the third attribute:<br>
<br>
<ul><li><code>choices.</code>  A multiple-choice question. The value of the <code>choices</code> attribute is an array of strings and one function call.  Each string represents a possible wrong answer to the question. You specify the correct answer with a function call of the form <code>correct(</code><i><b><code>string</code></b></i><code>)</code>, where <i><b><code>string</code></b></i> is a string containing the correct answer. Students see a set of radio buttons to choose from as with multiple-choice questions in <a href='CreateActivities#Single_multiple-choice_question.md'>activities</a>.</li></ul>

<ul><li><code>correctAnswerNumeric.</code>   A number. For questions with a numeric answer. The value of the attribute is the correct answer.</li></ul>

<ul><li><code>correctAnswerString.</code> A case-insensitive exact string match. For example, if the value is <code>"hello"</code>, then <code>Hello</code> and <code>hello</code> are both correct, but <code>HelloWorld</code> is incorrect. Use this attribute when your question requires a specific string answer.</li></ul>

<ul><li><code>correctAnswerRegex.</code>  Free text. The value of this attribute is a regular expression capturing the correct answer. Use this attribute when your question is more open ended than a string match can handle. In this case, the code uses a <a href='https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions'>regular expression</a> to verify the answer. Regular expressions can be notoriously difficult for a programmer to get right. For this reason, you need to be very careful with the wording of any question that takes a free text answer. Your regular expression needs to account for reasonable variations in student responses.</li></ul>

The following code snippet is an example of an assessment question.<br>
<br>
<pre><code>var assessment = {<br>
<br>
  questionsList: [<br>
    {questionHTML: 'Where will the Summer Olympics of 2016 be held?',<br>
     choices: ['Chicago', 'Tokyo', correct('Rio de Janeiro'), 'Madrid', 'I don\'t know'],<br>
     lesson: '1.4'},<br>
<br>
  {questionHTML: 'In the 2012 Summer Olympics, who won the women\'s 100 meter gold medal?',<br>
     choices: ['Carmelita Jeter',<br>
               'Veronica Campbell-Brown',<br>
               'Blessing Okagbare',<br>
               correct('Shelly-Ann Fraser-Pryce'),<br>
               "I don't know"],<br>
      lesson: '4.1'},<br>
<br>
  {questionHTML: 'You decide to attend the Summer Olympics and find yourself surrounded by Portuguese speakers. How would you say, "Is there a cheap restaurant around here?" in Portuguese?"&lt;br/&gt;[this version of the question uses a case-insensitive string match]',<br>
     correctAnswerString: 'existe um rest?',<br>
     lesson: '4.5'},<br>
<br>
  {questionHTML: 'You decide to attend the Summer Olympics and find yourself surrounded by Portuguese speakers. How would you say, "Is there a cheap restaurant around here?" in Portuguese?"&lt;br/&gt;[this version of the question uses a regular expression match]',<br>
     correctAnswerRegex: /existe um rest?/i,<br>
     lesson: '4.5'},<br>
<br>
  {questionHTML: 'This is an example of a numeric freetext question. What is 3.2 + 4.7?',<br>
     correctAnswerNumeric: 7.9,<br>
     lesson: '99.99'},  <br>
  ],<br>
}<br>
</code></pre>

<h3>Scoring</h3>
Aspects of scoring for assessments takes place in two places in the code:<br>
<br>
<ul><li>In <code>assets/lib/activity-generic-1.3.js</code>, <code>checkOrSubmitAnswers</code> determines the score of each assessment. The default formula is simply a percentage of the number of correct answers out of the total number of questions in that assessment.</li></ul>

<ul><li>In <code>controllers/assessments.py</code>, <code>storeAssessmentData</code> does a couple of scoring things:<br>
<ul><li>It determines when to store an assessment score. By default, it stores the score either if it's the first time the student has taken this assessment or if this score is higher than the previously-stored score.<br>
</li><li>When storing the score for the final assessment of the course, <code>storeAssessmentData</code> also computes the student's score for the entire course. The default scoring for the entire course uses the mid-term assessment as 30% of the score and the final assessment as 70% of the score.</li></ul></li></ul>

If you want the default scoring and you use the default number of assessments, you do not need to change any code.<br>
<br>
If you have a different number of assessments, you should change how <code>storeAssessmentData</code> computes the overall score. Note that <code>storeAssessmentData</code> uses the <code>assessmentName</code> attribute to identify each assessment.<br>
<br>
If you want to change the default scoring, you should specify <code>weight</code> directly in the assessment. For multiple choice answers, you can specify the weight of the question as well as the weight of the individual answers by specifying <code>weight</code> with <code>choiceScores</code>. For example, you can give partial credit for one answer while giving full credit for another answer.<br>
<br>
<ul><li><code>weight</code>: Indicates the number of points a particular question is worth. The number must be an integer. The default value is <code>1</code>.<br>
</li><li><code>choiceScores</code>: Indicates the weights for the answers in a particular answer group. The weights are specified through an array of floating point values between 0.0 and 1.0, inclusive. The individual value of an answer is multiplied by the integer specified in <code>weight</code>.</li></ul>

The following example specifies that the first question is worth five points while the second question is worth six points:<br>
<br>
<pre><code>var assessment = {<br>
  questionsList: [<br>
{questionHTML: 'How many total Olympic gold medals has Carl Lewis won?',<br>
     choiceScores: [0.2,0.4,0.6,0.8,1.0],<br>
     weight: 5,<br>
     choices :['4','5','7','8',correct('9')]},<br>
<br>
    {questionHTML: 'How many Judo throws are recognized by the Kodokan Judo Institute?',<br>
      choiceScores: [0.0,0.0,0.0,0.8,1.0],<br>
      weight: 4,<br>
      choices :['17','26','33','40',correct('67')]},<br>
<br>
    {questionHTML: 'What is the last name of the Women\'s 2010 Winter Olympic snowboard half-pipe gold medal winner?',<br>
     correctAnswerString: 'Bright',<br>
     weight: 5}<br>
  ]<br>
}<br>
</code></pre>


<h2>Peer Review</h2>
You should create peer review assignments the same way you create <a href='CreateAssessments.md'>Assessments</a>.<br>
<br>
This section discusses how to write peer reviews if you're editing the files on disk before uploading as well as some legacy settings for older versions of Course Builder. Create peer reviews, whether creating them through the Dashboard (the suggested way) or editing files on disk, as a type of assessment.<br>
<br>
For example, here is some sample code for the question (<b>Assessment Content</b> in older Course Builder versions):<br>
<pre><code>var assessment = {<br>
  preamble: 'Solve the problem below by using concepts from at least three Power Search lessons. Record your experience in a Google doc.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Problem&lt;/strong&gt;: Plan a 3-day trip to a destination you have never visited. Where will you go? Why?',<br>
<br>
  questionsList: [<br>
    {questionHTML: 'Please write your response in a Google doc, and paste the link to the doc in the answer box below. You will need to ensure that your doc can be viewed by reviewers.',<br>
     correctAnswerRegex: /.*/i<br>
    },<br>
<br>
    {questionHTML: 'How many Power Search concepts did you use in your writeup?',<br>
     choices: ['0 - 2', '3', '4 -- 5', 'More than 5']},<br>
<br>
    {questionHTML: 'List the Power Search concepts you used.',<br>
     multiLine: true,<br>
     correctAnswerRegex: /.*/i<br>
    },<br>
  ],<br>
<br>
  assessmentName: 'ReviewAssessmentExample',<br>
  checkAnswers: false<br>
}<br>
</code></pre>

Here is some sample code for the feedback form (<b>Reviewer Feedback Form</b> in older Course Builder versions):<br>
<pre><code>var assessment = {<br>
 <br>
  preamble: 'When you write your review, please check that the student\'s response is relevant to the question asked. If not, answer \'No\' to the first question below.',<br>
<br>
  questionsList: [<br>
    {questionHTML: 'Did the student answer all parts of the question?',<br>
     choices: ['Yes', 'No']},<br>
<br>
    {questionHTML: 'Please provide feedback for the assignment author.',<br>
     multiLine: true,<br>
     correctAnswerRegex: /.*/i<br>
    }<br>
  ],<br>
  <br>
  assessmentName: 'ReviewAssessmentExample',<br>
  checkAnswers: false<br>
}<br>
<br>
</code></pre>

In older Course Builder versions you needed to make a change in <b>Assessment Details</b>. This text box conforms to YAML indentation, so you must be careful of errant spaces. Here are the explanation of the keys and their values:<br>
<br>
<ul><li><b>grader</b>: by default this value is <code>auto</code>, which means Course Builder will grade it according to the course author's pre-populated answers. The other values is <code>human</code>, which means students will grade the reviews.<br>
</li><li><b>matcher</b>: the only possible value is <code>peer</code>, which means that assignments will automatically be assigned to a pool.<br>
</li><li><b>review_due_date</b>: The UTC (coordinated universal time) date, in yyyy-mm-dd hh:mm format, by which the review must be submitted. Reviews in the "draft" state will not count.<br>
</li><li><b>review_min_count</b>: The minimum number of reviews a student must complete to receive credit for the assignment and to view the reviews they have received. Students can see any of the reviews they receive as soon as they have submitted the number of reviews specified in <b>review_min_count</b>; they do not have to wait for <b>review_due_date</b>.<br>
</li><li><b>review_window_mins</b>: If a student requests a review and does not submit or put it in draft mode in this number of minutes, the review will return to the pool so that others can request to review it. The review will remain assigned to the original reviewer, however another student may request to review it before the original author gets to it.<br>
</li><li><b>submission_due_date</b>: The date UTC (coordinated universal time), in yyyy-mm-dd hh:mm format, that the assignment is due. This date must be earlier than the <code>review_due_date</code>.</li></ul>

<blockquote>Here is an example of <b>Assessment Details</b>:<br>
<pre><code>grader: human<br>
matcher: peer<br>
review_due_date: 2014-05-21 12:00<br>
review_min_count: 2<br>
review_window_mins: 60<br>
submission_due_date: 2014-05-14 12:00<br>
</code></pre></blockquote>

<h2>Discussion forum</h2>
The following files render the discussion page:<br>
<ul><li><code>views/base.html</code> defines the header and footer areas.  This page is used by all pages displayed to a registered student.<br>
</li><li><code>views/forum.html</code> defines the structure of the content area. It also has a link to the discussion forum. You need to change that to the link you create for your forum. See <a href='WebForums.md'>Community Discussion</a>.</li></ul>

<h2>Announcements</h2>
The followinng files render the announcement page:<br>
<ul><li><code>views/base.html</code> defines the header and footer areas.  This page is used by all pages displayed to a registered student.<br>
</li><li><code>views/announcements.html</code> defines the structure of the content area and contains the actual announcements.</li></ul>

<h2>Student profile</h2>
The following files render the student profile page:<br>
<ul><li><code>views/base.html</code> defines the header and footer areas.  This page is used by all pages displayed to a registered student.<br>
</li><li><code>views/student_profile.html</code> defines the structure of the content area.<br>
</li><li><code>views/base_registration.html</code> defines the header and footer areas.  This page is used by all pages displayed to an unregistered person.<br>
</li><li><code>views/unenroll_confirmation_check.html</code> defines the content of the page that asks for confirmation before unenrolling <br> <code>views/unenroll_confirmation.html</code> defines the content of the page that confirms the student is actually unenrolled.</li></ul>

<h2>Deleting the Course Builder footer text</h2>
On <a href='AdminPage.md'>Administrator</a> and <a href='Dashboard.md'>Dashboard</a> pages, there is footer text that states "Powered by Course Builder." You are not obligated to keep this and you may delete it.<br>
<ul><li>For the Administrator page, go to <code>/modules/admin/view.html</code> and delete the text in the HTML.<br>
</li><li>For the Dashboard page, go to <code>/modules/dashboard/view.html</code> and delete the text in the HTML.</li></ul>

<h1>Verify Your Code</h1>

As discussed on other pages, creating the <a href='CreateHomePage.md'>home page</a>, <a href='CreateLessons.md'>lessons</a>, <a href='CreateActivities.md'>activities</a>, and <a href='CreateAssessments.md'>assessments</a> requires you to create CSV files (for the home page and for lessons) and a set of JavaScript files (for activities and for assessments). Course Builder contains a tool that lets you scan these files for broken references and other errors.<br>
<br>
Note that this verifier may not catch all errors. It is a first step, to find certain anticipated problems. You should still test your app by visiting the course pages on your local development server and checking that links and input fields work as expected.<br>
<br>
<h2>Run the verification tool</h2>

To run this tool, open a <a href='http://code.google.com/p/gcb-x-03141590/wiki/FAQ#What%27s_a_%22shell_or_command_prompt%22?'>shell or command prompt</a>. In that window:<br>
<br>
<blockquote><code>cd </code><i><b><code>APPPATH</code></b></i><br>
<code>python tools/verify.py</code></blockquote>

where <i><b><code>APPPATH</code></b></i> is the directory containing your app.<br>
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