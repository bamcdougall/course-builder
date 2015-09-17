<h1>Download the Software </h1>

Before you can start working on your own course, you need to download Python and Google App Engine (GAE). You also need to download Course Builder.



## Download and install Python 2.7 ##

Make sure you have Python 2.7 on your system. To find out if you do...

(**Note:** This page refers to a "shell or command prompt". If you're unsure what that means, see [What's a "shell or command prompt"?](FAQ#What_is_a_shell_or_command_prompt?.md))

#### Check on Mac, Linux or other POSIX-compliant systems ####
On Mac, Linux or other POSIX-compliant systems, open a shell and type

> `which python`

If Python 2.7 is installed, you should see something similar to one of the following:

> <font color='green'> <code>/Library/Frameworks/Python.framework/Versions/2.7/bin/python</code> </font><br>
<blockquote><font color='green'> <code>/usr/local/bin/python</code> </font></blockquote>

The first of these indicates the Python version. The second does not. In that case, you need to check to see if you have the correct version of Python, with the following command:<br>
<br>
<blockquote><code>python -V</code></blockquote>

The output of this command is similar to the following:<br>
<br>
<blockquote><font color='green'> <code>Python 2.7.3</code> </font></blockquote>

<h4>Check on Windows 7</h4>
On a PC, open a <b>Command Prompt</b> and type<br>
<blockquote><code>python</code></blockquote>

If Python is installed, you should see something similar to:<br>
<blockquote><font color='green'> <code>Python 2.6.4 (r264:75708, Oct 26 2009, 07:36:50) [MSC v.1500 64 bit (AMD64)] on win32</code> </font><br>
<font color='green'> <code>Type "help", "copyright", "credits" or "license" for further information.</code></font><br>
<font color='green'> <code>&gt;&gt;&gt;</code> </font></blockquote>

This starts the Python interpreter and indicates the version. If Python is not installed, you see:<br>
<blockquote><font color='green'> <code>'python' is not recognized as an internal or external command,</code> </font><br>
<font color='green'> <code>operable program or batch file.</code> </font></blockquote>

<h4>Installing Python</h4>
If you don't have Python at all or you have the wrong version, visit the general Python 2.7 <a href='http://python.org/download'>download page</a> to download and install the right version for you. You probably want to simply use the current production version for your platform.<br>
<br>
<h4>Installing Python lxml Package</h4>
We suggest you deploy Course Builder to Google App Engine after downloading all the software. If instead you wish to explore Course Builder on localhost, you may need to download the lxml Python package.<br>
<br>
To download and install the lxml package on Mac, do the following steps:<br>
<ol><li>Open a terminal<br>
</li><li>Install <code>pip</code> by typing: <code>sudo easy_install pip</code>
</li><li>Type <code>pip install lxml</code>
The latest version of lxml should be fine.</li></ol>

For Windows, you can follow the instructions on the <a href='http://lxml.de/installation.html'>lxml installation page</a>. However, this involves much more work and we strongly suggest you deploy to Google App Engine instead of exploring on localhost. Not having lxml will not interfere your ability to deploy.<br>
<br>
<h2>Download and install Google App Engine</h2>

If you are unfamiliar with GAE, but know something about cloud computing, read <a href='https://developers.google.com/appengine/docs/whatisgoogleappengine'>What is Google App Engine?</a> If you're completely new to cloud computing as well, a more user-friendly introduction to the cloud and GAE can be found in this <a href='https://developers.google.com/academy/apis/cloud/appengine/intro/'>Introduction to Google App Engine</a>.<br>
<br>
Choose the appropriate GAE SDK version with the appropriate Course Builder version. The following table illustrates the correct pairings:<br>
<br>
<table><thead><th> <b>Course Builder Version</b> </th><th> <b>Platform</b> </th><th> <b>Google App Engine SDK Version</b> </th></thead><tbody>
<tr><td> 1.9.0                         </td><td> <a href='https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python'>Windows, Mac, Linux</a> </td><td> Latest                               </td></tr>
<tr><td> 1.8.0                         </td><td> <a href='https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python'>Windows, Mac, Linux</a> </td><td> Latest                               </td></tr>
<tr><td> 1.7.0                         </td><td> <a href='https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python'>Windows, Mac, Linux</a> </td><td> Latest                               </td></tr>
<tr><td> 1.6.0                         </td><td> <a href='https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python'>Windows, Mac, Linux</a> </td><td> Latest                               </td></tr>
<tr><td> 1.5.1                         </td><td> <a href='https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python'>Windows, Mac, Linux</a> </td><td> Latest                               </td></tr>
<tr><td> 1.5.0                         </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=GoogleAppEngine-1.8.1.msi&can=2&q='>Windows</a> </td><td> 1.8.1                                </td></tr>
<tr><td> 1.5.0                         </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=GoogleAppEngineLauncher-1.8.1.dmg&can=2&q='>Mac</a> </td><td> 1.8.1                                </td></tr>
<tr><td> 1.5.0                         </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=google_appengine_1.8.1.zip&can=2&q='>Linux</a> </td><td> 1.8.1                                </td></tr>
<tr><td> 1.4.x                         </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=GoogleAppEngine-1.7.7.msi&can=1&q='>Windows</a> </td><td> 1.7.7                                </td></tr>
<tr><td> 1.4.x                         </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=GoogleAppEngineLauncher-1.7.7.dmg&can=1&q='>Mac</a> </td><td> 1.7.7                                </td></tr>
<tr><td> 1.4.x                         </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=google_appengine_1.7.7.zip&can=1&q='>Linux</a> </td><td> 1.7.7                                </td></tr>
<tr><td> All versions earlier than, and not including, 1.4.0 </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=GoogleAppEngine-1.7.0.msi&can=1&q=1.7.0'>Windows</a> </td><td> 1.7.0                                </td></tr>
<tr><td> All versions earlier than, and not including, 1.4.0 </td><td> <a href='http://code.google.com/p/googleappengine/downloads/detail?name=GoogleAppEngineLauncher-1.7.0.dmg&can=1&q=1.7.0'>Mac</a> </td><td> 1.7.0                                </td></tr>
<tr><td> All versions earlier than, and not including, 1.4.0 </td><td> <a href='https://code.google.com/p/googleappengine/downloads/detail?name=google_appengine_1.7.0.zip&can=1&q='>Linux</a>  </td><td> 1.7.0                                </td></tr></tbody></table>

<b>Note:</b> In some cases there may be a new release of the GAE SDK in between new releases of Course Builder. Although upgrading incremental versions in most cases would not create problems, we still recommend that you stay at the suggested version.<br>
<br>
When developing on GAE, you have a choice of performing administrative tasks using a graphical interface (GUI) or a traditional command-line interface. The GUI, called The Launcher, is available for users of PCs or Macs while command-line tools are available on all systems. The GAE SDK for Python includes both tools.<br>
<br>
<b>Note:</b> If you decide to use the command-line tools, consult the official <a href='https://developers.google.com/appengine/docs/python/overview'>Google App Engine documentation</a>.<br>
<br>
<h3>Windows 7</h3>
Run the downloaded installer .msi by double clicking. Follow all on-screen instructions. On the screen that asks for the destination folder, be sure that <b>Add product path to user PATH</b> is checked. This is required for the command-line tools to work properly.  Once completed, you should find the GAE Launcher icon on your desktop or be able to find it via <b>Start -> Programs</b>.<br>
<br>
<h3>Mac</h3>
Open the downloaded .dmg file and drag the GAE icon into the Applications folder. Optionally,  open the Applications folder and drag the GAE icon to your Dock so that you can start the GAE Launcher more conveniently. Putting GAE in the Applications folder also installs the command-line tools.<br>
<br>
<h3>Linux (or other POSIX-compliant system)</h3>
After downloading the .zip file, go to the directory where you want to install GAE. When you unzip the archive, it creates a subdirectory named google_appengine. Add that directory to your shell's path so that it can find the command-line tools when you need them.<br>
<br>
<br>
<h2>Download Course Builder</h2>

To download Course Builder, you have two choices:<br>
<br>
<ul><li>The simplest route is to download the <a href='DownloadCourseBuilder.md'>zip file</a> to your computer. Unzip that file into a working directory. For example, in both Windows and Mac, the zip file might have downloaded to the directory called "Downloads." You can unzip the file there. Remember the directory where you unzipped the file since you will need to locate it later.</li></ul>

<ul><li>Visit the <a href='https://code.google.com/p/course-builder/source/checkout'>Source &gt; Checkout</a> tab for the Course Builder project. From there, follow the instructions to get a local copy of the repository using Git. Use this approach if you have explicitly partnered with Google to make changes to Course Builder itself.</li></ul>

<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>