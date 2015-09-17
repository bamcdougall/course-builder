<h1>Student Progress Tracking</h1>



Course Builder’s student progress tracking feature provides visual indicators that make it easy for students to see which parts of a course they have attempted. Since not all questions have answers that are clearly right or wrong, this feature explicitly does not attempt to track correctness of the students’ answers.

## Visual Presentation ##
A course object is a part of a course that can be completed by the student; examples include units, lessons, activities, question groups and questions. Next to each course object, we will show a small circle. This circle will have one of three states: empty, half-full, and full. The states that each of these circles represent are depicted in the following table:

| **Image** | **Description** | **State** |
|:----------|:----------------|:----------|
| ![http://wiki.course-builder.googlecode.com/git/images/not_started.png](http://wiki.course-builder.googlecode.com/git/images/not_started.png) | Empty circle    | Not started |
| ![http://wiki.course-builder.googlecode.com/git/images/in_progress.png](http://wiki.course-builder.googlecode.com/git/images/in_progress.png) | Half-full circle | In progress |
| ![http://wiki.course-builder.googlecode.com/git/images/completed.png](http://wiki.course-builder.googlecode.com/git/images/completed.png) | Full circle     | Completed |

The visual indicators are language neutral. In order to satisfy accessibility requirements, they will have internationalized `alt` text that describes the state. This text is visible when a user’s mouse hovers over one of the images; it is also read by screen readers.

Note: There was consideration about having a progress bar with one of five different states: 0% complete, 25% complete, 50% complete, 75% complete and 100% complete. This was rejected for two reasons: user testing suggested that it was too complex, and the additional bucketing did not seem to provide a lot of added value to the student (since a student would mostly care about whether they had finished the activity or not, rather than the precise degree of completion).

## Content Hierarchy ##
Course objects are either composite or atomic. The diagram below shows the parent-child relationships between course objects:

![http://wiki.course-builder.googlecode.com/git/images/student-progress-hierarchy.png](http://wiki.course-builder.googlecode.com/git/images/student-progress-hierarchy.png)

Note that the arrows in the diagram represent one-to-many relationships; for example, a unit may have multiple lessons, and an activity may have multiple blocks.

Each content object is assigned a unique key based on its location within the content tree and the ids of its ancestors. For example, lesson 5 of unit 1 will be represented by the key ‘u.1.l.5’. The mapping from course objects to their key symbols is shown in the following table:

| **Course object** | **Key symbol** |
|:------------------|:---------------|
| Unit              | u              |
| Lesson            | l              |
| HTML              | h              |
| Activity          | a              |
| Assessment        | s              |
| Component         | c              |
| Block             | b              |

## Representing the State of Composite Objects ##
The completion status of a composite object depends directly on the completion status of its children, and is represented as either Not Started (0), In Progress (1) or Completed (2). The composite object is considered to be in state 0 if all its children are in state 0, and it is considered to be in state 2 if all its children are in state 2. In all other cases it is considered to be in state 1 (In Progress). Note that the only state transitions that can occur are from 0 to 1, and from 1 to 2.

When the state of a composite course object changes from 0 to 1, the update process calls the update method for the parent course object, which changes the parent’s state to 1 if it isn’t 1 already.

When the state of a composite course object changes from 1 to 2, the update process calls the update method for the parent course object, which checks whether all its children are completed, and, if so, changes the parent’s state to 2.

## Representing the State of Atomic Objects ##
The atomic objects in a course are:
  * components (particular instances of which are questions and question groups), and
  * blocks (which represent questions in old-style activities and assessments).

For each of these objects, we store the values for the corresponding keys as non-negative integers that represent the number of times each of these course objects was attempted by the student. A positive value corresponds to a Completed state, and a value of 0 corresponds to a Not Started state.

Note: There was consideration about storing only two possible values: 0 (to represent Not Started), and 2 (to represent Completed). We decided against this because it was straightforward to store the number of attempts instead and to deduce the object’s progress state from this number, and it seemed imprudent to unnecessarily throw away data about student attempts.

## Storing the Data ##
The data will be stored in a generic `StudentPropertyEntity` object that is persisted in the Google App Engine datastore. The object will be keyed by the student id and the name of the student property. For this feature, the corresponding property will be ‘linear-course-completion’. Someone may customize different completion models for nonlinear courses, and she may also want to associate other data with individual students.

## Scope ##
The primary logic for this is implemented as a standalone model class in `models/progress.py`. It will be referred to by the controller code in `controllers/lessons.py` and will refer to the `StudentPropertyEntity` model in `models/models.py`.

Courses will implement a `get_progress_tracker()` method that returns an instance of the progress tracking class. This means that the only access to the progress tracker is from the Course class, which ensures that the progress tracker always remains within the bounded context of a Course and is not accessible outside that context.

## Privacy Considerations ##
The `gcb_can_persist_activity_events` and `gcb_can_persist_page_events` settings in the **Admin** control panel that allows the owner of the Course Builder app to turn student progress tracking on or off, in accordance with the terms under which the app owner offers his/her course.
The progress tracking functionality collects and stores data on a per-student basis.

Note that the Course Builder open-source package can be downloaded and run by third parties; it is up to each of these third parties to decide on the data collection and privacy policies for their courses, and they may do whatever they choose with the student data they collect using this project.