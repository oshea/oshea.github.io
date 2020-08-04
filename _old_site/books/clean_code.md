Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin

Foreword

In software, 80% or more of what we do is quaintly called “maintenance”: the act of repair. Focus, presence of mind, and thinking.
5S philosophy:
Seiri, or organization. Knowing where things are.
Seiton, or tidiness. A place for everything, and everything in its place. A piece of code should be where you expect to find it, and if not, you should refactor to get it there.
Seiso, or cleaning. Keep the workplace free of hanging wires, grease, scraps, and waste.
Seiketsu, or standardization. The group agrees about how to keep the workplace clean.
Shutsuke, or discipline (self-discipline)


Focus on the small details, constantly refactor, have discipline when it comes to cleanliness and maintenance.

Introduction

The answer is craftsmanship. 2 parts to learning craftsmanship: knowledge and work. Know principles, patterns, practices, and heuristics that a craftsman knows, also grind that knowledge into your fingers.

Clean Code

If the discipline of requirements specification has taught us anything, it is that well-specified requirements are as formal as code and can act as executable tests of that code.

Wading - impeded by bad code.
LeBlanc’s law: Later equals never.
Add more staff, not versed in design of the system. Horrific pressure. Make more and more messes. Requirements changed, schedules. Stupid managers, intolerant customers, useless marketing types. We are unprofessional.

They may defend the schedule and requirements with passion but that’s their job. It’s your job to defend the code with equal passion. The only way to make the deadline -- the only way to go fast -- is to keep the code as clean as possible at all times. Being able to recognize clean code from dirty code does not mean that we know how to write clean code. “Code-sense”. Elegant and efficient. Straightforward to make it hard for bugs to hide. Dependencies minimal to ease maintenance. Error handling complete, performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations.

A building with broken windows looks like nobody cares about it. So other people stop caring. They allow more windows to become broken. Eventually they actively break them. Error handling should be complete. This goes to the discipline of paying attention to details. Clean code does one thing well. Clean code is focused. Simple and direct. Reads like well-written prose. Never obscures the designer’s intent but rather is full of crisp abstractions and straightforward lines of control. Grady takes a readability perspective.

Clean code can be read and enhanced by a developer other than its original author. It has unit and acceptance tests, meaningful names, provides one way rather than many ways for doing one thing. It has minimal dependencies, which are explicitly defined, and provides a clear and minimal API. Clean code makes it easy for others to enhance it. Difference between code that’s easy to read and code that’s easy to change.

Dave ties cleanliness to tests! Minimal, literate. Clean code always looks like it was written by someone who cares. There is nothing obvious that you can do to make it better. All of those things were thought about by the code’s author, and if you try to imagine improvements, you’re led back to where you are, sitting in appreciation of the code someone left for you.

Runs all the tests, contains no duplication, expresses all the design ideas that are in the system, minimizes the number of entities such as classes, methods, functions, and the like. Focus mostly on duplication. Expressiveness to me includes meaningful names, and I am likely to change the names of things several times before I settle in. Also look at whether an object or method is doing more than one thing. Always use the Extract Method refactoring on it, resulting in one method that says more clearly what it does, and some submethods saying how it is done. Reduced duplication, high expressiveness, and early building of simple abstractions.

You know you are working on clean code when each routine you read turns out to be pretty much what you expected. You can call it beautiful code when the code also makes it look like the language was made for the problem.

They are our school of thought about clean code. None of these different schools is absolutely right. Yet within a particular school we act as though the teachings and techniques are right. Of course there’s no way to write code without reading it, so making it easier to read actually makes it easier to write. It’s not enough to write the code well. The code has to be kept clean over time. Leave the campground cleaner than you found it. If we all checked in our code a little cleaner than when we checked it out, the code simply couldn’t rot. The cleanup doesn’t have to be something big. Code simply got better as time passed. Isn’t continuous improvement an intrinsic part of professionalism?

Agile Software Development: Principles, Patterns, and Practices (PPP). Single Responsibility Principle, Open Closed Principle, Dependency Inversion Principle.

II. Meaningful Names

It is easy to say that names should reveal intent. Change them when you find better ones. Name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name doesn’t reveal its intent. Programmers must avoid leaving false clues that obscure the meaning of code. We should avoid words whose entrenched meanings vary from our intended meaning.

Beware of using names which vary in small ways. Programmers create problems for themselves when they write code solely to satisfy a compiler or interpreter. It is not sufficient to add number series or noise words. Noise words are another meaningless distinction. Imagine that you have  Product class. If you have another called ProductInfo or ProductData, you have made the names different without making them mean anything different. Info and Data are indistinct noise words like a, an, and the.

