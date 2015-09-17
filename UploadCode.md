<h1>Deploy to Google App Engine for the First Time </h1>



As soon as you download Course Builder and can run the example course successfully, you should deploy to Google App Engine. After doing so, you create your courses in the browser and your data will be saved to Google App Engine's datastore. At that point, people can access your course from its default URL of _**`APP_ID`**_`.appspot.com`, where  _**`APP_ID`**_ is the app name you register [Register below](#Register_your_app_with_Google.md).

The first time you deploy your app, there are three steps:

  1. [Register your app with Google.](#Register_your_app_(course)_with_Google.md)
  1. [Set up an app-specific password.](#Set_up_an_app-specific_password.md)
  1. [Upload (or deploy) your app.](#Upload_(or_deploy)_your_app.md)

If need to redeploy Course Builder, follow the instructions in [Subsequent Deployments to Google App Engine](DeployAgain.md).

This page talks about deploying your app to production, which is Google App Engine. When you deploy Course Builder to production, it is publicly available. You may decide that you want to test your application in production before making it publicly available. To do that, you'll need to follow the steps in [Subsequent Deployments to Google App Engine](DeployAgain.md).

## Register your Course Builder with Google ##
Before you can deploy (or upload) an app like Course Builder to Google, you must register that app with Google by giving it a name.

When you register a name with Google, Google gives your app a domain name that corresponds to that name. Once registered and deployed, your course can be reached from almost anywhere on the Internet. The domain name Google uses is of the form _**`APP_ID`**_`.appspot.com`, where _**`APP_ID`**_ is the name you register.

> <b>Note about names:</b> You must choose a name that hasn't already been used by anybody else.  App ID names can only be used once and can never be returned to the pool of available names. Whether your app is running, not running, or deleted, once a name has been chosen, it can no longer be used by any other app.

To register your app:

  1. You must have a Google account to register a Google App Engine app. If you do not have a Google account, you can [create a Google account](https://www.google.com/settings/account) with an email address and password.
  1. Once you have a Google account, start registration of your app in one of two ways:
    * From a web  browser, navigate to https://appengine.google.com/
  1. If you are not currently logged in to your Google account, you see a login screen.
  1. Once you login, you see your GAE dashboard. If you've never worked on a GAE app, your dashboard looks as follows:<br> <img src='http://wiki.course-builder.googlecode.com/git/images/dashboard.png' />
<ol><li>Click on <b>Create Application</b> and follow the instructions for verifying your account. After this process, you see the new application screen:<br> <img src='http://wiki.course-builder.googlecode.com/git/images/new-application.png' />
</li><li>To create a new application, follow the instructions to register an application ID, a name unique to this application. If you elect to use the free appspot.com domain name, the full URL for the application will be <code>http://</code><i><b><code>APP_ID</code></b></i><code>.appspot.com/</code>. You can also purchase a top-level domain name for your app, or use one that you have already registered.</li></ol>


<b>Important:</b> The app ID you register for your app <b>must</b> be the app ID in your <code>app.yaml</code> file; see <a href='GetCode#2._Decide_on_a_name_for_your_app.md'>Run the Sample App</a>. If you register a different ID than you use in development, you must change <code>app.yaml</code> before deploying your app.<br>
<br>
Here is a video that shows these steps: <a href='http://www.youtube.com/watch?v=_xpnfrqjuKU&feature=share&list=PLbTy14-ZMIDJGS1XLdYj3Nzrhfd6EDWJC'>Register your app and edit the app.yaml file (1:58)</a>.<br>
<br>
More details on creating an app can be found in the <a href='https://developers.google.com/appengine/docs/python/gettingstartedpython27/uploading'>official docs</a>.<br>
<br>
<br>
<h2>Set up an app-specific password</h2>

Course Builder uses 2-step authentication to ensure the security of your courses. This means that to deploy your application, you do not provide the standard password that goes with your username. You instead supply a password that is specific to this application. See <a href='http://support.google.com/accounts/bin/answer.py?hl=en&answer=185833'>Signing in using application-specific passwords</a> for information on how to create your app-specific password.<br>
<br>
Make a note of the password you generate. You'll need to use it several times in the next step. You'll also need it in the future, if you make changes that you must upload. Your password should not have any spaces although visually it may appear that there are spaces.<br>
<br>
<h2>Upload (or deploy) your app</h2>
Once you register your app, the most straightforward way to deploy it is from a <a href='http://code.google.com/p/gcb-x-03141590/wiki/FAQ#What%27s_a_%22shell_or_command_prompt%22?'>shell or command prompt</a>. From that window:<br>
<br>
<blockquote><code>cd </code><i><b><code>&lt;course builder directory&gt;</code></b></i><br>
<code>appcfg.py -A YOUR_APP_NAME update .</code><br></blockquote>

where <i><b><code>YOUR_APP_NAME</code></b></i> is the name you gave your app when during registration in the <b>Create Application</b> step previously mentioned. <i>Note that the period at the end of the <code>appcfg.py update</code> command is necessary.</i>

Your default web browser or a new browser tab may open asking you to authenticate with your Google Account password. Next, you will be asked if you agree to give Google App Engine the listed permissions. If you agree, the authentication flow finishes and the upload commences (you can see the uploading process in your original terminal).<br>
<br>
For each <code>appcfg.py</code> command, you are asked to supply your credentials. Supply your username and the app-specific password you created in the <a href='#Set_up_an_app-specific_password.md'>previous step</a>.<br>
<br>
It can take anywhere from a few seconds up to about a minute to deploy your app. This also depends on your Internet connection speed. Once the deployment completes and confirms, you (and everyone else on the planet not blocked from Google) can visit <code>http://</code><i><b><code>APP_ID</code></b></i><code>.appspot.com</code> and verify that your app is indeed available to all.<br>
<br>
Here is a video that shows this proces, from download to deployment: <a href='https://www.youtube.com/watch?v=vErOXvQop10'>download, installation, and deployment (2:39).</a>

<h2>Set Up Security</h2>
After you deploy our app but before anyone uses the course, you must change the default security setting. Course Builder implements protection against XSRF using transient user-action specific tokens for all state-modifying HTTP operations supported by the product.<br>
<br>
To change the default token, go to <b>Site admin > Site settings</b> and change the value of <b>CSRF secret</b>. See <a href='AdminPage#Security.md'>Security</a> for more information.<br>
<br>
<h2>Sending Course Builder Deployment Information</h2>
When you deploy to Google App Engine for the first time, you will see a welcome screen with a message about Google collecting Course Builder deployment information. Google uses this information to help improve Google's products and services and for research purposes. Google will maintain this data in accordance with the <a href='http://www.google.com/policies/privacy/'>Google Privacy Policy</a> and will not associate the data it collects with the course or a user. You can turn this off at any time, either at this Welcome window or by going to <b>Dashboard > Site admin > Site settings > Usage reporting</b> and setting the value to <code>False</code>.<br>
<br>
If you are upgrading Course Builder, you will instead see this message as a persistent bar in the Dashboard. If you have admin rights, you may turn this off at the persistent bar or through the <b>Dashboard > Site Admin > Site settings > Usage reporting</b> setting previously mentioned.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>