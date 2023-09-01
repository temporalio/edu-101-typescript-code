# Service Workflow Demo

This demo shows an Activity that invokes a translation microservice, accessible via HTTP, to provide a Spanish greeting for the specified name.

Before continuing, kill all Worker instances still running from previous exercises.

### Install the Project Dependencies

Install the Node.js dependencies with the following command:

```command
npm install
```

### Run the Workflow

Since this Workflow depends on the translation microservice, start that
first by running this command in a terminal window:

```command
npm run service
```

Next, use a separate terminal window to start the Worker:

```command
npm run worker
```

Finally, use another terminal window to start the Workflow,
using the supplied code, specifying your name as input.

```command
npm run workflow Donna
```

#### This is the end of the demo
