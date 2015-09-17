# Integrating Drupal with Course Builder #

When Indiana University needed to create a specialized forum, registration, and profile management system for their [Information Visualization MOOC](http://ivmooc.cns.iu.edu/) (IVMOOC) on Course Builder, they turned to [Drupal](https://drupal.org/).


<img src='http://wiki.course-builder.googlecode.com/git/images/article-drupal-forum-overview.png' />

[Mike Widner](https://plus.google.com/117719446159427863667/), the Drupal developer on the project, used contributed Drupal 7 modules with his own custom created module. These modules powered the IVMOOC forums, client profiles, and student groups and were integrated with [Course Builder](http://code.google.com/p/course-builder/). The Janrain Engage module allowed multiple third party sign in options. However, since all students used Google accounts, third-party signons other than Google login were disabled. Drupal also has its own user accounts and login page (which Janrain Engage leverages) but having both signons could have confused students. So Mike created a small, custom module that hides the user registration, login, and password recovery options, thereby giving students a single login ID using their Google accounts.

Indiana University also wanted third party clients to engage with students to create projects. This was enabled through a special forum that allowed students and third party clients to interact with each other without restricting access to the IVMOOC team. The forums used Advanced Forums and several custom Views to allow students to sort forum topics by the number of votes each received. In order not to expose everyone's email addresses, which otherwise would be their default username, the Real Name module overwrote all username strings with the names students provided. Voting on topics was via the Vote Up/Down modules. Custom content types showed client profiles, group details, and student profiles.

<img src='http://wiki.course-builder.googlecode.com/git/images/article-drupal-client-projects.png' />

Organic Groups allowed students to self-organize into project groups. Custom behaviors based on Rules automatically created sub-forums for each new student group where members discussed their clients' projects. There is a View of student profiles that can be filtered by student competencies, skills, and group membership. All of the customizations that make up the core IVMOOC Forums functionality were packaged as Features for easy deployment.

## Drupal Modules Used ##
  * [Advanced Forum](https://drupal.org/project/Advanced_Forum)
  * [Features](https://drupal.org/project/features)
  * [Janrain Engage](https://drupal.org/project/rpx)
  * [Organic groups](https://drupal.org/project/og)
  * [Real Name](https://drupal.org/project/realname)
  * [Rules](https://drupal.org/project/rules)
  * [Views](https://drupal.org/project/views)
  * [Vote Up/Down](https://drupal.org/project/vote_up_down)

## Download source code ##
[User profiles with custom groups](https://groups.google.com/forum/?fromgroups#!category-topic/course-builder-forum/contributed-modules-and-code/tpBdgK04ey8)