Use Pronounceable Names
Use Searchable Names
Single-letter names and numeric constants have a particular problem in that they are not easy to locate across a body of text. My personal preference is that single-letter names can ONLY be used as local variables inside short methods. The length of a name should correspond to the size of its scope.

Clarity is king. Professionals use their powers for good and write code that others can understand. Classes and objects should have noun or noun phrase names like Customer, WikiPage, Account, and AddressParser. Avoid words like Manager, Processor, Data, or Info in the name of a class. A class name should not be a verb. Methods should have verb or verb phrase names like postPayment, deletePage, or save. Accessors, mutators, and predicates should be named for their value and prefixed with get, set, and is according to the javabean standard.

Pick one word for one abstract concept and stick with it. For instance, it’s confusing to have fetch, retrieve, and get as equivalent methods of different classes. Choosing technical names for those things is usually the most appropriate course.  Separating solution and problem domain concepts is part of the job of a good programmer and designer.

There are a few names which are meaningful in and of themselves -- most are not. Instead, you need to place names in context for your reader by enclosing them in well-named classes, functions, or namespaces. Shorter names are generally better than longer ones, so long as they are clear. The hardest thing about choosing good names is that it requires good descriptive skills and a shared cultural background. People are also afraid of renaming things for fear. We do not share that fear.

III. Functions

The first rule of functions is that they should be small. The 2nd rule of functions is that they should be smaller than that. Functions should hardly ever be 20 lines long. This implies that blocks within if, else, while statements etc. should be 1 line long. It also adds documentary value because the function called within the block can have a nicely descriptive name. Indent level of a function should not be greater than 1 or 2.

FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY. Simply restates the code without changing the level of abstraction. So, another way to know that a function is doing more than “one thing” is if you can extract another function from it with a name that is not merely a restatement of its implementation [G34]. In order to make sure our functions are doing “one thing,” we need to make sure that the statements within our function are all at the same level of abstraction.

We want the code to read like a top-down narrative. We want every function to be followed by those at the next level of abstraction so that we can read the program, descending one level of abstraction at a time as we read down the list of functions. I call this The Step-down Rule. Which is describing the current level of abstraction and referencing subsequent TO paragraphs at the next level down.

Second, it very clearly does more than one thing. Third, it violates the Single Responsibility Principle (SRP) because there is more than one reason for it to change. Fourth, it violates the Open Closed Principle (OCP) because it must  change whenever new types are added.

You know you are working on clean code when each routine turns out to be pretty much what you expected. Don’t be afraid to make a name long. A long descriptive name is better than a short enigmatic name. Don’t be afraid to spend time choosing a name. Indeed, you should try several different names and read the code with each in place.

Choosing descriptive names will clarify the design of the module in your mind and help you to improve it. It is not at all uncommon that hunting for a good name results in a favorable restructuring of the code.

The  ideal number of arguments for a function is zero (niladic). Next comes one (monadic), followed closely by two (dyadic). Three arguments (triadic) should be avoided where possible. More than three (polyadic) requires very special justiﬁcation—and then shouldn’t be used anyway.

These two uses are what readers expect when they see a function. You should choose names that make the distinction clear, and always use the two forms in a consistent context. (See Command Query Separation below.) Flag arguments are ugly. Passing a boolean into a function is a truly terrible practice.

the two arguments in this case are ordered components of a single value! Whereas output-Stream and name have neither a natural cohesion, nor a natural ordering.

Dyads aren’t evil, and you will certainly have to write them. However, you should be aware  that they come at a cost and should take advantage of what mechanisms may be available to you to convert  them into monads. The issues of ordering, pausing, and ignoring are more than doubled.

Reducing  the  number  of  arguments  by  creating  objects  out  of  them  may  seem  like cheating,  but  it’s  not. Likely part of a concept that deserves a name of its own. They are equivalent to a single argument of type List.  Actually  dyadic.

Choosing good names for a function can go a long way toward explaining the intent of the  function  and  the  order  and  intent  of  the  arguments.  In  the  case  of  a  monad,  the function  and  argument  should  form  a  very  nice  verb/noun  pair. This last is an example of the keyword form of a function name. Using this form we encode  the names of the arguments into the function name.  assertEquals -- assertExpectedEqualsActual(expected, actual)

Side effects are lies. Your function promises to do one thing, but it also does other hidden things.  Sometimes it will make unexpected changes to the variables of its own class. Sometimes it will make them to the parameters passed into the function or to system globals. In either case they are devious and damaging mistruths that often result in strange temporal couplings and order dependencies.

This side effect creates a temporal coupling if it is called out of order. Temporal couplings are confusing, especially when hidden as a side effect. checkPasswordAndInitializeSession

