<h1>Open Source Contributions</h1>

We made Open Source contributions outside of Course Builder, including:

  * [edX Third-Party Authentication](https://github.com/edx/edx-platform/tree/master/common/djangoapps/third_party_auth)  A third-party authentication module to Open edX. With it, your users can sign in to your Open edX deployment with external identity providers like Google, LinkedIn, or University Single Sign-On (SSO) systems. The module is disabled by default, supplements rather than replaces first-party authentication, and was designed to be extensible and testable.

  * [Google App Engine XBlock Runtime](https://github.com/google/coursebuilder_xblock_module) A library that provides an XBlock runtime environment, which uses the Google App Engine datastore. [cbX](cbx.md) uses this library.

  * [Realtime Help Chat XBlock](https://github.com/google/realtime-help) The Realtime Help XBlock (together with a notification service) enables students to ask other students for help in realtime. Authors of edX courses can add this XBlock to a course page. When a student is stuck on a problem, he/she can type a question into this XBlock, which will then be broadcast to other students taking the course. The recipients of the broadcast can then join the original student’s chat room, and help him/her to address the problem.