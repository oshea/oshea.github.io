# Reliable, Scalable and Maintainable Applications

**Reliability:** the system should continue to work correctly even in the face of adversity
**Scalability:** as the system grows there should be a reasonable way to deal with that growth
**Maintainability:** over time there will be many people working on the application and they should be able to work on productively

Systems that can cope with faults (a component deviating from the spec) are called fault-tolerant or resilient.

**TODO:** Research the Netflix Chaos Monkey

## Describing Load

Load is described using load parameters: requests per second, ratio of reads to writes in the database, number of simultaneously active users, hit rate of a cache or something else. Sometimes the average case is what matters, sometimes the bottleneck is dominated by a small number of extreme cases.

12,000 writes per second would be fairly easy but due to fan-out, the amount of additional work required per write (for each follower), Twitter faces scaling challenges.

Make conscious choices about when you want to do work: write time, read time or with background processes.

Distribution of followers per user is an example of an application specific key load parameter because it determines fan-out.

## Describing Performance

Once you've described load, you can investigate what happens when it increases:
* When you increase load but keep system resources the same
* When you increase load how much do you need to increase resources to keep performance unchanged

In batch processing you care about throughput. In online services you care about response time.

Response time is what the client sees. Latency is how long the request is waiting to be handled.

Performance metrics are not single numbers, they are a distributions of values you can measure. 

Mean is not a very good way to tell typical response times. It's better to use percentiles. Median is the 50th percentile (abbreviated as p50). Percentiles are used in SLOs and SLAs.

Queuing delays often account for a large part of response times at high percentiles.

**Head-of-line blocking:** a small number of slow requests can hold up subsequent requests.

When doing load testing, the load testing client must keep sending requests regardless independantly of response times.

## Approaches for coping with load

You will need to rethink the architecture after every order of magnitude load increase.

Good architectures involve a pragmatic mixture of scaling up and scaling out.

An elastic system good be useful if load is highly unpredictable.

There is no one-size-fits-all scalable architecture. Depends on characteristics of the application: 
* volume of reads
* volume of writes
* volume of data to store
* complexity of the data
* response time requirements
* access patterns
* or some combination of all of the above 

## Maintainability

The majority of the cost of software is not the initial development, its the ongoing maintenance: fixing bugs, keeping systems operational, investigating failures, apadting to new platforms, supporting new use cases, repaying tech debt or adding new features.

3 important design principles: operability, simplicity and evolvability.

### Operability: Making life easy for operations

Good operations teams do the following:
* Monitor system health and quickly restore to service
* Track down the cause of problems
* Keep software and platform up to date
* Keep tabs on how different systems affect each other
* Anticipate future problems
* Establish good practices and tools
* Perform complex maintenance tasks
* Maintain security
* Define process that make operations predictable
* Preserve the org's knowledge about the system

Things systems can to do to make operations easier:
* Visibility into runtime behavior and internals
* Support for automation and integration
* Avoid dependency on individual machines
* Good docs
* Good default behavior
* Self-healing behavior when appropriate
* Predictable behavior

### Simplicity: 