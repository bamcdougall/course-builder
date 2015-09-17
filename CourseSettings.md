<h1>Customize Course Settings</h1>

By default, all the settings in Course Builder are generic or contain placeholder text.  You must change Course Builder settings so that they are specific to your course.  You can set all these items and more through two files: `course.yaml` and `course_template.yaml`. These files are located in the root directory of your Course Builder installation.

By default the setting to make your course public or private is not set. See [Make Courses Viewable](CreateNewCourse#Make_Courses_Viewable.md) on how to set it.

## course.yaml ##
The following list illustrates the types of settings you will find in `course.yaml`.

**course**
  * `title:` Course title. This string appears in your browser as the name of the window or tab containing your course.
  * `blurb:` Main page blurb (introductory text on the main page)
  * `instructor_details:` Information about the instructor to display on the main page
  * `main_video:` Whether you want a video or an image on the main page. If you specify both, video will take priority. The path to the image directory must also be relative, not absolute. That is, `assets/img` not `/assets/img`.
  * `start_date:` Course start date
  * `forum_url:` Forum URL
  * `announcement_list_url:` URL for the mailing list where students can register to receive course announcements
  * `locale:` Locale for internationalization. See [Internationalization](I18n.md) for more information, including supported languages.
  * `browsable:` Whether students who are not registered can freely browse the contents of the course.
  * `google_analytics_id:` Specify your Google Analytics Tracking ID, if any, with this setting.
  * `google_tag_manager_id:` Specify your Google Tag Manager ID, if any, with this setting.

**reg\_form**
  * `header_text:` Header text for the course registration form
  * `additional_registration_fields:` HTML representing additional fields to include in the course registration form
  * `can_register:` Turns student registration on or off. The possible values are `True`, which allows student registration, and `False`, which disallows it. The default value is `True`.
  * `whitelist:` List of student email addresses who are allowed to register for the course.

**assessment\_confirmations**
  * `result_text:` HTML to be displayed on the test confirmation page

**unit**
  * `hide_lesson_navigation_buttons:` Specify whether to hide the **Previous Page** and **Next Page** navigation buttons at the bottom of lesson and activity pages.
  * `hide_assessment_navigation_buttons:` Whether to hide the 'Previous Page' and 'Next Page' lesson navigation buttons below pre/post assessments within units.
  * {{show\_unit\_links\_in\_leftnav:}}} Whether to show the unit links in the side bar.

## course\_template.yaml ##
You will find the following settings in `course_template.yaml`. All the courses inherit values from this file during HTML rendering.

**institution**
  * `name:` Name of your institution
  * `url:` URL of your institution's webpage
  * `logo:url:` Link and alt text for the logo of the course or your institution

**base**
  * HTML to be included before the closing `head` tag in all pages, including code for analytics. See [Reach and Engagement](ReachAndEngagementMetrics.md) for more information on setting up analytics.
  * `show_gplus_button:` Whether to show a G+ button on the header of all pages
  * `nav_header:` Header phrase for the main navigation bar
  * `privacy_terms_url:` Link to your privacy policy and terms of service (#7 in picture below)
  * `locale:` Sets the Course Builder [language](I18n.md).


![http://wiki.course-builder.googlecode.com/git/images/base.png](http://wiki.course-builder.googlecode.com/git/images/base.png)

1. `title`

3. `logo:url`

4. `url`

5. `nav_header`

6. `name`

7. `privacy_terms_url`

Here is a video that shows how to edit your `course.yaml` file: [Edit course.yaml (4:35)](http://www.youtube.com/watch?v=7aLeEso9lNY&list=PLbTy14-ZMIDJGS1XLdYj3Nzrhfd6EDWJC).