<h1>Create Custom Components</h1>

If you want a [component](CreateLessons#Create_lesson_content_from_the_browser.md) that is not currently available, you can create your own. To add a custom component, you must:

  * create a method to render the new component
  * define the component schema
  * create an icon that represents your component

Your custom definitions should reside in the following directory:
`extensions/tags/<custom_name>/`

All the official Course Builder supplied components are in the `gcb/` directory. All component definitions must be defined in the `__init__.py` file.

## Define the Component ##
In your new `tags/` directory, you must create your `__init__.py` to define the components. You may want to copy over `extensions/tags/gcb/__init__.py`. It may be quicker to edit an existing, working file.

In addition to importing the libraries and creating a definition that forces the transaction over https, all of which you should keep, you see one class per component. The following example shows the YouTube class.

```
class YouTube(tags.BaseTag):

    @classmethod
    def name(cls):
        return'YouTube Video'

    def render(self, node):
        video_id = node.attrib.get('videoid')
        you_tube_url = (
            'https://www.youtube.com/embed/%s'
            '?feature=player_embedded&amp;rel=0') % video_id
        iframe = cElementTree.XML("""
<p class="gcb-video-container">
  <iframe class="youtube-player" title="YouTube Video Player"
    type="text/html" width="650" height="400" frameborder="0"
    allowfullscreen="allowfullscreen">
  </iframe>
</p>""")
        iframe[0].set('src', you_tube_url)
        return iframe

    def get_icon_url(self):
        """Return the URL for the icon to be displayed in the rich text editor.

        Images should be placed in a folder called 'resources' inside the main
        package for the tag definitions."""

        return '/extensions/tags/gcb/resources/youtube.png'

    def get_schema(self, unused_handler):
        """Return the list of fields which will be displayed in the editor.

        This method assembles the list of fields which will be displayed in
        the rich text editor when a user double-clicks on the icon for the tag.
        The fields are a list of SchemaField objects in a FieldRegistry
        container. Each SchemaField has the actual attribute name as used in the
        tag, the display name for the form, and the type (usually string)."""
        reg = schema_fields.FieldRegistry(YouTube.name())
        reg.add_property(
            schema_fields.SchemaField('videoid', 'Video Id', 'string',
            optional=True,
            description='Provide YouTube video ID (e.g. Kdg2drcUjYI)'))
        return reg
```


  * The `name` method is defined in those cases where the class name is different than the name the users see. For example, the class name is `YouTube` but users will see "YouTube Video." This function is optional.

  * The `render` method defines how to display the component. The `cElementTree.XML()` function sanitizes the HTML you define before it is outputted to the page.

  * The `get_icon_url` method displays the icon in the lesson body. Create a directory called `resources/` in your new component directory and place the icon there. For example, `extensions/tags/custom/resources/iframe.png`.

  * The `get_schema` method defines what parameters the user must supply to construct the component. For YouTube videos, it is the video ID.
    * `reg` registers the property that you will need for you new component.
    * Add your component properties through `reg.add_property()`.