Anything that forces you to check the function signature is equivalent to a double-take. It’s a cognitive break and should be avoided. If your function must change the state of something, have it change the state of its owning object. Functions  should  either  do  something  or  answer  something,  but  not  both.  Either  your function should change the state of an object, or it should return some information about that  object.

Returning error codes from command functions is a subtle violation of command query separation. It promotes commands being used as expressions in the predicates of if statements. On the other hand, if you use exceptions instead of returned error codes, then the error processing code can be separated from the happy path code and can be simpliﬁed.

Functions should do one thing. Error handling is one thing. Thus, a function that handles errors should do nothing else. This implies (as in the example above) that if the keyword try exists  in a function, it should be the very  ﬁrst word in the function and that there should be nothing after the catch/finally blocks. Classes like this are a dependency magnet;many other classes must import and use them.

Duplication may be the root of all evil in software. All of Codd’s database normal forms serve to eliminate duplication in data.  It would appear that since the invention of the subroutine, innovations in software development have been an ongoing attempt to eliminate duplication from our source code.

Some programmers follow Edsger Dijkstra’s rules of structured programming. Every function, and every block within a function, should have one entry and one exit. There should only be one return statement in a function, no break or continue statements in a loop, and never, ever, any goto statements.  It’s only in larger functions that such rules provide significant benefit.
So if you keep your functions small, then the occasional multiple return, break, or continue statement does no harm and can sometimes even be more expressive than the single-entry, single-exit rule. On the other hand, goto only makes sense in large functions.

Writing software is like any other kind of writing. You get your thoughts down ﬁrst, then you massage it until it reads well.  When  I write functions, they come out long and complicated. But I also have a suite of unit tests that cover every one of those clumsy lines of code. Master programmers think of systems as stories to be told rather than programs to be written.

IV. Comments

Comments are, at best, a necessary evil. The  proper use of comments is to compensate for our failure  to express ourself in code. Note that I used the word failure. Only the code can truly tell you what it does. It is the only source of truly accurate information. One of the more common motivations for writing comments is bad code. In many cases it’s simply a matter of creating a function that says the same thing as the comment you want to write.


Explanation of Intent
Warning of Consequences
TODO comments - scan through them regularly and eliminate the ones you can.
Amplification
Bad Comments - most comments fall into this category.

These comments are so noisy that we learn to ignore them. As we read through code, our eyes simply skip over them. Eventually the comments begin to lie as the code around them changes.

Don’t Use a Comment When You Can Use a Function or a Variable
A banner is startling and obvious if you don’t see banners very often. So use them very sparingly, and only when the beneﬁt is signiﬁcant.

Few practices are as odious as commenting out code. Don’t do this!

V. Formatting

When people look under the hood, we want them to be impressed with the neatness, consistency,  and  attention  to  detail  that  they  perceive. Consistently apply those rules. Code formatting is important. Code  formatting  is  about  communication,  and communication is the professional developer’s ﬁrst order of business.

How big should a source file be? It  appears  to  be  possible  to  build  signiﬁcant  systems out of ﬁles that are typically 200 lines long, with an upper limit of 500. Although this should not be a hard and fast rule, it should be considered very desirable. Small ﬁles are usually easier to understand than large ﬁles are.

The Newspaper Metaphor
 At the top you expect a headline that will tell you what the story is about and allows you to decide whether it is something you want to read. The ﬁrst paragraph gives you a synopsis of the whole story, hiding all the details while giving you the broad-brush concepts. As you continue downward, the details increase until you have all the dates, names, quotes, claims, and other minutia. We would like a source file to be like a newspaper article.

Detail should increase as we move downward, until at the end we ﬁnd the lowest level functions and details in the source ﬁle. Each group of lines represents a complete thought. Those thoughts should be separated from each other with blank lines. Each blank line is a visual cue that identiﬁes a new and separate concept. As you scan down the listing, your eye is drawn to the ﬁrst line that follows a blank line.

Vertical density implies close association. So lines of code that are tightly related should appear vertically dense. Concepts that are closely related should be kept vertically close to each other [G10]. Clearly this rule doesn’t work for concepts that belong in separate ﬁles. But then closely related concepts should not be separated into different ﬁles unless you have a very good reason.  Vertical separation should be a measure of how important each is to the understandability of the other. We want to avoid forcing our readers to hop around through our source ﬁles and classes.

Variables should be declared as close to their usage as possible. Instance variables, on the other hand, should be declared at the top of the class. If one function calls another, they should be vertically  close, and the caller should be above the callee, if at all possible. Keeping constants at the appropriate level. That would have hidden a well-known and expected constant in an inappropriately low-level function.

