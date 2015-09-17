<h1>Create Activities</h1>



Each unit may have some number of activities. An activity is a set of questions related to a particular lesson within a unit:

<img src='http://wiki.course-builder.googlecode.com/git/images/activity.png' height='529' width='420' />

Instead of writing activities, we strongly encourage you instead to write questions through [Dashboard > Assets > Question Bank](Dashboard#Assets.md) and put them in your [Lessons](CreateLessons.md) as a question component. The effect is the same for students but it is much easier for you to create questions through the WYSIWYG interface than it would be to write the questions using JavaScript and HTML.

This page talks about the mechanics of creating an activity. For information on what to put in your activities, see [Develop the Content without Technology](TwoDevelop#Decide_what_you_want_to_test_in_your_assessments,_both_graded_an.md).

## What happens on an activity page ##

An activity page lets students explore their understanding of the lesson content. Students answer questions on the activity page. For each question, clicking on **Check Answer** lets them know if their answer is correct. If the answer is incorrect, the response may contain guidance towards the correct answer. For answers that have a student enter a string, the question can include an extra button to give a hint. If students click on that button, the correct answer appears, possibly with some explanation of why it's the correct answer.

## Page layout ##

Typically, an activity page contains the list of questions with possible answers, a submit button, and an area in which the course displays responses. You can, however, include arbitrary HTML anywhere on the activity page. For example, as illustrated in the image above, activities in the sample course always start with a box containing tips summarizing the main points of the corresponding lesson.

An activity page has the same general look and feel as a [lesson](CreateLessons.md) page. The app uses several files to render this page:
  * `views/base.html` defines the footer and the first two lines of the header; it is the same file as for lessons. See [Modify Course Template](ModifyTemplate.md) for information about this file.
  * `views/activity.html` defines the second two lines of the header, the vertical navigation, and the content area. Note that these are the same parts `views/unit.html` defines for lessons. You probably want to be consistent in these files.
  * `assets/js/activity-`_**`N.M`**_`.js` contains a JavaScript array that fills in the actual content for the activity. Each activity has its own file.

## Writing activities ##

An activity contains explanatory text and one or more questions for the student.

The activity for a particular lesson goes in a corresponding JavaScript file. The JavaScript filename is `activity-`_**`N.M`**_`.js`, where _**`N`**_ is the unit number and _**`M`**_ is the lesson number.

The format of the file is
```
var activity = [
  entry1,
  ...,
  entryN
]
```

The file contains a single array variable named `activity`. Each element in the array is arbitrary HTML, a question, or answer information.

While it looks like the questions and their answers are connected to each other, the code does not enforce this. The code just renders the elements of the array one after the other. It is up to you to make sure they are in a logical order.

### Arbitrary HTML ###

The first choice for an array element is a string that contains a set of complete HTML elements.  That is, if the string contains an open HTML tag (such as `<em>`), it must also have the corresponding close tag (such as `</em>`).

The code simply renders the HTML you enter. For example, the sample activities all start with a 1-cell table that summarizes the major points of the associated lesson. With this HTML:

```
'<table border="2"><tr><td><b>Search Tips:</b><p><ul><li>In the last video, you
learned how to use color filtering within image search to narrow your image results to
images made up primarily of a certain color. You do this by clicking on the
appropriate colored box in the left panel. <li>Please note that you can’t filter
by color on iPad or Android tablets, but you can answer the questions below as
if you were using a laptop or desktop computer.</ul><p></tr></td></table><br/>',
```

The code displays the following:

> | **Search Tips:**<br><ul><li>In the last video, you learned how to use color filtering within image search to narrow your image results to images made up primarily of a certain color. You do this by clicking on the appropriate colored box in the left panel.</li><li>Please note that you can’t filter by color on iPad or Android tablets, but you can answer the questions below as if you were using a laptop or desktop computer.</li></ul> </li></ul></tbody></table>

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
<ul><li>[A single multiple-choice question](#Single_multiple-choice_question.md)
  * [A group of multiple-choice questions](#Group_of_multiple-choice_questions.md)
  * [Free text](#Free_text.md)
  * [Multiple correct answers](#Multiple-choice_questions_with_multiple_correct_answers.md)

#### Single multiple-choice question ####

The code for a single multiple-choice question looks like the following example:

```
var activity = [

  {questionType: 'multiple choice',
  choices: [
    ['[yarnbombing news article]', false, 
      'Try again. This is a risky approach, since many news articles do not call themselves \'news articles\' on the page.'],
     ['[yarnbombing] then click News in the left menu', true,
       'Correct! Using a collection of a specific type of media, like News, can help you get to the best pages faster.'],
     ['[i would like to find news articles about yarnbombing]', false,
      'Try again. We want to avoid including a lot of extra, confusing words into a query.'],
     ['[what are some recent publications about yarnbombing]', false,
      'Try again. Stating what you want in this way, introduces a lot of extra words into a query.']
    ]
  }

];
```

This code represents a single JavaScript object with two required attributes. The first attribute is `questionType`. The value `'multiple choice'` indicates that this answer is for one multiple-choice question. The second attribute is `choices`. The value of this attribute is an array of the possible answers to the question and what to do with each.

Each element of the `choices` array is itself a 3-element array whose required values are:
  * The text to display for this answer.
  * A Boolean value indicating whether or not this is the correct answer.
  * The text to display if this choice is submitted.

For this question, students see the following:

![http://wiki.course-builder.googlecode.com/git/images/answer-multiple.png](http://wiki.course-builder.googlecode.com/git/images/answer-multiple.png)

Students see a list of possible answers, a button labelled **Check Answer**, and an empty text box. When they choose one of the answers and click on **Check Answer**, the code displays the string associated with that answer. In this example, if the user submits the answer `[yarnbombing news article]`, the code displays `Try again. This is a risky approach, since many news articles do not call themselves 'news articles' on the page.`

If students choose the correct answer, the code also highlights the line containing that answer.

#### Group of multiple-choice questions ####

Sometimes you want to group a set of multiple-choice questions so that students can only check their answers after answering all of the questions in the group. You can do this with code that looks like the following example:

```
var activity = [

  {questionType: 'multiple choice group',
    questionsList: [ 
      {questionHTML: '<b>1.</b> In the United States, the state of California is known for its earthquakes. Have there been earthquakes in Iowa?<br/>',
        choices: ['Yes', 'No'],
        correctIndex: 0},
      {questionHTML: '<b>2.</b> Has there ever been an earthquake in Maine?<br/>',
        choices: ['Yes', 'No'],
        correctIndex: 0},
      {questionHTML: '<b>3.</b>Which state (Iowa or Maine) had an earthquake more recently?<br/>',
        choices: ['Iowa', 'Maine'],
        correctIndex: 1}
    ],
    allCorrectOutput: 'Hopefully you used Control-F to find the information quickly.',
    someIncorrectOutput: 'Remember, you can use Control-F to find information like this more quickly. Please try again.'
  }

];
```

This code represents a single JavaScript object with four required attributes:

  * `questionType`. The value `'multiple choice group'` indicates that this answer is a group of multiple-choice questions.

  * `questionsList`. The value of this attribute is an ordered array of the related questions. Each element of the `questionsList` array is a JavaScript object representing one question and answer. Each of those objects has 3 attributes:
    * `questionHTML:` HTML representing the text to display for this question.
    * `choices:` An array of the possible answers to this question.
    * `correctIndex:` The index in the `choices` array of the correct answer. (Remember that JavaScript arrays are 0-based.)

  * `allCorrectOutput.` The text to display when the student correctly answers all questions in the group. Before this text, the code includes the string "All your answers are correct!"

  * `someIncorrectOutput.` The text to display when the student incorrectly answers at least one of the questions. In addition to this text, students see how many of their answers were incorrect.

For this example, if students answer one question correctly, they see the following:

![http://wiki.course-builder.googlecode.com/git/images/answer-group.png](http://wiki.course-builder.googlecode.com/git/images/answer-group.png)

#### Multiple-choice questions with multiple correct answers ####

You can present multiple choice questions that have more than one correct answer. The code for this question type looks like the following example:

```
var activity = [

  { questionType: 'multiple choice group',
    questionGroupHTML: '<p>This section will test you on colors and numbers.</p>',
    questionsList: [
          {questionHTML: 'Pick all <i>odd</i> numbers:',
           choices: ['1', '2', '3', '4', '5'], correctIndex: [0, 2, 4]},
          {questionHTML: 'Pick one <i>even</i> number:',
           choices: ['1', '2', '3', '4', '5'], correctIndex: [1, 3],
           multiSelect: false},
          {questionHTML: 'What color is the sky?',
           choices: ['#00FF00', '#00FF00', '#0000FF'], correctIndex: 2}
    ],
    allCorrectMinCount: 2,
    allCorrectOutput: 'Great job! You know the material well.',
    someIncorrectOutput: 'You must answer at least two questions correctly.'
  }

];
```

You can specify whether a student must choose all the answers correctly or just one, in order for the question to be correct. By default, the `multiSelect:` setting is `true`, which means that the student needs to select all the correct answers. You do not need to specify `multiSelect: true` since by default it is the case.

To change the default behavior, specify `multiSelect: false`. With `multiSelect: false` specified in the second question in the following example, the student receives an overall score of two out of three. Question one is incorrect while question two is correct because with question two, the student only needed to select one correct answer.

![http://wiki.course-builder.googlecode.com/git/images/answer-multiple-correct.png](http://wiki.course-builder.googlecode.com/git/images/answer-multiple-correct.png)

If we specified `multiSelect: true` (or omitted any specification) in question two and the student only selected one correct answer, then the student would have received an overall score of one out of three.

When answers are presented as checkboxes, it means that all correct choices must be selected. When answers are presented as radio buttons, it means you must select only one correct answer.

The `allCorrectMinCount:` setting indicates how many questions in the activity must be answered correctly for successful completion. If the students are successful, they received the message in `allCorrectOutput:`. Else, they receive the message in `someIncorrectOutput`.

#### Free text ####

The final type of answer is a free text area. Use this answer type when your question is somewhat open ended. Students type their answer into a text box of a size you specify.

The code uses a [regular expression](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions) to verify the answer. Regular expressions can be notoriously difficult for a programmer to get right. For this reason, you need to be very careful with the wording of any question that takes a free text answer. Your regular expression needs to account for reasonable variations in student responses. The code for a simple free text answer looks as follows:

```
var activity = [

  { questionType: 'freetext',
    correctAnswerRegex: /white?/i,
    correctAnswerOutput: "Correct--Many charts, tables, and graphs have white backgrounds, so filtering for white images helps you find them faster.",
    incorrectAnswerOutput: "Try again. Consider what color would be dominant in images of charts, tables, and graphs. Look at the results above. Each of those sources is traditionally printed on paper.",
    showAnswerOutput: "Our search expert says: I would click on white in the color grid, since many charts, tables, and graphs have white backgrounds." 
  }

];
```

This code represents a single JavaScript object with several attributes. The first two are required; the others are optional.

  * `questionType`. The value `'freetext'` indicates that this answer expects a string from the student.

  * `correctAnswerRegex` is a regular expression to use to check whether or not the student's answer is correct.  In constructing a regular expression, consider come situations such as whether or not capitalization in the answer matters and how exact the wording must be. See the [Mozilla docs on regular expressions](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions) for help.

  * `correctAnswerOutput` is the text to display when the student's answer is correct. Optional.
  * `incorrectAnswerOutput` is the text to display when the student's answer is not correct. Optional.<br>If you do not supply both <code>correctAnswerOutput</code> and <code>incorrectAnswerOutput</code>, then the code does not display the <b>Check Answer</b> button. If you supply one of these, you must supply both of them.</li></ul>

<ul><li><code>showAnswerOutput</code> is the hint to display if the user clicks on <b>Skip & Show Answer</b>. Optional. If you do not supply this attribute, then the code does not display the <b>Skip & Show Answer</b> button.</li></ul>

<ul><li><code>showAnswerPrompt</code> is the text to display on the <b>Skip & Show Answer</b> button. Optional. If you do not supply this attribute, the text is (unsurprisingly) <b>Skip & Show Answer</b>.</li></ul>

<ul><li><code>outputHeight</code> is the height of the text box to display. Optional; defaults to 50px (a single line of text).</li></ul>

<img src='http://wiki.course-builder.googlecode.com/git/images/answer-free.png' />

<h2>Testing changes ##

Changes you make to any file in the `views` directory appear automatically in your running development server. That is, after you make a change to one of these files, simply load (or reload) a page that uses that view and the change appears.

To see how to make these changes in your live, deployed course, see [Deploy Your App](UploadCode.md).

A couple of hints for JavaScript debugging:

  * Consider using a JavaScript editor or IDE that highlights errors.

  * If you use Google Chrome to test your app, consider using the JavaScript console. (See [Chrome Developer Tools: Console](https://developers.google.com/chrome-developer-tools/docs/console).) The console shows fairly detailed information about JavaScript parse errors.

| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|