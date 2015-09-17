<h1>Create Custom Modules</h1>



If you want customizations that cannot be satisfied by adding new links, pages, or components, you can add custom modules. Modules are files that contain code authored independent of Course Builder yet can be integrated without editing the native Course Builder code. Each piece of functionality (one module, one feature) is captured in a collection of files. These collections of files are known as a "module" and reside in one place under a unique name.

In Course Builder, the modules are located in the `modules/` directory and they are registered in `main.py`.

To create a custom module, at the very least you must:
  * import your module through the `main.py` file.
  * enable your module through the `main.py` file.
  * create your module directory under `modules/`.
  * add `__init__.py` file in your new module directory.
  * define your feature in a Python file in your new module directory.

## Add Khan Academy Exercises ##
This section illustrates how to create a Khan Academy module named `khanex`.

  1. Modify the `main.py` file in your Course Builder root directory to import and enable the module.
```
    ...
    import modules.khanex.khanex
    ...
    modules.khanex.khanex.register_module().enable()
```
  1. Create the directory `modules/khanex/`.
  1. Create an empty `__init__.py` under `modules/khanex/`.
  1. Create a `khanex.py` file under `modules/khanex/`.
  1. In the `khanex.py` file, create the module registration function. The registration function connects your extensions to Course Builder. Specifically, add a:
    * **New static handler**: serves all the static resources for the Khan Academy Exercises. These resources are packaged as a zip file and the handler will simply serve the files from the zip file.
    * **New custom tag**: visually represents a specific Khan Academy Exercise in a lesson page.
    * **New dynamic handler**: records student attempts in solving the exercises.
    * Therefore, the code for the registration function is:
