<h1>Run Course Builder</h1>

Once you've downloaded Course Builder, you load it as a new Google App Engine (GAE) app and modify it as needed for your course. This page describes how to get Course Builder running for the first time on GAE. The basic steps are:



**Note:** To run Course Builder successfully, you **must** follow the steps on this page.

## 1. Start the Google App Engine Launcher on your computer ##

Activate the GAE Launcher on your computer wherever it's available, that is, from the Desktop, the Dock, the Applications folder, **Start -> Programs -> Google App Engine -> GoogleAppEngineLauncher**, and so on.

The first time you start the Launcher on Mac, you may see a dialog box asking you about symbolic links:

<img src='http://wiki.course-builder.googlecode.com/git/images/symlinks.png' />

For Google App Engine to work, you must agree to set up symbolic links. For more information about working with Google App Engine, see [Develop with Google App Engine](AppEngine.md).

## 2. Decide on a name for your app ##

**Note for Windows 7 users:** Do **not** use Notepad to edit Course Builder files. If you do, every Course Builder file appears to be one long line. Please use another text editor, such as WordPad or Notepad++. For Mac users, you can use something like TextEdit.

Navigate to the directory where you unzipped the Course Builder zip file. The file `app.yaml`, located in the Course Builder root directory, is the configuration file for your Google App Engine app. Before you get started, you need to choose a new name for the app. To do so:

  1. Edit `app.yaml`. The first line is:<br><code>  application: mycourse # FIXME: Put your application id here</code>
<ol><li>Replace <code>mycourse</code> with the name you choose for your app. The name you choose must be the same as your production app in GAE, as described in <a href='UploadCode#Register_your_app_(course)_with_Google.md'>Register your app with Google</a>. You name your production app once and can never reuse that name.</li></ol>

Be careful with spacing in <code>.yaml</code> files since they are spacing sensitive. Do not add or delete any spacing at this point.<br>
<br>
Pick a single word as an app name. It's best if you keep all the letters of the app name in lowercase. See <a href='UploadCode#Register_your_app_(course)_with_Google.md'>Register your app with Google</a> for restrictions on naming.<br>
<br>
Later, if you decide to customize your course, you may need more information on configuration. If you do, see the <a href='https://developers.google.com/appengine/docs/python/config/appconfig#Required_Elements'>official documentation</a>.<br>
<br>
<h2>3. Add the app to Google App Engine</h2>

<ol><li>In the Google App Engine Launcher, from the <b>File</b> menu, choose <b>Add Existing Application</b>.<br>
</li><li>For the <b>Path</b> field, click <b>Browse</b> and navigate to the directory containing the Course Builder source code.<br>Note that you choose a directory for the path, not a particular file in the directory.<br>
</li><li>For the Port, the default value is typically fine. If you have other apps running locally, you may need to change the port number. For example, if you have an app or another program using port 8080, you may want to try port 8081.<br>
</li><li>Click on <b>Add</b>.</li></ol>

A new line appears in the Launcher. Its name is the name you put in the <code>app.yaml</code> file. Its path is the path you specified.<br>
<br>
<br>
<h2>4. Start the development server</h2>

Before you deploy your app to the production GAE environment and therefore be available to your external audience, you may want to explore Course Builder and its sample course in a more private setting. That more private setting is called a <b>development server</b>, which is run on your local computer.<br>
<br>
<h4>From the Launcher (Windows 7, Mac)</h4>

<img src='http://wiki.course-builder.googlecode.com/git/images/GAE_launcher.png' />

To start the development server from the Launcher:<br>
<ol><li>Single click your app.<br>
</li><li>When it's highlighted, click the <b>Run</b> button to start the server (for that app). <br>Once the <b>Browse</b> button is enabled, your personal server is ready to accept requests.<br>
</li><li>Click on the <b>Browse</b> button to visit the app in a web browser.</li></ol>

From the Launcher, you can stop your server by clicking on the <b>Stop</b> button. You may want to stop a particular Course Builder instance if you have multiple instances loaded or any instance before you exit the Launcher. For more information, see <a href='AppEngine#Stop_your_server.md'>Stop your server</a>.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>