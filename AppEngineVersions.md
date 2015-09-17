<h1>Multiple Versions on Google App Engine</h1>



You may want to test your course in the production environment before you make it publicly available. Rather than have a truly _private_ course in production, you can create a separate _version_ of the course at a related, but unpublicized, URL. The key is that GAE allows versioning of your app and provides a separate URL for each version. (For details, see [Requests and Domains](https://developers.google.com/appengine/docs/python/runtime?hl=en#Requests_and_Domains)).

Remember that if the name of your app is _**`MYCOURSE`**_, it's available at `http://`_**`MYCOURSE`**_`.appspot.com`. You can use the `version` field in `app.yaml` to create and deploy a second version of the app. In this situation, you get a separate URL for that version. For example, if you specify `version: latest`, that gets deployed to  `http://latest.`_**`MYCOURSE`**_`.appspot.com`.

Assume you have two different directories on your local machine, each of which contains code for a Course Builder course **and** each of their `app.yaml` files has the same value for the `application` parameter. If you run `appcfg.py upload` in both of these directories, GAE loads both applications to production and considers them to be the same application.
  * If the value of the `version` parameter is the same in both `app.yaml` files, then App Engine considers there to be only one version of the application and overwrites the first one loaded with the second one.
  * If the value of the `version` parameter is different in the `app.yaml` files, then App Engine considers there to be two versions of the application.
    * The **first** one you upload is the default version. That version is available at `http://`_**`MYCOURSE`**_`.appspot.com` and at  `http://`_**`VERSION.MYCOURSE`**_`.appspot.com`, where _**`VERSION`**_ is the value of the `version` parameter.
    * The second one you upload is a non-default version. It is available only at `http://`_**`OTHERVERSION.MYCOURSE`**_`.appspot.com`, where _**`OTHERVERSION`**_ is the value of its `version` parameter.

Notice that a version doesn't have to be a number; it can be any alphanumeric string (without spaces).

## Change the default version ##
If you do nothing special, the first version of an application that is uploaded remains the default version (that is, the version you get when you simply enter `http://`_**`APPID`**_`.appspot.com`). Later versions do not automaically supercede it. You can change the default version yourself:

  1. Visit http://appengine.google.com.
  1. Choose your app.
  1. Click on **Versions** in the left navigation.
  1. Pick the radio button for the version you want to be the default.
  1. Click on **Make Default**.

## Make "under construction" and "latest" versions ##
To create an "under construction" public version as the temporary default and a "latest" hidden version as a working version, follow steps similar to the following:

  1. Make two directories that contain the sample app.
  1. Edit the `app.yaml` file in each of them.
  1. In the directory for your temporarily public "under construction" version, specify _**`mycourse`**_ as the value of `application` and specify `underconstruction` as the value of `version`.
  1. In the directory for your working version, specify _**`mycourse`**_ as the value of `application` and specify `latest` as the value of `version`.
  1. In the under construction directory,
    1. Replace the entire contents of `views/course.html` with<br><code>&lt;html&gt;&lt;body&gt;Really under construction.&lt;/body&gt;&lt;/html&gt;</code>
<ol><li>Replace the text in <code>views/register.html</code> with<br><code>Under construction.</code>
</li></ol><ol><li>In the working version directory, do all the work you need to create your course.<br>
</li><li>Upload both versions to production, as described in <a href='UploadCode#Upload_(or_deploy)_your_app.md'>Upload your app</a>, making the app in the under construction directory be the default version, as described <a href='#Change_the_default_version.md'>above</a>.<br>
</li><li>Test away.<br>
</li><li>When you're ready to release your application, hide the "under construction" version by changing the default version to your working version, which makes that one visible.</li></ol>

<h2>Hide your course from search engines</h2>
To further decrease the likelihood of someone stumbling upon your course, you can create a <a href='http://www.robotstxt.org/'>robots.txt</a> file to tell search engines such as Google's search engine to ignore your pages.<br>
<br>
You add a <code>robots.txt</code> file to your application by creating that file and modifying <code>app.yaml</code> to know about it.<br>
<br>
1. Create a <code>robots.txt</code> file in the top-level of your application directory (the same place that contains <code>app.yaml</code>). In robots.txt, specify:<br>
<br>
<pre><code>User-agent: *<br>
Disallow: /<br>
</code></pre>

This tells robots (such as Google's robots that crawl the web to create its index) to ignore everything in this site.<br>
<br>
2. In <code>app.yaml</code>, the handlers section looks like this:<br>
<br>
<pre><code>handlers:<br>
- url: /remote_api<br>
  script: $PYTHON_LIB/google/appengine/ext/remote_api/handler.py<br>
  login: admin<br>
- url: /_ah/dev_admin(/.*)?  # provides interactive console<br>
  script: $PYTHON_LIB/google/appengine/ext/admin<br>
  login: admin<br>
  secure: always<br>
- url: /.*<br>
  script: main.app<br>
</code></pre>

Add a new entry to the top of handlers section as follows:<br>
<br>
<pre><code>- url: /robots.txt<br>
  static_files: robots.txt<br>
  upload: robots.txt<br>
</code></pre>


Later, when you release the course, if you want it to be findable, you should reverse this change: remove the entry from <code>app.yaml</code> and delete the <code>robots.txt</code> file.<br>
<br>
<h2>Restrict access to your course</h2>
You may decide that simply making your course harder to find is not adequate. You may want to actually restrict access to a specific set of testers. To do this, you must write new Python code. We do not provide this code for you, but the basic idea is described here.<br>
<br>
Any time someone comes to any URL in your course, Course Builder figures out if that person is already registered. If not, Course Builder displays the registration page.<br>
The <code>RegisterHandler</code> class (defined in <code>controllers/utils.py</code>) determines what happens on the registration page.<br>
<br>
Before actually rendering the registration page, the <code>RegisterHandler's get</code> method checks to see if the person is already registered. (It does this check again, in case the person went directly to the registration page instead of being redirected there from another page.)<br>
<br>
If the persion is registered, <code>get</code> displays the course's home page. If the person is not registered, <code>get</code> displays the registration page.<br>
<br>
Instead of immediately showing the registration page, you can add some extra code to the <code>get</code> method. In that code, check whether or not the person is in the list of specified testers (the "whitelist"). If the person is on the whitelist, display the registration page. If not, display a different page that says "Sorry. Course closed." or something like that.<br>
<br>
You can simply create the whitelist as an array of email addresses.<br>
<br>
<h2>Run Course Builder tests</h2>
Course Builder contains a set of functional tests for its source code. If you make significant changes to the source code, consider running these tests. Depending on your changes, you may also have to modify the tests.<br>
<br>
Before you can run the tests:<br>
<ol><li>Install Python WebTest. To do so, follow the instructions at <a href='http://webtest.pythonpaste.org/en/latest'>Testing Applications with WebTest</a>.<br>
</li><li>Add WebTest to your Python path.</li></ol>

Once you have WebTest installed, run the tests with the following commands:<br>
<br>
<blockquote><code>cd </code><i><b><code>APPPATH</code></b></i><br>
<code>python ./tests/suite.py</code></blockquote>

where <i><b><code>APPPATH</code></b></i> is the directory containing your app.<br>
<br>
<h2>Official GAE documentation</h2>

There's a lot of <a href='https://developers.google.com/appengine/docs/python/config/appconfig#Required_Elements'>official documentation</a> for GAE.<br>
<br>
<table><thead><th> <a href='https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code'>Ask questions in the forum</a> </th></thead><tbody>