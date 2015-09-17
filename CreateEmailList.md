<h1>Announcements-only Email List</h1>

Throughout your course, you may want to send email to all of your registered students. (See [Announcements and Optional Material](Announcements#Reminder_announcements,_typically_in_email.md) for suggested emails). To do so, you need an email alias that includes those registered students. Course Builder does not provide a way to automatically enroll students in an email list.

Instead, you have several options:

  * If you already have a way to manage a large email alias, use that mechanism. To get a list of registered students,  see [Export Course Data](ExportCourseData.md).

  * If your course has fewer than 100 students, you can send mail from your Google App Engine application for free. If you want to send more than 100 emails in a single day, you would have to upgrade to a paid Google App Engine account. See the official [Google App Engine documentation](https://developers.google.com/appengine/docs/python/mail/sendingmail).

  * Alternatively, you can use Google Groups to create an announcement email alias. [Include a subscription link](#Include_subscription_link.md) to your group on the page you display when a student successfully [registers](CreateRegistration.md). When you create or edit an announcement, you have the option of sending it to the announcement alias.

This page discusses how to create an announcement alias using Google Groups and how to suggest to your students that they subscribe to that alias.

## Create an announcements-only Google Group ##

To create a Google Groups list that only lets owners post (that is, one that you use for announcements but not for interacting with your students):

  * Visit http://groups.google.com.
  * Click on the **New group** button.

  * On the **Create Group** screen:
    * Enter a **Group name** such as **_`My Course`_ `Announce`**, where  _**`My Course`**_ is the name of your course.<br>Note that the system automatically sets <b>Group email address</b> to <i><b><code>my-course</code></b></i><b><code>-announce</code></b><code>@googlegroups.com</code>.<br>
<ul><li>Enter a <b>Group description</b>.<br>
</li><li>Set <b>Group type</b> to <b>Email list</b>.<br>
</li><li>In <b>Basic permissions</b>,<br>
<ul><li>Set <b>View topics</b> to <b>Anyone</b>.<br>
</li><li>Set <b>Post</b> to <b>Owners of the group</b>.<br>
</li><li>Set <b>Join the group</b> to <b>Anyone</b>.</li></ul></li></ul></li></ul>

<ul><li>Once you finish creating your group, you see a Congratulations screen. From that screen, choose <b>Customize your group's settings</b>.</li></ul>

<ul><li>In the left navigation, expand <b>Settings</b>.<br>
<ul><li>In the left navigation, choose <b>Email options</b>.<br>
<ul><li>(Optional) Add a subject prefix, so students can easily identify messages sent from this group.<br>
</li><li>(Optional) In <b>Email footer</b>, choose <b>Display how to unsubscribe from this group by email.</b>
</li><li>In <b>Post replies</b>, choose <b>To the owners of the group</b>. This restricts members of the alias from sending email to anybody other than the group owners.<br>
</li><li>Save these settings.<br>
</li></ul></li><li>In the left navigation, choose <b>Moderation</b>.<br>
<ul><li>In <b>Moderate messages</b>, choose <b>Moderate all messages to the group.</b>
</li><li>Save these settings.<br>
</li></ul></li><li>In the left navigation, choose <b>New members</b>.<br>
<ul><li>In <b>New member permissions</b>, turn off <b>New members can post</b>.<br>
</li><li>Save these settings.</li></ul></li></ul></li></ul>

<ul><li>In the left navigation, expand <b>Permissions</b>.<br>
<ul><li>In the left navigation, choose <b>Access permissions</b>.<br>
<ul><li>Set <b>Contact the Owner of a Group</b> to <b>Owners for the group</b>, to restrict posting to the owners.<br>
</li><li>Save these settings.</li></ul></li></ul></li></ul>

<ul><li>In the left navigation, expand <b>Members</b>.<br>
<ul><li>In the left navigation, choose <b>All members</b>. You should be the only listed member.<br>
</li><li>Click on the row representing you.<br>
</li><li>On the new page, under <b>Posting permission</b>, choose <b>Override: member is allowed to post</b>.<br>
</li><li>Save these settings.</li></ul></li></ul>

You (and only you) can now post messages to your new group, either from the Google Groups interface or by sending email to <i><b><code>GROUPNAME</code></b></i><code>@googlegroups.com</code>.<br>
<br>
For more information about these and other settings, see <a href='http://support.google.com/groups/bin/answer.py?hl=en&answer=2464926'>Create a group</a>.<br>
<br>
<h2>Include subscription link ##

When a student registers for your course, you should include information about how to subscribe to the announcements-only group you created in the previous section.

See [Create Registration](CreateRegistration.md) for information about modifying registration.

Include information about your group on the page the student sees upon successful registration. To do so, modify the file at `views/confirmation.html`. If your group is named _**`My-Course-Announce`**_, include something like the following:

> `<p class="top_content">Thank you for registering.</p>`<br>
<blockquote><br>
<code>&lt;p&gt;To receive announcements about this course, register for the</code><br>
<code>announcements-only email list at</code><br>
<code>&lt;a href="http://groups.google.com/group/</code><i><b><code>My-Course-Announce</code></b></i><code>"&gt;http://groups.google.com/group/</code><i><b><code>My-Course-Announce</code></b></i><code>&lt;/a&gt;.</code><br>
<code>On that page, click on &lt;b&gt;Join Group&lt;/b&gt;.</code><br>
<code>In the dialog box that appears, under &lt;b&gt;How do you want to read this group?&lt;/b&gt;, choose &lt;b&gt;Email&lt;/b&gt;.&lt;/p&gt;</code></blockquote>

<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/set-up-and-manage-community'>Ask questions in the forum</a> </th></thead><tbody>