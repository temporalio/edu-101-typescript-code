# Exercise 1: Hello Workflow
During this exercise, you will
* Set up a new project using the Temporal Package Initializer
* Review the business logic of the provided Workflow Definition
* Modify the Worker initialization code to change the task queue name
* Run the Worker initialization code to start the Worker process
* Execute the Workflow from the command line

You will create and make your changes to the code in the `practice` subdirectory. If you need a hint or want to verify your changes, look at the complete version in the `solution` subdirectory.

## Setup

You'll need three terminal windows for this exercise.

1. In all terminals, change to the `exercises/hello-workflow/practice` directory.
2. In one terminal, run `npm install` to install dependencies.

## Part A: Review the Workflow Business Logic

1. Open the `workflows.ts` file (located in the `practice` subdirectory) in the editor.
2. Review the input parameters, business logic, and return value. 

## Part B: Change the Task Queue Name for the Worker

1. Open the `worker.ts` file (located in the `practice/src` subdirectory) in the editor
2. Change the task queue name to `greeting-tasks`
3. Save your changes
4. Repeat this process in the `client.ts` file 

## Part C: Start the Worker

1. Go to a terminal window in the environment and make sure you are in the `exercises/hello-workflow/practice/src` subdirectory for this exercise
2. Run the following command to start the Worker:

```command
npm run start.watch
```

## Part D: Start the Workflow from the Command Line

1. Go to another terminal window in the environment and make sure you are in the `exercises/hello-workflow/practice/src` subdirectory. 
2. Run the following command, replacing `Donna` with your own name. Be sure to retain the same quoting shown here when you run the command:

```
temporal workflow start \
    --type sayHelloWorkflow \
    --task-queue greeting-tasks \
    --workflow-id my-first-workflow \
    --input '"Donna"'
```

Notice the quoting for the input value, which has double quotes inside of single quotes. The input passed to the `temporal` command must be provided in JSON format and the quoting used here is necessary to pass the value through the shell and into the Workflow in the correct format.

Note that this command starts the Workflow, but it does not wait for
it to complete or show the result.

If you have time, continue with the optional part of the exercise below to see how to view the result using `temporal`.

### Using the CLI to Start a Workflow with Windows

The mix of single and double quotes we currently have pertains to UNIX-style shells. However, If you are running the Temporal CLI in Windows (such as Powershell), you will need to use Windows-style quote escaping like this:

```
temporal workflow start --type sayHelloWorkflow --task-queue greeting-tasks --workflow-id my-first-workflow --input '\"Donna\"'
```

This is a general Windows approach for handling quotes in parameters, not something specific to Temporal.

## Part E (Optional): Display the Result
You can run the following command to display the result of a Workflow Execution: 

```command
temporal workflow show --workflow-id <your_workflow_id>
```
This command shows you a lot of information. We will cover this output later in the course. 

It is also possible, and often more convenient, to view this information using the Web UI. You will have a chance to do this in the next exercise.

### This is the end of the exercise.