<h1>Peer Review of Assignments</h1>
Peer review is a way for students to grade each other's finished work. The item to be peer-reviewed can be textual input, like a paragraph or essay, or multiple choice questions. Unlike activities and assessments, there is no concept of automatic scoring since the students themselves provide the scoring or feedback.

There are two parts to a peer review assignment: submission and review. A student submits an assignment to be peer reviewed and in turn reviews one or more assignments from peers. When you enable peer review, the student must complete the review(s) in order to complete the course.



A video is available explaining [peer review (7:38)](http://www.youtube.com/watch?v=5ERlbCXAkDg).

## Submission ##
Students know a particular assignment is peer reviewed from the course outline because there will always be an attached sub-heading called **Review peer assignments**. Of course, when you create the assignment you can also put "Peer Review" or some such language directly in the title of the assignment.

Students complete a peer review assignment like any activity or assessment. When the student is ready to submit answers, she clicks the **Submit Assignment** button. Students cannot alter or retract submitted assignments. They can see their submitted assignments by clicking on them from the course outline. If students answer questions and navigate away from the page without clicking the **Submit Assignment** button, answers will not be saved and they must start from the beginning of that assignment.

Once an assignment is submitted, it is placed in a pool with other submitted assignments. Assignments that have a smaller number of finished reviews have priority and are sent out for peer review ahead of those assignments with more finished reviews. More specifically, winners of tiebreakers are determined in the following priority (with the first being the highest priority):

  1. smaller number of finished reviews
  1. smaller number of reviews currently assigned to other students
  1. earlier submission time

## Reviews ##
After students submit assignments, they must review assignments by their peers. To do so, students can click **Review peer assignments** from the course outline or go to an assignment page and click **Go to the review dashboard** at the bottom.

Students must request assignments to review. To do so, they should click **Review a new assignment**. An anonymous peer's assignment appears. After or during grading, students can click **Save Draft**. This will not submit answers. Course Builder allows draft mode with the ability to request additional assignments to review in case students want to calibrate the grades they give. This may help students determine whether they have graded too harshly or easily on the first assignment compared to subsequent assignments.

![http://wiki.course-builder.googlecode.com/git/images/peer-review-review.png](http://wiki.course-builder.googlecode.com/git/images/peer-review-review.png)

Course authors specify an "expiration time" (Review Window Timeout in Course Builder), which is a time horizon in which the student must begin reviewing an assignment after receipt. If the student does not begin the review, that assignment will be available for others to review although it will still be assigned to the original reviewer. When students are ready to submit, they can click **Submit Review**. Only upon submission will students satisfy their review quota. Like submitting assignments, students cannot alter or retract reviews after submission. Students can see the status of their reviews by going to the review dashboard.

The course author will specify the minimum number of assignments a student must review to receive credit for the assignment. While reviewing an assignment, a student can request to review additional assignments, without submitting current ones under review. However, once the student has requested the minimum number of assignments specified by the course author, he must then submit all assignments before he can request any more.

Example: The course author specifies that students must review a minimun of five assignments to receive full credit. A student finishes her assignment and submits it. She goes to the review dashboard and requests an assignment to review. She reviews the first assignment and then saves it as a draft. She requests four more assignments. She must now submit, not just put assignments in draft mode, all five assignments before she can request a sixth assignment.

## Create peer review assignment ##
You add peer review assignments like you add [assessments](CreateAssessments.md). To create a new peer review assignment, go to **Dashboard > Create > Outline** and click **Add Assessment**.

![http://wiki.course-builder.googlecode.com/git/images/assessment-edit.png](http://wiki.course-builder.googlecode.com/git/images/assessment-edit.png)

In **Grading Method** dropdown, click "Peer review" to show the peer review specific information. Here are the peer review specific fields you must populate:

  * **Submission Due Date:** Indicates when the student must submit the assignment.
  * **Reviewer Feedback Form:** Add a form in which the reviewer can give feedback on an assignment. You can use the rich text editor instead of inputting HTML.
  * **Review Due Date:** The date and time that the reviewer must submit her review. You, the course author, must specify this as a time after the Submission Due Date. Otherwise, you will get an error when you try to save the page.
  * **Review Min Count:** The minimum number of reivews a student must review to get credit for the peer review assignment.
  * **Review Window Timeout:** The time horizon, in minutes, in which the student must begin reviewing an assignment after receipt. If the student does not begin the review, that assignment will be available for others to review although it will still be assigned to the original reviewer.

## Peer review dashboard ##
Course authors can see submitted assignments and reviews as well as delete reviews from [Dashboard > Settings > Peer Review](Dashboard#Peer_Review.md).

![http://wiki.course-builder.googlecode.com/git/images/dashboard-peer-review.png](http://wiki.course-builder.googlecode.com/git/images/dashboard-peer-review.png)

  * In the **Assignment Name** dropdown menu, select the peer review assignment you want to view.
  * Type the specific student's email address in the **Student email address:** field and click **Show Reviews Received**. You now have the particular student's submitted assignment as well as assignments received by her, if any. Students cannot see reviews in draft mode; only authors can see their reviews in draft mode.

### Assign and delete reviews ###
The course author may want to manually assign reviews in some cases. For example, an instructor may believe that a particular assignment merits review directly from one of the teacher's assistants. To manually assign a reviewer, add the reviewer's email in the **Add new reviewer:** field and click the **Add New Reviewer** button. Reviews assigned this way will not be time expired.

The course author may also want to delete a particular review. To do so, click the **Remove This Review** button to the right of the review in question. Note that deletion notifications are not sent to those reviewers whose reviews are deleted.