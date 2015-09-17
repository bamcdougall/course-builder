<h1>Modify Registration</h1>



You do not need to make modifications to the registration page to deploy, create, or deliver your course. Modifying registration is an option.

By default, students can see the contents of your course without registering. You can control this behavior by checking the **Make Course Browsable** checkbox in **Settings > Course**. If a course is not browsable, the course syllabus is visible, but students cannot access the content.

## Registration page ##
When prospective students click on **Register** on the course homepage, Course Builder displays a registration page. The sample registration page asks one question, the student's name. This is just to show you that you _can_ ask questions on this page and store the information.

![http://wiki.course-builder.googlecode.com/git/images/registration.png](http://wiki.course-builder.googlecode.com/git/images/registration.png)

## Registration confirmation ##
Once a prospective student submits the registration form, Course Builder returns to the course homepage. The student will see a butter bar message that confirms their registration.

## Add additional fields ##
After you deploy your course to Google App Engine, you can optionally add additional registration fields in **Settings > Registration**. This page has a section, **Additional Fields**, where you can type your HTML to add additonal fields. If you do not know HTML, it may be best to skip this optional feature or find someone with the relevant knowledge.

![http://wiki.course-builder.googlecode.com/git/images/dashboard-registration-fields.png](http://wiki.course-builder.googlecode.com/git/images/dashboard-registration-fields.png)

You do not have to redefine the original question "name" question that comes default with Course Builder. Add new registration fields between the HTML `<li>` tags. The following example adds an extra textbox:

```
<li>
	<label for="form02">What is your favorite ice-cream?<br></label><br>
	<input id="form02" name="form02" type="textbox">
</li>
```

You are not limited to textboxes; for example, you can use radio buttons as well.

| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|