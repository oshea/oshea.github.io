# Competencies 

We will use this list when when evaluating your performance for bonuses and promotions.

## Pragmatism

- Don't reinvent the wheel
- Green field work vs learning from what people have already done
- Quality is a question of requirements.
- Remember the Big Picture: Don't get so engrossed in the details that you forget to check what's happening around you.
- Live and die by the 80/20: 20% of the work will add 80% of the value.
	- 80% of effects come from 20% of causes and 80% of results come from 20% of effort.
	- Focus on high leverage and not just easy wins. High leverage is the amount of impact produced.
- Understand why are you working on a ticket and critically think about what
- Deliver incrementally

## Impact

- Product, business and team.
- Are you finding and choosing high priority project to work on
- Are you staying focused on the goal of your work and not doing anything that's not needed.
- Organizational impact and adding business value
- Code quality doesn’t matter if the product is shit
- User focused
- Understand product and engineering goals and how they relate to company objectives
- Understand how your tasks relate to your team’s product and engineering goals
- Pay attention the metrics the team cares about.
- Are you choosing the high value projects to work on?

## Speed

 Are you able to work quickly?
 Do you ship early and often.
 Break your projects into small, shippable chunks.
 Are you avoiding unnecessary product and technical requirements.
 Are you avoiding premature optimization and abstraction.
 Don't write test cases that aren't adding value.
 Deliver incrementally
 Find tools, processes, techniques and libraries that allow you to work faster.
 Invest time in things that make yourself and the team work faster.
 Find ways to get into flow. “A state of effortless concentration so deep that they lose their sense of time, of themselves, of their problems.”
When possible, preserve larger blocks of focused time in your schedule.
Limit the amount of Work in Progress. Cost of context switching is high.

## Ownership

Are you taking ownership of the quality of your tasks?

Are you taking ownership of the product, team, tools, processes, documentation and code?

When you see problems do you fix them?

Are you helping other engineers get better?

Don't Live with Broken Windows: Fix bad designs, wrong decisions, and poor code when you see them.

Be a Catalyst for Change: You can't force change on people. Instead, show them how the future might be and help them participate in creating it.

Participate in the hiring process.


## Technical skills

- Deliver simple, high-quality solutions for your work items
- Learn existing technologies used in your product so you can complete your tasks
- Are you taking time outside of work to get better at the languages, tools and libraries you work with?
- Are you taking time to learn
- Are you recommending new tech, conventions to make the team better
- Clean code that is easy to read and maintain
-

# How we work

Branch naming

## Pull Requests

Put screenshots in PRs

## JIRA and tracking your work

- Using Asana/Jira as a dumpster… keep it clean and tidy (3 months out or less)



Pair programming

Testing
- Tests should be a first class citizen (done in parallel or closely after a feature is released)
- PRs claiming a bug fix, should include a spec that proves the fix

Clarity before implementation starts
30% feedback

Push back on overly complicated designs and requirements. Always look for ways to cut scope and still address the business need.

Avoid long running project/branches and large PRs. Break up your work.

Bus factor should be > 1

MVPs and Experiments

Error management

Ask for help

When new decisions/conventions are made, document them (make this a living a document)

Onboarding
- Spend more time with senior engineers
- Pair program
- Lots of small wins

Hiring Process

## Metrics-driven
- Start rate
- Completion rate
- Job coverage
- Self-serve convertion rate
- Performance metrics (list these out)
- Number of open errors and overall error rates

# Conventions

## General

Fully spell out all model names (no abbreviations or synonyms) in JS, Ruby, CSS

Over abstracting for future features/use cases that we might not implement. Speculative generality. Simplicity Before Generality, Use Before Reuse. Simplicity through experience rather than generality through guesswork. Software components should be, first and foremost, designed for use and to fulfil that use well. AKA speculative generality (bad smell).

Eliminate Effects Between Unrelated Things: Design components that are self-contained. independent, and have a single, well-defined purpose.

Comments: In your implementation you should have comments in tricky, non-obvious, interesting, or important parts of your code.

Don't submit PRs with TODOs in your code.

Better logging, monitoring, and instrumentation (ELK stack for logging)

Be thoughtful when adding dependencies (both for bloat and security)

Don't be fancy. Use the obvious implementation that other engineers will understand. Use idioms common to the language/framework you are using.

Everyone’s code should generally look the same. Linting is how we enforce this.

Don’t hide error cases that need to be looked at. Empty objects are not the right tool for this job. If something is exceptional you should throw an exception.

Code smells

## Ruby/Rails

https://github.com/bbatsov/ruby-style-guide


Rubocop
- Consider adding new cops. Gitlab has some good example of this.

Don’t simply fix errors by using try(:) or &.

Move business logic out of models and controllers and into services
https://github.com/gitlabhq/gitlabhq/tree/master/app/services

Business logic/complicated queries in views; queries go in controller or presenter
Less business logic in views. Better use of presenters

Stop heavy use of model callbacks. If business logic needs to run after creating/updating a model, wrap it in a service.

Don't use controller concerns

Don't mix superadmin controller methods into admin controllers (put in superadmin scope)

Read good code.
- Gitlab
- Discourse
- https://github.com/tootsuite/mastodon

## Rspec

Move away from controller tests. Move to request specs.

anytime some external system or code is relying on a particular path structure we should have tests that protect against those changing. so maybe this also applies to paths that we hard-coded in JS, integration paths and other things like that.

avoid brittle view specs that check specific styling/rending of an element. Write tests to make sure states are correct and content is there.

http://www.betterspecs.org/

Request vs controller specs

Avoid capybara

## Postgres

Indexes, foreign keys, large data migrations

## Javascript

Javascript tests
Treat javascript development like a first class citizen (tests, browser support, performance)

## CSS

Limit variants of colors/themes in CSS... everything in _variables.scss

If you are creating custom CCS you better have a damn good reason for it
