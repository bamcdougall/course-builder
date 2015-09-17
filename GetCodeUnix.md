<h1>Run Course Builder</h1>

Open a terminal window, and change directory to the place where you
either unpacked the .zip file or checked out the Git repository.
There should be a directory in there named "coursebuilder".  Your
shell's working directory should be in there.

## 1. Decide on a name for your app ##

The file named `app.yaml` in this directory contains a number of
settings for your course.  The first entry in this file is the name
of the course.  You should edit this file to change the name to
something other than the default value of "mycourse".

This name should match the name of the AppEngine application you either
already have or will create to host the course.

## 2. Start the devleopment server ##

```
prompt> ./scripts/start_in_shell.sh -f -s
```

The first time you run this script, you will see a great deal of
output messages.  This is from CourseBuilder downloading and
installing a number of required files.  Some of these provide the
AppEngine runtime environment.  Others are library
files used by CourseBuilder itself.  The initial downloads should take
a few minutes.  Subsequent start-ups should be much quicker.

After the downloads, you will see status messages from the development
version of the web server.  When you start to see messages looking
like this

```
INFO     2015-03-03 19:39:31,761 dispatcher.py:183] Starting module "default" running at: http://0.0.0.0:8081
INFO     2015-03-03 19:39:31,767 admin_server.py:117] Starting admin server at: http://localhost:8000
INFO     2015-03-03 19:39:36,337 module.py:642] default: "GET /_ah/warmup HTTP/1.1" 302 -
```

then the server is up and ready to take requests.

The application will be available at http://localhost:8081
and the AppEngine developer admin site will be at http://localhost:8000