Conceptual Afﬁnity. Certain  bits of code want to  be near other bits. They have a certain conceptual  afﬁnity. The stronger that afﬁnity, the less  vertical  distance there should be between them. As we have seen, this afﬁnity might be based on a direct dependence, or a function using a variable. But there are other possible causes of afﬁnity. Afﬁnity might be caused because a group of functions perform a similar operation.

In general we want function call dependencies to point in the downward direction. That is, a function that is called should be below a function that does the calling. The old Hollerith limit of 80 is a bit arbitrary, and I’m not opposed to lines edging out to 100 or even 120. You should never have to scroll to the right. Limit at 120.

We use horizontal white space to associate things that are strongly related and disassociate things that are more weakly related. I continued to try to line up all the variable names in a set of declarations. I have found, however, that this kind of alignment is not useful.

The team rules.

VI. Objects & Data Structures

There is a reason that we keep our variables private. We don’t want anyone else to depend on them. We want to keep the freedom to change their type or implementation on a whim or an impulse. Why, then, do so many programmers automatically add getters and setters to their objects?

 The methods enforce an access policy. You can read the individual coordinates independently, but you must set the coordinates together as an atomic operation. The worst option is to blithely add getters and setters. Objects hide their data behind abstractions and expose functions that operate on that data. Data structures  expose their data and have no meaningful functions.

Procedural code (code using data structures) makes it easy to add new functions without changing the existing data structures. OO code, on the other hand, makes it easy to add new classes without changing existing functions.

Procedural code makes it hard to add new data structures because all the functions must change. OO code makes it hard to add new functions because all the classes must change.

Mature programmers know that the idea that everything is an object is a myth. Sometimes you really do want simple data structures with procedures operating on them.

Heuristic - Law of Demeter: a module should not know about the innards of the objects it manipulates. As we saw in the last section, objects hide  their data and expose operations. This means that an object should not expose its internal structure through accessors because to do so is to expose, rather than to hide, its internal structure.  Method f of a class C should only call the methods of these: C; an object created by f; An object passed as an argument to f; An object held in an instance variable of C. The  method should not invoke  methods on objects that are returned  by any of the allowed functions. In other words, talk to friends, not to strangers. The following code appears to violate the Law of Demeter.

This kind of code is often called a train wreck because it looks like a bunch of coupled train cars. Chains of calls like this are generally considered to be sloppy style and should be avoided [G36]. It is usually best to split them up as follows:
Options opts = ctxt.getOptions();
File scratchDir = opts.getScratchDir();
final String outputDir = scratchDir.getAbsolutePath();

That’s a lot of knowledge for  one function to know. The calling function knows how to navigate through a lot of different objects. Whether this is a violation of Demeter depends on whether or not ctxt, Options, and ScratchDir are objects or data structures. If they are objects, then their internal structure should be hidden rather than exposed, and so knowledge of their innards is a clear violation of the Law of Demeter. On the other hand, if ctxt, Options, and ScratchDir are just data structures with no behavior, then they naturally expose their internal structure, and so Demeter does not apply.

Unfortunate hybrid structures that are half object and half data structure. They have functions that do signiﬁcant things, and they also have either public variables or public accessors and mutators that, for all intents and purposes, make the private variables public, tempting other external functions to use those variables the way a procedural program would use a data structure.

What  if ctxt, options,  and scratchDir are  objects with real behavior? Then, because objects  are supposed to hide their internal  structure,  we should not be able to navigate through them. How then would we get the absolute path of the scratch directory?

If ctxt is an object, we should be telling it to do something; we should not be asking it about its internals. The admixture of different levels of detail is a bit troubling. That seems like a reasonable thing for an object to do! This allows ctxt to hide its internals and prevents the current function from having to violate the Law of Demeter by navigating through objects it shouldn’t know about.

The quintessential form of a data structure is a class with public variables and no functions. This is sometimes called a data transfer object, or DTO. DTOs are very useful structures, especially when communicating with databases. Active Records are special forms of DTOs. Unfortunately we often ﬁnd that developers try to treat these data structures as though they were objects by putting business rule methods in them. Treat the Active Record as a data structure and to create separate objects that contain the business rules and that hide their internal data.

Objects expose behavior and hide data. This makes it easy to add new kinds of objects without changing existing behaviors. It also makes it hard to add new behaviors to existing objects. Data structures expose data and have no signiﬁcant behavior. This makes it easy to add new behaviors to existing data structures but makes it hard to add new data structures to existing functions. Good  software developers understand these issues without prejudice and choose the approach that is best for the job at hand.

VII. Error Handling

Input can be abnormal and devices can fail. If error handling obscures logic, it’s wrong.

