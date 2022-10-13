# Question 1: (answer #2 is correct)
How are Workflows defined using Temporal?

1. By expressing your business logic in XML
2. By writing code in a general-purpose programming language, such as Go, Java, Python, or TypeScript
3. By using a no-code visual environment to create flowcharts
4. By expressing your business logic in JSON

**Feedback**
Temporal uses a Workflows-as-code approach, so you'll define Workflows
by writing code in a general-purpose programming language. This is the
same code executed at runtime, which means that you can use the same
tools you'd use to write, debug, and test any other application you'd
write in that same language.

# Question 2 (answer 4 is correct)
Which of the following is a Temporal Workflow allowed to contain?

1. Business logic that may take days, weeks, or longer to complete
2. Conditional statements
3. Cycles (steps that refer to previous steps)
4. All of the above

**Feedback:**
Temporal Workflows do not impose limits on the duration of your Workflow
Execution. Temporal Workflow Executions may last anywhere from a fraction
of a second to several years or more, or anywhere in between. Those
Workflows can use most of the constructs you use in any other application
code, such as conditional statements or looping. In contrast to some other
workflow systems, Temporal isn't based on a directed acyclic graph (DAG)
model, so Workflows are allowed to contain cycles, which gives you greater
flexibility for expressing your business logic.
