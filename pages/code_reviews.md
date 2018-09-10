# Articles on Code Reviews

## [Building an Inclusive Code Review Culture](https://blog.plaid.com/building-an-inclusive-code-review-culture/)

* Significant impact on team culture because they are day-to-day activities
* Engineering values: Grow together
* 2 goals:
  * Learning and growth from everyone involved
  * Ship healthy code
* Use linters to scale writing code with style guides and best practices
* Compile and share code review best practices and recommendations with the team. Maintain a doc that the entire team can contribute to.

### Code Review Guidelines

* Goals: have the right mindset. Codebase health, correctness and learning.
* For authors:
  * Be respectful of the reviewers' time. Make sure it's ready for review. Run the  tests, do an initial review yourself, clean up errant debug statements, give good context in the description.
  * Carefully scope your PRs. Past a few 100 lines it's hard for reviewers to comprehend and provide a useful review.
  * Respond no matter what. They took time to review your work.
* For reviewers:
  * Be clear about what is opinion and what is fact.
  * Avoid focusing on nits. The are occasionally OK but not the goal of code reviews.
  * Look at the code as a whole and see how it fits into the larger system.
  * Have an eye out for correctness. Make sure that the proper tests are in place for any new code paths.
* For everyone:
  * Not all PRs are created with equal urgency. Be upfront about timelines.
  * Embrace the learning aspects of code review, for both authors and reviewers. Be willing to question why things are done a certain way but recognize when a discussion has gone too far.
  * Don't discuss major design or architecture decisions. That should have be covered in design docs.
  * After a few back-and-forths discussions should be take realtime.
* Implementation:
  * Code review onboarding session
  * People pick personal LGTM emojis.

## [Code Review Review is the Manager's Job](https://hecate.co/blog/code-review-review-is-the-managers-job)

* Andy Grove argues that "training is the manager’s job" because it’s the highest leverage activity a manager can do
* Pull requests is now the highest leverage point for improving an engineering team’s output.
* More than just quality control. Find defects in the maintainability of the codebase.
* One of the primary places where the team culture develops and where the team trains each other peer-to-peer.
* Given code review is such a high stakes process, how can any good leader afford to neglect it?
* Modern code reviews are about socialization, learning, and teaching.
* If your team doesn’t currently have much of a training mindset within code review practice your top priority as leader should be to foster it.
* Any manager responsible for the culture of an engineering group who has drawn a box around GitHub and said "this is an engineering space" and never visits is **derelict in the performance of their duty**.
* Step two is to develop your feedback patterns. Make sure you call out good reviews when you see them.
* 'praise in public, criticise in private' but don't leave bad behavior unchecked
* It’s important that the publicly viewable rewards and punishments for behaviour in code review align with the group’s values.
* Step three is to track the trends in your team. In my first management role I kept a weekly diary of team activity which included particularly good or bad pull requests I’d seen that week. Schedule time monthly or quarterly to look back at your records and get a qualitative sense of how your team’s process is evolving.







## [Code Reviews aren't for Catching Bugs](https://twitter.com/skamille/status/1032643608061640704)
