<h1>cbX</h1>

cbX is an extension of Course Builder that enables users to run content created using edX Studio on Google App Engine. Google's [Making Sense of Data MOOC](https://datasense.withgoogle.com/preview) is an example of a course built in this way.

This page describes the process for setting up edX Studio and cbX and getting started creating content in edX Studio to run on cbX. The following demo video (15:11) also walks through all of these steps:

<table align='center' valign='middle'>
<blockquote><tbody>
<blockquote><tr>
<blockquote><td><a href='http://www.youtube.com/watch?feature=player_embedded&v=jUfccP5Rl5M' target='_blank'><img src='http://img.youtube.com/vi/jUfccP5Rl5M/0.jpg' width='425' height=344 /></a>
</td>
</blockquote></tr>
</blockquote></tbody>
</table></blockquote>

## Set up edX Studio ##
Set up Studio on AWS with edX's AMI as described [here](https://github.com/edx/configuration/wiki/Single-AWS-server-installation-using-Amazon-Machine-Image). Make sure that you set a security policy to open port 18010, which is the port Studio listens on. Connect to your server on port 18010 and follow the instructions in Studio to register as a course creator.

## Set up cbX ##
To set up cbX, first clone the project from the [GitHub repositiory](https://github.com/google/coursebuilder_xblock_module). There are detailed setup instructions on the GitHub site, but the process is essentially just to run the server and the run script will download the necessary dependencies. Once the server is running locally on your development machine you can use appcfg to push it to production Google App Engine.

## Create Content ##
Create your course within edX Studio, including HTML text, videos, and questions. Not all Studio features are supported on cbX yet, but basic content (text, images, and videos) and questions is supported.

Once you have written your content, export it as a tar.gz file using edX Studio's **Tools > Export** menu. Inside cbX, create a course and open the new course's dashboard. On the Assets tab, choose the XBlock Import button and upload the tar.gz file which you downloaded from Studio. This will install your edX Studio content on cbX.

## Course Development Workflow ##
The recommended workflow is to go back and forth between edX Studio and and a development cbX server as you develop content. Create the content and preview it on Studio and then merge your changes made in Studio into your cbX course as you proceed.

Once you are satisfied with your content from Studio, deploy it into a fresh cbX course either in development or production. You can also add Course Builder content (such as [Activities](CreateLessons.md) and [Assessments](CreateAssessments.md)) to your course.

## Related Projects ##
This project is part of our [wider support](ListOfModulesExtensions.md) of edX and open-source education. The following are other open source educational projects which we encourage others to use and contribute to:

  * [Course Builder](https://code.google.com/p/course-builder/)
  * [App Engine XBlock runtime](https://github.com/google/appengine_xblock_runtime)
  * [Instant hangouts](https://github.com/google/instant-hangouts)
  * [Realtime Help Chat Xblock](https://github.com/google/realtime-help)

**Disclaimer:** This workflow was tested with cbX at the commit point `2538bae0343aa04d0c42cb444beab0b072399ad2` and edX AMI version `ami-dbd0eeb2`. Due to the high velocity of both edX and cbX changes, future versions may behave differently. Pay careful attention to the versions that you are using.

Follow and contribute your thoughts in the forums:
  * [edX Code](https://groups.google.com/forum/#!forum/edx-code)
  * [Course Builder](https://groups.google.com/forum/?fromgroups#!forum/course-builder-forum)