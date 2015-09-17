<h1>Community Discussion (Forums)</h1>



With Google Groups, you can set up your very own web forum to communicate and collaborate, safely and securely, with others online. You can use Google Groups to post important information such as answers to frequently asked questions or to host online discussions. You can set up your group to be published for all to see, or you set it as a private group and share only with those of your choosing.

Google Groups features like online discussions and real-time editing can make it simple for students to work together when they're not in the same physical location, sharing research findings, collaborating on group projects, and comparing notes on the lessons.

For a longer introduction to Google Groups, see [Welcome to Google Groups](http://support.google.com/groups/bin/answer.py?hl=en&answer=46601).

## Create your group ##

  * When setting up your group for the first time, follow the instructions at [Create a group](http://support.google.com/groups/bin/answer.py?hl=en&answer=2464926).
  * On the **Create Group** screen, set the following:
    * Set **Group type** to **Questions**.
    * Under "Basic permissions",
      * Set **View topics** to **Anyone**.
      * Set **Post** to **All members of the  group**.
      * Set **Join the group** to **Anyone**.
  * Once you finish creating your group, you see a Congratulations screen. From that screen, choose **Customize your group's settings**. From that screen
    * In the left navigation, expand **Information**.
      * Choose **General information**. (It may already be chosen.)
      * Set **Topic types** to **Questions**.
    * In the left navigation, expand **Settings**.
      * Choose **Categories** and click on **Enable categories**, then set up appropriate categories (described next).
    * In the left navigation, expand **Permissions**.
      * Choose **Posting permissions**.
      * Consider allowing all members of the group to **Mark Favorite Reply On Own Topic**  and **Me Too Topic**.
      * Choose **Moderation permissions.**
      * Set **Mark Duplicate** to **All Members of the group**.
      * Set **Mark Favorite Reply on Any Topic** to **All Members of the group**.
      * Set **Unmark Favorite Reply on Any Topic**to All Members**of the group**.
      * These last three are recommended settings that let your students help moderate the forum. If your forum is busy enough, you don't want to be the only one who can do these things. If you decide you want to keep tighter control over these areas, change the permissions to be somewhat more restrictive.

## Create categories to organize posts to your group ##

If your forum is effective, your group will get an extremely large number of posts. To make it easier for students to find the specific information in which they're interested, consider using category groups and categories to organize posts.

A **category group** is simply an organizational mechanism within the Google Group. Group members do not post messages directly to a category group. Instead, group members post to a category within a category group. Refer to [Adding and removing categories](http://support.google.com/groups/bin/answer.py?hl=en&answer=186851) for general information on this topic.

The following hierarchy suggests category groups and categories within those groups that you might use. The top level of the hierarchy contains the category groups. The second level contains the categories.

  * **From Course Staff**<br>Course staff will post here<br>
<ul><li><b>Course announcements</b><br>Course staff will post announcements here<br>
</li><li><b>Apply, share, and connect</b><br>Share how you apply your new skills here<br>
</li><li><b>Extra challenges and bonus material</b><br>We will post challenging search questions and bonus videos here<br>
</li><li><b>Tips and tricks</b><br>Device-specific and location-specific hints</li></ul></li></ul>

<ul><li><b>Need Help?</b><br>Post your course-specific questions here<br>
<ul><li><b>Unit 1</b><br>What it covers<br>
</li><li><b>Unit 2</b><br>What it covers<br>
</li><li>...</li></ul></li></ul>

<ul><li><b>Course Feedback</b><br>Share your comments about your experience with the course<br>
<ul><li><b>Content feedback</b>
</li><li><b>Technology feedback</b></li></ul></li></ul>

This is just one set of category groups and categories. You might choose completely different ones. For example, instead of organizing the Need Help section strictly by the unit that covers the material, you might choose more explicitly topic-related categories or even suggest new things for students to think about with your categories. For example, in a knitting course you might have categories such as "The Stitches", "Measuring Garments", and "How Yarn and Needles Interact".<br>
<br>
<b>Tip:</b>With category groups, you can decide whether choosing a category from each category group is optional or required.  If it is required for a category group, that means all posts must choose a category from that group. If you use a hierarchy such as the one above, clearly the category groups need to be optional.<br>
<br>
<h2>Mark duplicate posts</h2>

It is very common for people to post essentially the same question many times. Rather than answer the same question over and over again, you can instead mark some posts as duplicates of other posts.<br>
<br>
To do so, you first must set the moderation permissions for your group as described in <a href='#Create_your_group.md'>Create your group</a>. Then, when you encounter a duplicate question, follow this procedure:<br>
<br>
<ol><li>Identify the main post.<br>
<ol><li>Decide which post is the "main" post; that is, which post you want all the others to point to.<br>
</li><li>Visit that post in your web browser.<br>
</li><li>Copy the URL for the post from the address bar in your web browser.<br>
</li></ol></li><li>Mark other posts as duplicates.<br>
<ol><li>Visit the topic you want to mark as a duplicate.<br>
</li><li>From the <b>Actions</b> menu near  the top of the window, choose <b>Set Duplicate</b>.<br>
</li><li>In the dialog box that appears, enter the URL of the main topic and click <b>OK</b>.</li></ol></li></ol>

When you do this, a couple of things happen to the duplicate topic.<br>
<br>
<ul><li>Groups locks the post, so nobody can comment on it.<br>
</li><li>The title of the post gets a link that says <b>Another discussion addresses this topic</b>. That link points to the main post.</li></ul>


<h2>Include subscription link</h2>

When a student registers for your course, you should include information about how to subscribe to the discussion forum you created.<br>
<br>
See <a href='CreateRegistration.md'>Create Registration</a> for information about modifying registration.<br>
<br>
Include information about your group on the page the student sees upon successful registration. To do so, modify the file at <code>views/confirmation.html</code>. If your group is named <i><b><code>My-Course</code></b></i>, include something like the following:<br>
<br>
<blockquote><code>&lt;p class="top_content"&gt;Thank you for registering.&lt;/p&gt;</code><br>
<br>
<code>&lt;p&gt;To participate in community discussions about this course, register for the web forum at</code><br>
<code>&lt;a href="http://groups.google.com/group/</code><i><b><code>My-Course</code></b></i><code>"&gt;http://groups.google.com/group/</code><i><b><code>My-Course</code></b></i><code>&lt;/a&gt;.</code><br>
<code>On that page, click on &lt;b&gt;Join Group&lt;/b&gt;.&lt;/p&gt;</code></blockquote>

<h2>Edit forum link</h2>
Add the link to your discussion forum in the <a href='CourseSettings.md'>course.yaml</a> file. Specifically, set the <code>forum_url:</code> setting to your forum URL in <code>course.yaml</code>.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/set-up-and-manage-community'>Ask questions in the forum</a> </th></thead><tbody>