# Service Workflow Demo

This demo shows an Activity that invokes a translation microservice, accessible via HTTP, to provide a Spanish greeting for the specified name.

Before continuing, kill all Worker instances still running from previous exercises.

### Install the Project Dependencies

Install the Node.js dependencies with the following command:

```command
$ npm install
```

### Run the Workflow

Since this Workflow depends on the translation microservice, start that
first by running this command in a terminal window:

```command
$ npm run service.watch
```

Next, use a separate terminal window to start the Worker:

```command
$ npm run worker.watch
```

Finally, use another terminal window to start the Workflows. You can change the name passed to the greeting Workflow in the `src/clients/greeting.ts` file and to the farewell Workflow in the `src/clients/farewell.ts` file.

To start the `greeting` Workflow, run the command:

```command
$ npm run greeting
```

To start the `farewell` Workflow, run the command:

```command
$ npm run farewell
```

#### This is the end of the demo
