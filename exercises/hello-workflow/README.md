# Exercise 1: Hello Workflow
During this exercise, you will
* Set up a new project using the Temporal Package Initializer
* Review the business logic of the provided Workflow Definition
* Modify the Worker initialization code to change the task queue name
* Run the Worker initialization code to start the Worker process
* Execute the Workflow from the command line

You will create and make your changes to the code in the `practice` subdirectory. If you need a hint or want to verify your changes, look at the complete version in the `solution` subdirectory.

## Part A: Set up a new project using the Temporal package initializer 
1. Download the `hello-world` project using the following command:

```
npx @temporalio/create@latest ./exercises/hello-workflow/practice
```

You will be prompted to answer a couple of questions. Respond in the following way: 

```
Need to install the following packages:
  @temporalio/create@1.5.2
Ok to proceed? (y)
y
```

```
Which sample would you like to use?
> hello-world 
```

```
Would you like me to initialize a git repository for the project? 
N
```

Once the project has been downloaded, you will see some suggestions for how to begin working with your Temporal Application.
 

## Part B: Review the Workflow Business Logic

1. Open the `practice/src/activities.ts` file in the editor and review the business logic. 
2. Open the `practice/src/workflows.ts` file in the editor and review the `greet` constant. Take special care to look at the Start-to-Close Timeout option. 


## Part C: Change the Task Queue Name for the Worker

1. Open the `worker.ts` file (located in the `practice/src` subdirectory) in the editor
2. Change the task queue name to `greeting-tasks`
3. Save your changes
4. Repeat this process in the `client.ts` file 

## Part D: Start the Worker

1. Go to a terminal window in the environment and change to the `exercises/hello-workflow/practice/src` subdirectory for this exercise
2. Run the following command to start the Worker:

```command
npm run start.watch
```

## Part E: Start the Workflow from the Command Line

1. Open another terminal window in the environment and change to the `exercises/hello-workflow/practice/src` subdirectory. 
2. Run the following command:

```command
npm run workflow
```

This command starts the Workflow, shows the Workflow's unique identifer, and prints the result of the `greeting` Activity. 


If you have time, continue with the optional part of the exercise below to see how to view the result using `temporal`.

## Part F (Optional): Display the Result
You can run the following command to display the result of a Workflow Execution: 

```command
temporal workflow show --workflow-id <your_workflow_id>
```
This command shows you a lot of information. We will cover this output later in the course. 

It is also possible, and often more convenient, to view this information using the Web UI. You will have a chance to do this in the next exercise.


### This is the end of the exercise.