Use Exceptions Rather Than Return Codes
The code is better because two concerns that were tangled, the algorithm for device shutdown and error handling,  are now separated.
Write Your Try-Catch-Finally Statement First
Define a scope. Stating that execution can abort at any point and then resume at the catch.
Try to write tests that force exceptions, and then add behavior to your handler to satisfy your tests.

Encapsulation is broken because all functions in the path of a throw must know about details of that low-level exception. Handle errors at a distance. But in general application development the dependency costs outweigh the beneﬁts. Create informative error messages and pass them along with your exceptions.

Often a single exception class is ﬁne for a particular area of code. Process  of  doing  this  pushes  error  detection to  the  edges  of  your  program. This  is called the SPECIAL  CASE  PATTERN. When you do, the client code doesn’t have to deal with exceptional behavior. That behavior is encapsulated in the special case object.

I can’t begin to count the number of applications I’ve seen in which nearly every other line was a check for null. When we return  null,  we are essentially creating work for ourselves and foisting problems upon our callers.

 The problem is that it has too many. If you are tempted to return null from a method, consider throwing an exception or returning a SPECIAL CASE object instead. If you are calling a null-returning method from a third-party API, consider wrapping that method with a method that either throws an exception or returns a special case object.

Passing null into methods is worse. Clean code is readable, but it must also be robust. These are not conﬂicting goals. We can write robust clean code if we see error handling as a separate concern, something that is viewable independently of our main logic. To the degree that we are able to do that, we can reason about it independently, and we can make great strides in the maintainability of our code.

VIII. Boundaries

We seldom control all the software in our systems. Somehow we must cleanly integrate this foreign code. Providers  of third-party  packages and frameworks strive for broad applicability so they can work in many environments and appeal to a wide audience. Users, on the other hand, want an interface that is focused on their particular needs. This tension can cause problems at the boundaries of our systems.

The interface at the boundary (Map) is hidden. It is able to evolve with very little impact on the rest of the application. Tailored and constrained to meet the needs of the application. It results in code that is easier to understand and harder to misuse. The Sensors class can enforce design and business rules.

Rather, we are  advising you not to pass Maps  (or any other interface  at a boundary)  around your system. If you use a boundary interface like Map, keep it inside the class, or close family of classes,  where it is used. Avoid returning  it from, or accepting it as an argument to, public APIs.

Suppose it is not clear how to use our third-party library. We might spend a day or two (or more) reading the documentation and deciding how we are going to use it. Then we might write our code to use the third-party code and see whether it does what we think. We would not be surprised to ﬁnd ourselves bogged down in long debugging sessions trying to ﬁgure out whether the bugs we are experiencing are in our code or theirs.

We could write some tests to explore our understanding of the 3rd-party code. (Learning tests.) The tests focus on what we want out of the API.
Clean boundary should be supported by a set of outbound tests that exercise the interface the same way the production code does. These boundary tests ease the migration.

Using Code That Does Not Yet Exist
We had a pretty good idea of where our world ended and the new world began. As we worked,  we sometimes bumped up against this boundary. Our work made us aware of what we wanted the boundary interface to be.

The ADAPTER encapsulated the interaction with the API and provides a single place to change when the API evolves. This design also gives us a very convenient seam in the code for testing. The Adapter pattern.

Interesting  things happen at boundaries. Change is one of those things. Good software designs accommodate change without huge investments and rework. When we use code that is out of our control, special care must be taken to protect our investment and make sure future change is not too costly.

Code at the boundaries needs clear separation and tests that deﬁne expectations. We should avoid letting too much of our code know about the third-party particulars. It’s better to depend on something you control than on something you don’t control. Our code speaks to us better, promotes  internally  consistent usage across the boundary,  and has fewer maintenance points when the third-party code changes.

IX. Unit Tests

First Law You may not write production code until you have written a failing unit test.

Second Law You may not write more of a unit test than is sufﬁcient to fail, and not compiling is failing.

Third Law You may not write more production code than is sufﬁcient to pass the currently failing test.

The sheer bulk of those tests, which can rival the size of the production code itself, can present a daunting mgmt problem. You might decide that having dirty tests is better than having no tests. Having dirty tests is equivalent to, if not worse than, having no tests. Tests become viewed as an ever-increasing liability.

The sheer bulk of those tests, which can rival the size of the production code itself, can present a daunting management problem. If you have tests, you do not fear making changes to the code! So if your tests are dirty, then your ability to change your code is hampered, and you begin to lose the ability to improve the structure of that code.

What makes a clean test? Three things. Readability, readability, and readability.  More importantly,  this code is just loaded with details that interfere with the expressiveness of the test.

The BUILD-OPERATE-CHECK pattern

Even though this is close to a violation of the rule about mental mapping

That is the nature of the dual standard. But they never involve issues of cleanliness.