```
    ...
    def register_module():
	    """Registers this module in the registry."""

	    # register custom tag
	    tags.Registry.add_tag_binding('khanex', KhanExerciseTag)

	    # register handlers
	    zip_handler = (
	        '/khan-exercises', sites.make_zip_handler(ZIP_FILE))
	    render_handler = (
	        '/khan-exercises/khan-exercises/indirect/', KhanExerciseRenderer)

	    # register module
	    global custom_module
	    custom_module = custom_modules.Module(
	        'Khan Academy Exercise',
	        'A set of pages for delivering Khan Academy Exercises via '
	        'Course Builder.',
	        [], [render_handler, zip_handler])
	    return custom_module	
```
> > All modules can be inspected by the administrator in the **Deployment** section of Course Builder instance.
> > <img src='http://wiki.course-builder.googlecode.com/git/images/khan-deployment.png' width='500px' />
  1. Course Builder uses XHTML to represent student facing content. Create a new tag called {{{khanex}} and use it in the lesson body:
```
  <h1>My lesson</h1>
  <p>My Exercise:
   <khanex name="adding_and_subtracting_negative_numbers"></khanex>
  </p>
```
  1. Instead of writing the tag manually, we simply tell the Course Builder visual editor about the new tag properties. The editor then allows the course author to  use the tag in either the WYSIWYG or raw HTML mode. Our tag only has one property: the name of the specific exercise from the bundled Khan Academy Exercise library. The tag properties are configured by constructing a tag schema object and overriding the method `get_schema()`. In the `khanex.py` file, add the following code (but leave off the code that inspects the zip file and lists all exercises it finds in there):
```
  def get_schema(self, unused_handler):
        """Make schema with a list of all exercises by inspecting a zip file."""
        ...
        reg = schema_fields.FieldRegistry('Khan Exercises')
        reg.add_property(
            schema_fields.SchemaField(
                'name', 'Exercises', 'select', optional=True,
                select_data=items,
                description=('The relative URL name of the exercise.')))
        return reg
```
> > <img src='http://wiki.course-builder.googlecode.com/git/images/khan-editor.png' width='500px' />
  1. Convert the new `khanex` tag into something a student can see by creating a script that embeds an iframe. Knowing what the `embed.js` file does in the following code is optional and is discussed separately in a subsequent section at the end of this page.  In the `khanex.py` file add:
```
    def render(self, node):
        """Embed just a <script> tag that will in turn create an <iframe>."""
        name = node.attrib.get('name')
        caption = name.replace('_', ' ')
        return cElementTree.XML(
            """
<div style='width: 450px;'>
Khan Academy Exercise: %s
<br/>
<script>
// customize the style of the exercise iframe
var ity_ef_style = "width: 750px;";
</script>
<script src="%s" type="text/javascript"></script>
</div>""" % (
    cgi.escape(caption), 'khan-exercises/embed.js?static:%s' % name))
```
  1. When students interact with an exercise, you may want to know all the attempts they make. Our Khan Academy Exercises package has the callback that sends student interaction data to a server of your choice. Implement the server-side handler that receives this data with the class `KhanExerciseRenderer` post method. It receives JSON data representing student actions. After proper authentication, the data is captured as an Event for later processing:
```
  ...
  # record submission
  models.EventEntity.record(
      'module-khanex.exercise-submit', self.get_user(), data)
  ...
```
  1. See all captured events using the Google App Engine datastore viewer. Here is a typical event:
> > <img src='http://wiki.course-builder.googlecode.com/git/images/khan-events.png' width='500px' />
  1. There are many interesting things one can do with data submission: record progress only if student gave a right answer, update student grade book, find related exercises, etc. The following code updates the progress indicator and records that the student attempted a specific exercise:
```
  ...
   # update progress
   unit_id, lesson_id = self._get_unit_lesson_from(data)
   self.get_course().get_progress_tracker().put_activity_accessed(
       student, unit_id, lesson_id)
   ...
```
> > <img src='http://wiki.course-builder.googlecode.com/git/images/khan-progress.png' width='500px' />
  1. Define a new configuration property that holds a list of exercise names. The bundled Khan Academy Exercise library contains over 400 exercises, but we can restrict the number available to the course author:
```
...
from models.config import ConfigProperty
...
WHITELISTED_EXERCISES = ConfigProperty(
	'_khanex_whitelisted', str, (
		'A white-listed exercises that can be show to students. If this list '
		'is empty, all exercises are available.'),
	default_value='', multiline=True)
...
```
> > Now the property can be modified to a desired value at runtime. Here is the new property (in blue) in the list of settings:
> > <img src='http://wiki.course-builder.googlecode.com/git/images/khan-settings.png' width='500px' />
  1. Click the **Override** button to bring up the editor and modify the value. The user interface was constructed automatically given a property definition. Course Builder builds the user interface, stores property values in the datastore, and propagates value updates to all front end application instances. The only thing left to do is to check the value before listing or serving a specific exercise.
> > <img src='http://wiki.course-builder.googlecode.com/git/images/khan-editor-whitelist.png' width='500px' />
  1. Create a new performance counter to count the number of times students submit an attempt to the server. We declare the counter and then update its value in the `post()` method.
```
...
from models.counters import PerfCounter
...
# declare
ATTEMPT_COUNT = PerfCounter(
	'gcb-khanex-attempt-count',
	'A number of attempts made by all users on all exercises.')
...
# update
ATTEMPT_COUNT.inc()
...
```

> The performance counter values are automatically aggregate across all front end application instances and displayed to the system administrator on the Metrics tab in real-time.

> <img src='http://wiki.course-builder.googlecode.com/git/images/khan-counters.png' width='500px' />

We are done. In just 200 lines of code, we fully integrated Khan Academy Exercises into Course Builder.

### Khan Academy Exercise embed.js File ###
The runtime behind Khan Academy Exercises is undocumented and quite complex. The `khan-exercises/embed.js` script:
  * embeds an iframe
  * an iframe handler returns content for the specific exercise definition HTML page
  * HTML page loads lots of JavaScript representing the crux of the Khan Academy Exercises framework
  * loaded script uses AJAX to fetch a visual template page into which an exercise is embedded visually
  * script combines an exercise definition with the visual template to create the final rendition.

The variable `EXERCISE_HTML_PAGE_RAW` holds the visual template. The HTTP handler `KhanExerciseRenderer` serves both:
  * this visual template
  * the exercise definition HTML files (after looking it up in the zip file).

> <img src='http://wiki.course-builder.googlecode.com/git/images/khan-cb.png' width='500px' />