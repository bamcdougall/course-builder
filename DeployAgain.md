<h1>Subsequent Deployments to Google App Engine</h1>



This page talks about re-deploying Course Builder to Google App Engine. That is, you have at least deployed once. You may want to re-deploy because you are upgrading Course Builder versions. If you have not deployed to production yet, see [Deploy Your App to Google App Engine for the First Time](UploadCode.md).

## Deploy Course Builder ##
The most straightforward way to deploy Course Builder is from a [shell or command prompt](http://code.google.com/p/gcb-x-03141590/wiki/FAQ#What%27s_a_%22shell_or_command_prompt%22?). From that window:

> `cd `_**`APPPATH`**_<br>
<blockquote><code>appcfg.py update .</code><br></blockquote>

where <i><b><code>APPPATH</code></b></i> is the directory containing your app's code. <i>Note that the period at the end of the <code>appcfg.py update</code> command is necessary.</i>

For each <code>appcfg.py</code> command, you are asked to supply your credentials. Supply your username and the app-specific password you created in the <a href='#Set_up_an_app-specific_password.md'>previous step</a>.<br>
<br>
Once the deployment completes and confirms, you (and everyone else on the planet not blocked from Google) can visit <code>http://</code><i><b><code>APP_ID</code></b></i><code>.appspot.com</code> and verify that your app is indeed available to all.<br>
<br>
Here is a video that shows this process, from download to deployment: <a href='http://www.youtube.com/watch?v=OtVd1komyGY&list=PLbTy14-ZMIDJGS1XLdYj3Nzrhfd6EDWJC'>download, installation, and deployment (4:33).</a>

<h4>Enable and use Datastore Admin</h4>
The following steps you only need to do once:<br>
<br>
<ol><li>From a web  browser, navigate to <a href='https://appengine.google.com/'>https://appengine.google.com/</a>.<br>
</li><li>On the <b>My Applications</b> page, click on the name of your app. The dashboard for your app appears:<br> <img src='http://wiki.course-builder.googlecode.com/git/images/prod-dashboard.png' />
</li><li>In the left navigation, click on <b>Datastore Admin</b>. The first time you do this, a screen appears asking if you want to enable datastore administration options:<br> <img src='http://wiki.course-builder.googlecode.com/git/images/datastore-enable.png' />
</li><li>Click on <b>Enable Datastore Admin</b>.<br>
</li><li>The <b>Datastore Admin</b> page for your app appears.</li></ol>

You now can use the Datastore Admin to directly inspect or export data stored by a Course Builder. We advise you not to modify any datastore objects directly.<br>
<br>
<h2>Enable Google App Engine Appstats</h2>
The Appstats library in Google App Engine helps profile your Remote Procedure Calls (RPCs) for your implementation of Course Builder. It is a debugging feature and optional. For example, you may want to know if there are any redundant calls to the datastore.  By default Appstats is disabled.<br>
<br>
The setting to enable this feature is in <code>app.yaml</code>.  Specifically, it is under <code>env_variables</code>:<br>
<pre><code>	...<br>
	env_variables:<br>
	  GCB_PRODUCT_VERSION: 'x.x.x'<br>
	  GCB_APPSTATS_ENABLED: false<br>
	...<br>
</code></pre>

To turn on Appstats, set <code>GCB_APPSTATS_ENABLED</code> to <code>true</code>. To learn more about Appstats, see the <a href='https://developers.google.com/appengine/docs/python/tools/appstats'>Google App Engine documentation</a>.<br>
<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>