There is a school of thought that says that every test function in a JUnit test should have one and only one assert statement. This rule may seem draconian, but the advantage can be seen in Listing 9-5. Those tests come to a single conclusion that is quick and easy to understand.
Results in a lot of duplicate code.

We can eliminate the duplication by using the TEMPLATE METHOD pattern and putting the given/when parts in the base class, and the then parts in different derivatives. But this seems like too much mechanism for such a minor issue. In the end, I prefer the multiple asserts in Listing 9-2. I think the best thing we can say is that the number of asserts in a test ought to be minimized.

Single Concept per Test
Perhaps a better rule is that we want to test a single concept in each test function.   So probably the best rule is that you should minimize the number of asserts per concept and test just one concept per test function.

Fast - Tests should be fast. They should run quickly.
Independent - Tests should not depend on each other.
Repeatable - Tests should be repeatable in any environment.
Self-validating - The tests should have a boolean output.

Timely - The tests need to be written in a timely fashion. Unit tests should be written just before the production code that makes them pass. If you write tests after the production code, then you may ﬁnd the production code to be hard to test.

X. Classes

Following the standard Java convention, a class should begin with a list of variables. Public static constants, if any, should come ﬁrst. Then private static variables, followed by private instance variables. There is seldom a good reason to have a public variable.
Public functions should follow the list of variables. We like to put the private utilities called by a public function right after the public function itself. This follows the stepdown rule and helps the program read like a newspaper article.

We like to keep our variables and utility functions private, but we’re not fanatic about it.

Classes Should Be Small!
The ﬁrst rule of classes is that they should be small. The second rule of classes is that they should be smaller than that. Smaller is the primary rule. With functions we measured size by counting physical lines. With classes we use a different measure. We count responsibilities.

Despite its small number of methods, SuperDashboard has too many responsibilities. If we cannot derive a concise name for a class, then it’s likely too large. The more ambiguous the class name, the more likely it has too many responsibilities. Hint at unfortunate aggregation of responsibilities. 25 words, without using “if, and, or, but”

The Single Responsibility Principle (SRP) states that a class or module should have one, and only one, reason to change. This principle gives us both a deﬁnition of responsibility, and  a guidelines for class size. Classes should have one responsibility—one reason to change. SRP is one of the more important concept in OO design.

Too many of us think that we are done once the program works. We fail to switch to the other concern of organization and cleanliness.

At the same time, many developers fear that a large number of small, single-purpose classes makes it more difﬁcult to understand the bigger picture. They are concerned that they must navigate from class to class in order to ﬁgure out how a larger piece of work gets accomplished.

However, a system with many small classes has no more moving parts than a system with  a few large classes. There is just as much to learn  in the system with a few large classes. So the question is: Do you want your tools organized into toolboxes with many small drawers each containing well-deﬁned and well-labeled components? Or do you want a few drawers that you just toss everything into?

Every sizable system will contain a large amount of logic and complexity. The primary goal in managing such complexity is to organize it so that a developer knows where to  look to ﬁnd things and need only understand the directly affected complexity at any given time. In contrast, a system with larger, multipurpose classes always hampers us by insisting we wade through lots of things we don’t need to know right now.

To restate the former points for emphasis: We want our systems to be composed of many small classes, not a few large ones. Each small class encapsulates a single responsibility,  has a single reason to change, and collaborates with a few others to achieve the desired system behaviors.

Classes should have a small number of instance variables. Each of the methods of a class should manipulate one or more of those variables. In general the more variables a method manipulates the more cohesive that method is to its class. When cohesion is high, it means that the methods and variables of the class are co-dependent and hang together as a logical whole.

Proliferation of instance variables that are used by a subset of methods. When this happens, it almost always means that there is at least one other class trying to get out of the larger class.

Just  the act of breaking large functions into smaller functions causes a proliferation of classes. Consider a large function with many variables declared within it. Promoted those 4 variables to instance variables of the class.

Unfortunately, this also means that our classes lose cohesion because they accumulate more and more instance variables that exist solely to allow a few functions to share them.  When classes lose cohesion, split them!

Organizing for Change
Every  change subjects us to the risk that the remainder of the system no longer works as intended. In a clean system we organize our classes so as to reduce the risk of change. we’ll have to “open up” this class to make modiﬁcations. The problem with  opening a class is that it introduces risk. Any modiﬁcations to the class have the potential of breaking other code in the class. It must be fully retested.

We can spot this SRP violation from a simple organizational standpoint. However, the primary spur for taking action should be system change itself. But as soon as we find ourselves opening up a class, we should consider fixing our design.

 It supports the SRP. It also supports another key OO class design principle known as the Open-Closed Principle, or OCP: Classes should be open for extension but closed for modification. Our restructured Sql class is open to allow new functionality via subclassing, but we can make this change while keeping every other class closed. We simply drop our UpdateSql class in place.

