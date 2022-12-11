# Exercise 1: Hello Workflow
During this exercise, you will
* Set up a new project using the Temporal Package Initializer 
* Review the business logic of the provided Workflow Definition to understand its behavior
* Modify the Worker initialization code to specify a task queue name
* Run the Worker initialization code to start the Worker process
* Execute the Workflow from the command line, specifying your name as input

You will create and make your changes to the code in the `practice` subdirectory. If you need a hint or want to verify your changes, look at the complete version 
in the `solution` subdirectory.

## Part A: Set up a new project using the Temporal package initializer 
1. Download the `hello-world` project using the command:

```
$ npx @temporalio/create@latest ./exercises/hello-workflow/practice
```

You will be prompted to answer a couple of questions. Respond in the following way: 

```
Which sample would you like to use?
> hello-world 
```

```
Would you like me to initialize a git repository for the project? 
N
```

## Part B: Review the Workflow Business Logic

1. Open the `activities.ts` file (located in the `practice/src` subdirectory) in the editor and reivew the business logic. 
2. Open the `workflows.ts` file (located in the `practice/src` subdirectory) in the editor and review the Activity option and return value of the Workflow. . 

## Part C: Change a Task Queue Name for the Worker

1. Open the `worker.ts` file (located in the `practice/src` subdirectory) in the editor
2. Change the task queue name to `greeting-tasks`
3. Save your changes
4. Repeat this process in the `client.ts` file 

## Part D: Start the Worker

1. Open a terminal window in the environment and change to the `practice/src` subdirectory for this exercise
2. Run the following command to start the Worker:

```
$ npm run start.watch
```

## Part E: Start the Workflow from the Command Line

1. Open another terminal window in the environment 
2. Run the following command:

```
$ tctl workflow start \
    --workflow_type greet \
    --taskqueue greeting-tasks \
    --workflow_id my-first-workflow 
```

Note that this command starts the Workflow, but it does not wait for it to complete or show the result.  

If you have time, continue with the optional part of the exercise below to see how to view the result using `tctl`.

## Part F (Optional): Display the Result
You can run the following command to display the result of a Workflow Execution: 


```
tctl workflow show --workflow_id my-first-workflow
```

It is also possible, and often more convenient, to view this information using the Web UI. You will have a chance to do this in the next exercise.


### This is the end of the exercise.





