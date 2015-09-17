<h1>Internationalization</h1>



Course Builder supports 57 languages and all student facing text is translated in these languages. To use one of these languages, specify it as a Base Locale in **Dashboard > Settings > I18N**. You can also specify the language in your `course.yaml` file. The language letter code to use is the directory name of that language in the `locale` directory. The full path to the language directory is:

`modules/i18n/resources/locale`

Course Builder’s Internationalization framework uses the following technologies:

  * [webapp2](http://code.google.com/p/webapp-improved/downloads/detail?name=webapp2-2.5.1.zip&can=2&q=)
  * [pybabel](http://babel.edgewall.org/wiki/Documentation/cmdline.html)
  * [pytz](http://pytz.sourceforge.net/)
  * [Jinja2’s i18n extension](http://jinja.pocoo.org/docs/extensions/)

This Internationalization capability was provided with the help of UniMOOC-Tec (http://www.unimooc-tec.com/) at Universidad de Alicante.

## Supported Languages ##
Here are the supported languages and their abbreviation in parenthesis:

  * af (Afrikaans)
  * am (Amharic)
  * ar (Arabic)
  * bg (Bulgarian)
  * bn (Bengali)
  * ca (Catalan)
  * cs (Czech)
  * da (Danish)
  * de (German)
  * el (Greek)
  * en\_GB (English - United Kingdom)
  * en\_US (English - United States)
  * es (Spanish)
  * et (Estonian)
  * eu (Basque)
  * fa (Persian)
  * fi (Finnish)
  * fil (Filipino)
  * fr (French)
  * gl (Galician)
  * gu (Gujarati)
  * hi (Hindi)
  * hr (Croatian)
  * hu (Hungarian)
  * id (Indonesian)
  * is (Icelandic)
  * it (Italian)
  * iw (Hebrew)
  * ja (Japanese)
  * kn (Kannada)
  * ko (Korean)
  * lt (Lithuanian)
  * lv (Latvian)
  * ml (Malayalam)
  * mr (Marathi)
  * ms (Malay)
  * nl (Dutch)
  * no (Norwegian)
  * pl (Polish)
  * pt\_BR (Portuguese - Brazil)
  * pt\_PT (Portuguese - Portugal)
  * ro (Romanian)
  * ru (Russian)
  * sk (Slovak)
  * sl (Slovenian)
  * sr (Serbian)
  * sv (Swedish)
  * sw (Swahili)
  * ta (Tamil)
  * te (Telugu)
  * th (Thai)
  * tr (Turkish)
  * uk (Ukrainian)
  * ur (Urdu)
  * vi (Vietnamese)
  * zh\_CN (Chinese - China)
  * zh\_TW (Chinese - Taiwan)
  * zu (Zulu)

## Custom Translations ##
You can still make custom translations for languages outside of the supported languages. All translatable strings are placed within the ` {% trans %} ` ` {% endtrans %} ` beginning and end tags. These tags are embedded within the HTML templates, which are located in the `views/` directory.

For example, the following code:
```
{% trans %} Unit {% endtrans %}
```
indicates that the text “Unit” can be translated.

If you change the default text within these tags or add new translatable strings of your own, you must update the `.po` file in

`modules/i18n/resources/locale/<language>/LC_MESSAGES`

Then run `pybabel update`.

## Course Builder Translation Console ##
The translation console is an environment in which you see, mark, and translate your course content. Invite a translator or multiple translators to translate your content. They can see all translatable content side by side with the the base (original) language. The special translator permissions make sure that the translators can't edit other parts of your course. Course Builder's Translation Console allows a single environment for both the course authors and translators to work, increasing efficiency and transparency.

<img src='http://wiki.course-builder.googlecode.com/git/images/dashboard-i18n.png' />

You as the Course Author will dictate into which languages the course are translated. In the [Dashboard > Settings > I18N](Dashboard#Settings.md), click **Edit Settings** and add extra locales (languages). Once your locales are chosen, the **Dashboard > I18N** page will add columns for each of the extra locales you created.

You must give translators permission to sign into Course Builder as translators. In **Dashboard > Roles**, click **Add Roles**. Add the Google emails of your translators and select any permission you wish.

Under the the base locale, uncheck content sections you don't want translated. When you add translators, they will only see the I18N dashboard so you do not have to worry that they will edit or add unwanted content outside the scope of translation. The translators click the pencil icon and translate the content, with the base content on the left with the translation field on the right.