We want to structure our systems so that we muck with as little as possible when we update them with new or changed features. In an ideal system, we incorporate new features by extending the system, not by making modiﬁcations to existing code.

Isolating from Change
If a system is decoupled enough to be tested in this way, it will also be more ﬂexible and promote more reuse. The lack of coupling means that the elements of our system are better isolated from each other and from change. This isolation makes it easier to understand each element of the system.

By minimizing coupling in this way, our classes adhere to another class design principle known as the Dependency Inversion Principle (DIP). In essence, the DIP says that our classes should depend upon abstractions, not on concrete details.

XI. Systems

“Complexity kills. It sucks the life out of developers, it makes products difﬁcult to plan, build, and test.”

Some of those people are responsible for the big picture, while others focus on the details. evolved appropriate levels of abstraction and mod- ularity that make it possible for individuals and the “components” they manage.

Separate Constructing a System from Using It
Consider that construction is a very different process from use.
 Software  systems should separate the startup process, when the application objects are constructed and the dependencies are “wired” together, from the runtime logic that takes over after startup.
The startup process is a concern that any application must address. (1st concern)
Separation of concerns - most important design techniques in our craft.
This is the LAZY INITIALIZATION/EVALUATION idiom

Having both of these responsibilities means that the method is doing more than one thing, so we are breaking the Single Responsibility Principle in a small way. Global setup strategy (if  there is one) is scattered across  the application, with little modularity and often signiﬁcant duplication.

ABSTRACT FACTORY

A powerful mechanism for separating construction from use is Dependency Injection (DI), the  application of Inversion of Control (IoC) to dependency management.  Moves secondary responsibilities from an object to other objects that are dedicated to the purpose, thereby supporting the Single Responsibility Principle.

 True Dependency Injection goes one step further. The class takes no direct steps to resolve its dependencies; it is completely passive.

LAZY-INITIALIZATION
LAZY-EVALUATION and similar optimizations.

It is a myth that we can get systems “right the first time.”  What about at the system level? Doesn’t the system architecture require preplanning?

Software systems are unique compared to physical systems. Their architectures can grow incrementally, if we maintain the proper separation of concerns.

Coupling to the heavyweight container, isolated unit testing is difficult.

In principle, you can reason about your persistence strategy in a modular, encapsulated way. Yet, in practice, you have to spread essentially the same code that implements the persistence strategy across many objects. We use the term cross-cutting concerns for concerns like these.
Fine-grained intersection of these domains.

Aspect-oriented programming (AOP) which is a general-purpose approach to restoring modularity for cross-cutting concerns. Modular constructs called aspects specify which points in the system should have their behavior modiﬁed in some consistent way to support a particular concern. This speciﬁcation is done using a succinct declarative or programmatic mechanism.

Power of separating concerns through aspect-like approaches. If you can write your application’s domain logic using POJOs, decoupled from any architecture concerns at the code level, then it is possible to truly test drive your architecture.
Big Design Up Front (BDUF)

 Done efﬁciently and ﬂexibly because the minimally coupled designs are appropriately simple at each level of abstraction and scope. A good API should largely disappearfrom view most of the time, so the team expends the majority of its creative efforts focused on the user sto- ries being implemented.

An optimal system architecture consists of modularized domains of concern, each of which is implemented with Plain Old Java (or other) Objects. The different domains are integrated together with minimally invasive Aspects or Aspect-like tools. This architecture can be test-driven, just like the code.

Modularity  and separation of concerns  make decentralized management and decision making possible. In a sufﬁciently large system, whether it is a city or a software project, no one person can make all the decisions.

Best to postpone decisions until the last possible moment. A premature decision is made with suboptimal knowledge. Whether  you are designing systems or individual modules, never forget to use the simplest thing that can possibly work.

XII. Emergence

4 rules of Simple Design
A design is “simple” if it follows these rules:
Runs all the tests
Contains no duplication
Expresses the intent of the programmer
 Minimizes the number of classes and methods
Rules are given in order of importance.

Fortunately, making our systems testable pushes us toward a design where our classes are small and single purpose. It’s just easier to test classes that conform to the SRP. Tight coupling makes it difficult to write tests. Primary OO goals of low coupling and high cohesion.

incrementally refactoring the code. For each few lines of code we add, we pause and reﬂect on the new design. Did we just degrade it? If so, we clean it up and run our tests to demonstrate that we haven’t broken anything.

Expressive
The majority of the cost of a software project is in long-term maintenance. As systems become more complex, they take more and more time for a developer to understand, and there is an ever greater opportunity for a misunderstanding. Good names, keeping functions and classes small, standard nomenclature. Design patterns about communication and expressiveness.

