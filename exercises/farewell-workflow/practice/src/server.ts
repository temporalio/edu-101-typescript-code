import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

//   call this via HTTP GET with a URL like:
//   http://localhost:9999/get-spanish-greeting?name=Tina
//   http://localhost:9999/get-spanish-farewell?name=Tina

const app: Express = express();
const port = 9999; 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/get-spanish-greeting', (req: Request, res: Response) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400)
    res.send("Missing required 'name' parameter. Please add ?name=tina to the end of the url.")
  } else {
    var name = req.query.name
    res.status(200)
    res.send(`¡Hola, ${name}!`)
  }
});

app.use('/get-spanish-farwell', (req: Request, res: Response) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400)
    res.send("Missing required 'name' parameter. Please add ?name=tina to the end of the url.")
  } else {
    var name = req.query.name
    res.status(200)
    res.send(`¡Adios, ${name}!`)
  }
}) 

app.use(notFound)
app.use(errorHandler)

function notFound(req: Request, res: Response) {
  res.status(404)
  res.send({error: 'Not found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err: Error, req: Request, res: Response) {
  console.error('ERROR', err)
  res.status(500)
  res.send({error: err.message, url: req.originalUrl})
}

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, `Listening on http://localhost:${port}`))