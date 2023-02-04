# Service Workflow Demo

This demo shows an Activity that invokes a translation microservice, accessible via HTTP, to provide a Spanish greeting for the specified name.

Before continuing, kill all Worker instances still running from previous exercises.

### Install the Project Dependencies

Install the Node.js dependenices with the following command:

```command
$ npm install
```

### Run the Workflow

Since this Workflow depends on the translation microservice, start that
first by running this command in a terminal window:

```
$ npm run dev-server
```

Next, use a separate terminal window to start the Worker:

```
$ npm run start.watch
```

Finally, use another terminal window to start the Workflows. You can change the name passed to the greeting in the `src/clients/greeting.ts` file and in farewell in the `src/clients/farewell.ts` file.

To start the `greeting` workflow, run the command:

```command
$ npm run greeting
```

To start the `greeting` workflow, run the command:

```command
$ npm run farewell
```

#### This is the end of the demo
