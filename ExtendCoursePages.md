<h1>Add New Course Pages</h1>



To add a new page, like a static FAQ page, you should modify the:

  * template files under the `/views` directory. These files are HTML files with Jinja, which is a template language for Python. When the files under `views/` are rendered, all the Jinja elements are replaced with the appropriate HTML so the final output will only show HTML.
  * routing under `modules/`
  * controller under `controllers/`
  * navigation bar, if necessary

When you modify any of these course pages and want to upgrade to a new version of Course Builder, you must manually implement the changes in the new release. Merely replacing the new files with your customized files may not work. Hence, it is important you have all your changes under source control with good documentation. Note also that these changes will propagate to all your courses if you are running multiple courses.

## Handling Requests ##
The following image illustrates how Course Builder handles a request from a page. In this case, from a forum page.

<br> <img src='http://wiki.course-builder.googlecode.com/git/images/request-handling.png' width='700px' />

<ol><li>A request comes from <code>&lt;somename&gt;.appspot.com/forum</code>.<br>
</li><li>The request is sent to <code>controllers/sites.py</code> to determine where the user is currently located.<br>
</li><li>The request is then sent to the URL router <code>modules/courses.py</code>. Within <code>course.py</code> each URL fragment, like <code>/forum</code>, is mapped to a controller under <code>controllers/</code>. The controllers themselves will have <code>GET</code> and <code>POST</code> handlers.<br>
</li><li>The controller may interact with some <code>models/</code> and <code>modules/</code>.<br>
</li><li>The controller generates the appropriate response, a rendered HTML page.</li></ol>

<h2>Add a FAQ Page</h2>
We will work through an example of how to create a FAQ page.<br>
<br>
<ol><li>Add the link to the FAQ page in the navigation bar. All HTML files in Course Builder inherit <code>views/base_course.html</code> and it is also where the code for the navigation bar resides.<br>
<ol><li>Search for <code>"{% block navbar %}"</code> in <code>base_course.html</code>
</li><li>Add your new tab.<br>
<pre><code>   &lt;!-- custom code: FAQ --&gt;	<br>
   &lt;li {% if navbar.faq %}class='active'{% endif %}&gt;<br>
       {# I18N: Navbar tab. #}<br>
       &lt;a href="faq"&gt;{{ gettext('FAQ') }}&lt;/a&gt;<br>
    &lt;/li&gt;<br>
   &lt;!-- end custom code --&gt;<br>
</code></pre>
</li></ol></li><li>Open <code>modules/courses/courses.py</code>.<br>
</li><li>Add your URL fragment for the FAQ page in <code>courses_routes</code>:<br>
<pre><code> ('/faq', utils.FaqHandler)<br>
</code></pre>
</li><li>Start a new <code>utils.py</code> file under <code>controllers/</code>. For example, you can call it <code>utils_faq.py</code> Although you could modify the <code>utils.py</code> directly, this makes the upgrade process more difficult. By creating a separate file, you can just copy and paste your custom files in the <code>controllers/</code> directory of your new installation.<br>
</li><li>In your new utils file, add a new FAQ handler.<br>
<ol><li>Define a new class<br>
</li><li>Create a function to handle <code>get</code> requests.<br>
</li><li>Add the code to create the tests for <code>example.com</code> and the logout link at the top of the page.<br>
</li><li>Highlight the FAQ tab in the navigation bar.<br>
</li><li>Render the FAQ page. The final output should look something like:<br>
<pre><code>   class FaqHandler(BaseHandler):<br>
       """Handler for FAQ page."""<br>
       def get(self):<br>
           """Handles GET requests."""<br>
           if not self.personalize_page_and_get_enrolled():<br>
               return<br>
           <br>
           self.template_value['navbar'] = {'faq': True}<br>
           self.render('faq.html')<br>
</code></pre>
</li></ol></li><li>Add your FAQ page, <code>faq.html</code> under <code>views/</code>.</li></ol>

