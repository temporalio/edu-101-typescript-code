# Exercise 3: Farewell Workflow
During this exercise, you will create an Activity function,
register it with the Worker, and modify a Workflow to execute it.

Before continuing, kill any Worker instances still running from any
previous exercises (you can do this by pressing Ctrl-C in the terminals 
where they are running).

As with other exercises, you should make your changes in the `practice` 
directory. Look for "TODO" comments, which will provide hints about what
you'll need to change. If you get stuck and need additional hints, or 
if you want to check your work, look at the completed example in the
`solution` directory.   

## Part A: Write an Activity Function
The `activities.ts` file contains a function (`getSpanishGreeting`) that uses a microservice to get a customized greeting in Spanish.

1. Open the `activities.ts` file (located in the `practice/src` subdirectory) in the editor
1. Create a new Activity that will get a custom farewell message from the microservice.
    1. Copy the `getSpanishGreeting` function
    1. Rename the new function (use any valid name you like)
    1. Change the path in the URL from `get-spanish-greeting` to  `get-spanish-farewell`
    1. Save your changes to this file

## Part B: Modify the Workflow to Execute Your New Activity
1. Open the `workflows.ts` file (located in the `practice/src` subdirectory) in the editor
1. Add your new Activity to the list of Activities that will use the Activity options below (hint: you'll use the name you used for the new function in the first step).
1. Look for the TODO message, uncomment the line below it, and then change that line to execute the Activity function you created
1. Save your changes to this file

## Part C: Start the Microservice and Run the Workflow
All commands below must be run from the `practice` subdirectory.

1. Install your dependencies with `npm install` in a terminal
1. Start the microservice by running `npm run service.watch`
1. In another terminal, start your Worker by running `npm run worker.watch`
1. In a third terminal, change into the `exercises/farewell-workflow/practice` subdirectory and execute your Workflow by running `npm run greeting`

If there is time remaining, experiment with Activity failures and retries 
by stopping the microservice (press Ctrl-C in its terminal) and re-running 
the Workflow. Look at the Web UI to see the status of the Workflow and its
Activities. After a few seconds, restart the microservice by running the
same command used to start it earlier. You should find that the Workflow
will now complete successfully following the next Activity retry.

## This is the end of the exercise.