<h1>Combine Assessment and Reach Data</h1>

## Introduction ##

As described in [Evaluate Course Efficacy](MeasureEfficacy.md), there are three types of data we recommend collecting for your course -- student assessment data, reach and engagement data, and student happiness data. Assessment data and reach and engagement data are all objective measurements of what students did. Student happiness data is subjective information about what students think about the course.

This page walks you through a simple example of how to use the objective data to understand the effectiveness of your course and to improve your course materials. This example only touches the surface of what you can do with this data, but illustrates how important this data is to improving the quality of effectiveness of your courses.

Course Builder stores assessment data in  Google App Engine’s [High Replication datastore](https://developers.google.com/appengine/docs/python/datastore/structuring_for_strong_consistency). This data includes pre-, mid-, and post-course assessment data, data on the units offered in the course, and data on the lessons offered in each unit. See [Export Course Data](ExportCourseData.md) for details. You can use this data to understand student skill levels and improvements in abilities.

If you [set up your course](ReachAndEngagementMetrics.md) to do so, Google Analytics tracks reach and engagement data. This data lets you determine how many people you reached with the course, how engaged those people were, and how they interacted with the course pages.

## Determine the effectiveness of your courses ##

Imagine you create a course and you want to understand if the material is too hard or too easy, and if the material meets your learning objectives. The course contains three pages of material, with an assessment at the end to determine how well students understood the material.

![http://wiki.course-builder.googlecode.com/git/images/analytics-edu.png](http://wiki.course-builder.googlecode.com/git/images/analytics-edu.png)

**Assessment Data and Google Analytics**
| **Lesson Page** | **Question / Learning Objective** | **Google Analytics** |
|:----------------|:----------------------------------|:---------------------|
| 1               | Question 1 assess if students understood LO1. 95% answered correctly, indicating most students met the objective.  |  Time on page, in/outbound links, page views and unique page views. |
| 2               | Question 2 assess if students understood LO2. 50% answered correctly, indicating 50% of students did not met the objective.  | Time on page,  page views and unique  page views, clicks on reference links, how did they return to the lesson (in/outbound links). |
| 3               | Question 3 assess if students understood LO3. 25% answered correctly, indicating 75% of students did not met the objective. |  Time on page, in/outbound links,  page views and unique  page views. |

As you look at the assessment data, the following questions pop out:

  * Why was there a steep drop off in the assessment scores from questions 1-3?
  * How much time did students spend on each lesson and does that correlate with scores and the drop off of scores?
  * What dates and times were students interacting with the course?
  * Could they complete the course and answer the assessment questions with the material provided or did they need to go elsewhere for supplementary material?

If you look at the assessment data by itself, it is difficult to understand where students had problems or how to improve the materials. But, if you combine assessment data with the data gathered by Google Analytics, you get a more complete picture of what was going on in the course. Here are some ways you can use Analytics to answer your questions:

  * Time on page can show how long students are spending on each lesson and how that correlates with their assessment scores. You might see times that do not align with your expectations, such as a very short or very long time on a page.
    * You also see what time of day and day of the week your students engage with the material. Consider scheduling office hours around these times to support the students as they work through the material.
  * You might expect your students to progress through the course sequentially. You may find that instead they jump back to another lesson or need to look at external resources to help them understand. The inbound and outbound analytics give you insight into how your students move through the material. You may use this information to refine the lessons to provide clarification or review.
  * Are students coming back over and over to review, or are they viewing the materials at all? Do they watch the videos? Do they read the text versions? Page views give you this information along with how many people are returning.
  * Are students clicking on the reference links to support the course material or are they skipping over the links to the next page?

Google Analytics data, when combined with the Course Builder assessment data, are powerful tools to determine how your students are learning. This data can help you prepare for discussions with your students and make changes to your material to improve your course. While assessments can provide a snapshot of student understanding, Analytics can provide a continuum of interaction. Coupled with an active learning community, the classroom has a strong feedback mechanism for improving student understanding.

| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/evaluate-course-efficacy) |
|:------------------------------------------------------------------------------------------------------------------------------------|