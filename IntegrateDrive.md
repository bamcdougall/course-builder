<h1>Integrate with Google Drive</h1>



You can integrate Google Docs on your Google Drive into Course Builder. After turning on a few settings, you can bring in any Google Doc that is on Google Drive and then begin editing that Google Doc locally in Course Builder. You can then serve that content to your students at scale.

When you integrate with Google Drive this way, you are downloading the Google Doc into Course Builder. Through the **Revert** button, you will be able to revert any changes you make.  Also, any changes you make locally in Course Builder will not be seen on your Google Drive. Note that this is different from embedding a Google Doc, where no local copy is made.

Currently, Course Builder only supports integrating Google Docs from Google Drive.

## Setup Google Drive ##
You must first setup settings in Course Builder's Admin page as well as in Google Developer Console.

  1. Go to **Site admin > Site Settings**
  1. Click **Override** (or **Edit**) for the `Google APIs` setting.
  1. Click **Value**
  1. Set **Status** to "Active".
  1. Click **Save**.

For security reasons, each course that you want to use the feature with needs to be set up separately. This is required because you could have many courses on one deployment, and each course is isolated from all the others. You don’t want Bob, who’s writing one course, to be able to use the credentials set up by Alice, who’s running a completely different course.

Next, go to the Google Developer Console to turn on APIs as well as get two values from Google: an API Key and Client ID.

  1. Go to: https://developers.google.com/console
  1. Click on your Course Builder project.
  1. On the left-hand navigation, click **APIs**, which is under the **APIs & auth**.
  1. Click on **Drive API**.
  1. Turn on the **Drive API** by clicking "Enable API".
  1. Return to the **APIs** section, click on **Google Picker API** or search for it in the search box.
  1. Turn on the **Google Picker API** by clicking "Enable API".
  1. Click **Credentials** on the left-hand navigation under the same **APIs & auth**.
  1. Under **OAuth** click **Create new Client ID**.
  1. Select **Web application** under **Application type**.
  1. In **AUTHORIZED Javascript ORIGINS** type the URL to your Course Builder application. For example, if your application URL is https://www.example-sandwich.appspot.com/ then type: https://example-sandwich.appspot.com
  1. Delete any URIs in **AUTHORIZED REDIRECT URI**. That is, keep that field empty.
  1. Click **Create Client ID**.
  1. Under **Public API access** click **Create new Key**.
  1. Click **Browser key**.
  1. Add the URL pattern you added earlier under **AUTHORIZED Javascript ORIGINS** and click **Create**. For example, if you added https://example-sandwich.appspot.com, type `*example-sandwich.appspot.com/*`.
  1. Click **Consent screen** on the left-hand navigation under the same **APIs & auth**.
  1. Select your email address under **EMAIL ADDRESS**.
  1. Type in your desired product name under **PRODUCT NAME**. All other fields are optional.
  1. Click **Save**.

Go to Course Builder and type the Client ID and API Key you just created.

  1. Go to **Dashboard > Settings > Course**
  1. In the **Google API Key** field, add the API key that was generated. The API key can be found under Google App Engine Developer's Console > Credentials > Public API Access.
  1. In the **Google Client Id** field, add the Client ID that was generated. The Client ID can be found under Google App Engine Developer's Console > Credentials > OAuth.
  1. Click **Save**.

## Use Google Drive ##
Add your Google Doc from Google Drive the same way you add the other components.

  1. Go to where you want to integrate the Google Doc.  For example, in the **Assessment Content** or **Lesson Body**.
  1. Click the Google Drive icon in the Rich Text editor.
  1. Click **Pick**.
  1. Choose the Google Doc of your choice.
  1. Click **Save**.

You will see a Google Drive icon.