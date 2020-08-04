---
title: Today I Read
categories: TIR
tags: pg, dev
layout: post
---

## [PostgreSQL Locking Revealed](http://blog.nordeus.com/dev-ops/postgresql-locking-revealed.htm)

### Notes
- There are 3 locking mechanisms: table-level, row-level and advisory locks.
- Table and row level locks can be explicit or implicit. Advisory locks are mainly explicit.
- Most of the table-level locks are acquired by built-in SQL commands, but they can also be acquired explicitly with the LOCK command.
- Examples of table-level locks:
  - SELECT acquires ACCESS SHARE
  - UPDATE, INSERT and DELETE acquire ROW EXCLUSIVE
- The most important info for every mode is the list of modes which are in conflict with each other. Two transactions can't hold locks on conflicting modes on the same table at the same time.
-  When some lock mode is acquired it is held until end of transaction.
- In Postgres 9.3 and up there are four types of row-level locks.
- Postgres provides a means for creating locks that have application-defined meanings. These are called advisory locks, because the system does not enforce their use — it is up to the application to use them correctly.
- The article provides a view and examples for testing how different queries impact locking.
- Once a deadlock happens in Postgres, it will clear it by aborting one of the transactions involved in deadlock. Exactly which transaction will be aborted is difficult to predict and should not be relied upon.

### Thoughts
Overall, I'm still lacking intuition about how locking works and how to avoid common issues. I need to dig in deeper with some specific examples.
