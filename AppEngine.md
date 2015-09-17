<h1>Work with Google App Engine</h1>

If you are unfamiliar with Google App Engine (GAE), but know something about cloud computing, read [What is Google App Engine?](https://developers.google.com/appengine/docs/whatisgoogleappengine) If you're completely new to cloud computing as well, a more user-friendly introduction to the cloud and GAE can be found in this [Introduction to Google App Engine](https://developers.google.com/academy/apis/cloud/appengine/intro/).

You do not need to be a GAE expert to work with Course Builder. There are just a few things you should be familiar with while developing your course. Much of this is discussed on other pages. We summarize it  here.

This page discusses using GAE as it relates to Course Builder. For information on working with it to deploy your course and to modify it after deployment, see [Deploy to Google App Engine for the First Time or Subsequent Deployments to Google App Engine](DeployAgain.md).

**Note:** Several of these pages refer to a "shell or command prompt". If you're unsure what that means, see [What's a "shell or command prompt"?](http://code.google.com/p/gcb-x-03141590/wiki/FAQ#What%27s_a_%22shell_or_command_prompt%22?)



## Important: Quotas and billing ##
The use of GAE for your course may incur some costs. Currently, each GAE application can consume a certain level of computing resources for free, controlled by a set of [limits](https://developers.google.com/appengine/docs/quotas). If you need resources above these free limits, you can switch to a paid app to set a daily resource budget.

It's difficult to predict in advance the costs for your course since it will depend on how much load you you put on GAE (see [Billing and Budgeting Resources](https://developers.google.com/appengine/docs/billing) and [Quotas](https://developers.google.com/appengine/docs/quotas) for details). It is likely that any significantly sized course _will_ incur costs. For example, a small course with a small number of student-GAE interactions may be perpetually on GAE's free quota. Remember that any customizations that you make may increase the load and therefore the GAE costs.


Remember that you can begin development and testing of your course at no charge, by using the downloaded development server (from the [Google App Engine SDK](https://code.google.com/p/course-builder/wiki/AppEngine#Download_and_install_App_Engine)) and the free quota initially provided by GAE for deployed applications. That free quota is fairly limited and is unlikely to support a sizable course enrollment.

Also note that you can control your cost by setting a [maximum daily budget](https://developers.google.com/appengine/docs/billing#Setting_a_Daily_Budget), which will cap your costs (and your quota) per day.  However, doing so may lead to your course becoming unavailable for the remainder of any day that your application exceeds its budget.

## Official GAE documentation ##

There's a lot of [official documentation](https://developers.google.com/appengine/docs/python/config/appconfig#Required_Elements) for GAE.

| [Ask questions in the forum](https://groups.google.com/forum/?fromgroups#!categories/course-builder-forum/customize-and-deploy-course-builder-code) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|