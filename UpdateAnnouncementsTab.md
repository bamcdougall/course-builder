# Update Announcements Tab #

Course Builder provides an announcements tab for you to post course announcements.

<img src='http://wiki.course-builder.googlecode.com/git/images/announcements_tab.png' width='392' height='394' />

We recommend that you add to this tab all announcements that you send to either an [announcements email alias](CreateEmailList.md) or to a [community discussion forum](WebForums.md). This lets students see all course announcements, even if they choose to not join an email alias or visit the forum.

<h2>Replace sample announcements</h2>

The sample course contains a couple of sample announcements. You should delete these announcements, by clicking on the **Delete** button associated with each sample announcement.

<h2>Add an announcement</h2>

Visit the Announcements tab for your course. Click on **Add New**. Course Builder displays the announcement editor. You can use HTML markup in the body of your announcement, as the example announcements show.

By default, when you create an announcement, its status is **Draft**. This means that students cannot yet see the announcement. When you are ready for students to see the announcement, edit it and set the Status (below the body) to **Published**.

<h2>(Optional) Remove the  tab entirely</h2>

The announcements tab is optional. If you do not want the tab, remove it from `views/base.html` and `views/base_registration.html`.