But the most important way to be expressive is to try. All too often we get our code working and then move on to the next problem without giving sufﬁcient thought to making that code easy for the next person to read.

Concepts as fundamental as elimination of duplication, code expressiveness, and the SRP - We might create too many tiny classes and methods. So this rule suggests that we also keep our function and class counts low.  Such dogma should be resisted and a more pragmatic approach adopted.
Although it’s important to keep class and function count low, it’s more important to have tests, eliminate duplication, and express yourself.

XIII. Concurrency

Discuss the need for concurrent programming.

Concurrency is a decoupling strategy. It helps us decouple what gets done from when it gets done. In single-threaded applications what and when are so strongly coupled that the state of the entire application can often be determined by looking at the stack backtrace.

Concurrency incurs some overhead
Correct concurrency is complex
Concurrency bugs aren’t usually repeatable
Concurrency often requires a fundamental change in design strategy

Single Responsibility Principle
Method/class/component should have a single reason to change. Keep your concurrency related code separate from other code.

The more places shared data can get updated, the more likely:
Forget to protect one or more
Difficult to determine the source of failures
Take data encapsulation to heart; severely limit the access of any data that may be shared.

Corollary: use copies of data

Each thread processes one client request, with all of its required data coming from an unshared source and stored as local variables. Attempt  to partition data into independent subsets than can be operated on by independent threads, possibly in different processors.

XIV. Successive Refinement

Notice that you can read this code from the top to the bottom without a lot of jumping around or looking ahead. To write clean code, you must first write dirty code and then clean it. So I stopped adding features and started refactoring.

One of the best ways to ruin a program is to make massive changes to its structure in the name of improvement. Some programs never recover from such “improvements.” The problem is that it’s very hard to get the program working the same way it worked before the “improvement.”

Use the discipline of Test-Driven Development (TDD). One of the central doctrines of this approach is to keep the system running at all times. In other words, using TDD, I am not allowed to make a change to the system that breaks that system. Every change I make must keep the system working as it worked before.

XV. JUnit Internals

XVI. Refactoring SerialDate

XVII. Smells & Heuristics

Comments
C1: Inappropriate Information
C2: Obsolete Comment
C3: Redundant Comment
C4: Poorly Written Comment
C5: Commented-Out Code

Environment
E1: Build Requires More Than One Step
E2: Tests Require More Than One Step

Functions
F1: Too Many Arguments
F2: Output Arguments
F3: Flag Arguments
F4: Dead Function


General
G1: Multiple Languages in One Source File
G2: Obvious Behavior Is Unimplemented
G3: Incorrect Behavior at the Boundaries
G4: Overridden Safeties
G5: Duplication
G6: Code at Wrong Level of Abstraction
G7: Base Classes Depending on Their Derivatives
G8: Too Much Information
G9: Dead Code
G10: Vertical Separation
G11: Inconsistency
G12: Clutter
G13: Artificial Coupling
G14: Feature Envy
G15: Selector Arguments
G16: Obscured Intent
G17: Misplaced Responsibility
G18: Inappropriate Static
G19: Use Explanatory Variables
G20: Function Names Should Say What They Do
G21: Understand the Algorithm
G22: Make Logical Dependencies Physical
G23: Prefer Polymorphism to If/Else or Switch/Case
G24: Follow Standard Conventions
G25: Replace Magic Numbers with Named Constants
G26: Be Precise
G27: Structure over Convention
G28: Encapsulate Conditionals
G29: Avoid Negative Conditionals
G30: Functions Should Do One Thing
G31: Hidden Temporal Couplings
G32: Don’t Be Arbitrary
G33: Encapsulate Boundary Conditions
G34: Functions should Descend Only One Level of Abstraction
G35: Keep Configurable Data at High Levels
G36: Avoid Transitive Navigation

Java
J1: Avoid Long Import Lists by Using Wildcards
J2: Don’t Inherit Constants
J3: Constants versus Enums

Names
N1: Choose Descriptive Names
N2: Choose Names at the Appropriate Level of Abstraction
N3: Use Standard Nomenclature Where Possible
N4: Unambiguous Names
N5: Use Long Names for Long Scopes
N6: Avoid Encodings
N7: Names Should Describe Side-Effects

Tests
T1: Insufficient Tests
T2: Use a Coverage Tool!
T3: Don’t Skip Trivial Tests
T4: An Ignored Test Is a Question about an Ambiguity
T5: Test Boundary Conditions
T6: Exhaustively Test Near Bugs
T7: Patterns of Failure Are Revealing
T8: Test Coverage Patterns Can Be Revealing
T0: Tests Should Be Fast
