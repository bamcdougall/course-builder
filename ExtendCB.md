<h1>Customizing Course Builder</h1>



If you want a feature that is not currently available in Course Builder, you can create it yourself or use a customization from a third-party. Usually these custom features are implemented as modules or extensions that you drop into the following Course Builder directories:

  * `extensions/tags`
  * `views/`
  * `modules/`

You will need programming experience or knowledge to make these customizations. This **Developer** sections assumes you have such experience or knowledge. We furthermore do not advise you editing the Course Builder code directly since upgrading and ongoing maintenance may become very cumbersome and even produce unexpected results.

Course Builder cannot make any guarantees about third-party modules or extensions nor can take responsibility for them. Test modules thoroughly on a development server before you deploy to your students.

Before you create a module or extension, try to search the documentation to see if the feature is already available. For example, you may want to embed a Google Doc into your Lesson but that feature already exists natively in Course Builder.

## Prepare your environment ##
If you are going to make changes to the code, you should:

  * Do your development on a development server. Do not make changes directly to a live instance.
  * Setup source control. For example, you can use [git](http://git-scm.com/).
  * Document the changes you made.

Doing these steps will also help you when you upgrade to a new version of Course Builder by making the transition smoother.

## Modify and extend the code ##
You modify and extend the code in the Course Builder installation on a development server, not through the browser after deployment. There are three ways to customize the Course Builder code:

  * [Course pages](ExtendCoursePages.md) - Add new HTML pages to the course. The new pages will be located under the `/views` directory.
  * [Components](CreateComponents.md) - Adding a new item that shows up as a component type that you can add to the lesson body.
  * [Modules](CreateModules.md) - Add new, self contained code (a "module") that encapsulates a feature and can be integrated into Course Builder.