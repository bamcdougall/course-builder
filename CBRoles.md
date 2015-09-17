<h1>Course Builder Roles</h1>



Course Builder currently differentiates between a few main roles -- Administrator, Course Author, Student, and Translator. These roles exist to allow an organization to separate responsibilities into core competencies or parallelize duties for more efficient course implementation.  This is solely at the discretion of the organization or individual; you may decide one person should be responsible for many roles.

## Course Author ##
This is the person or team who designs and creates the content of the course or the “what is learned” from the students’ points of view. Currently for Course Builder, we aggregate some different names and roles under the term "Course Author." For example, we call the Instructional Designer, Online Educator, Online Teacher, Teacher's Assistant, and so forth, all “Course Authors.” Course Builder's [Dashboard](Dashboard.md) is a special section for Course Authors to view a broad range of information about an individual course.

## Student ##
This person or group are the learners, "consumers", or "users" of the content that was created with Course Builder.

## Technologist (Administrator) ##
The Administrator, or Technologist, is the person or team who is responsible for setting up and managing Course Builder on Google App Engine. They may also be responsible for duties like Google App Engine billing. The Administrator can be thought of as the webmaster for a particular course or courses. The Administrator is most likely the point of contact for the Course Author for problems with a particular course. Course Builder's [Administrator Page](AdminPage.md) is a special section for Administrator to access and manage the Google App Engine instance for a particular course.

Although you do not need to know programming to create and run a course with Course Builder, the Administrator may have the following skills:

  * HTML
  * JavaScript, particularly JavaScript arrays, simple objects, and regular expressions. Of these, regular expressions tend to be the biggest stumbling block. The [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions) has an introduction to regular expressions.
  * [Google App Engine](https://developers.google.com/appengine/docs/whatisgoogleappengine)
  * [Python](http://docs.python.org/2/)

In the technology industry, Administrators like the ones referred to here are also called administrators or just "admins" as opposed to technologists. We will interchange Technologist, Administrator, and Admin throughout this documentation. The Administrator referred to in this documentation has no relation to the administrator term sometimes used in education.

## Translator ##
You can allow translators to translate your course through Course Builder's Translation Console. Translators have special privileges that allow them to access Course Builder to translate content but not allow them to edit, add, or view content or settings beyond their scope as translators.

## Roles and Actions ##
The picture below represents a general overview of using Course Builder. On the left, the boxes represent actions while the boxes on the right represent which role would typically be responsible for those actions. Of course, the technologist and the course author may be the same person. The Course Author and the Admin (Technologist) have the same access rights. If you want to allow a select group of people to review a course before it is made public, you need to give them Admin rights.

![http://wiki.course-builder.googlecode.com/git/images/overview_diagram.png](http://wiki.course-builder.googlecode.com/git/images/overview_diagram.png)