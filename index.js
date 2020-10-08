const express = require('express')

const app = express()

app.use(express.json())

const koders = [
  {
    id: 1,
    name: 'Mauro'
  },
  {
    id: 2,
    name: 'Axel'
  },
  {
    id: 3,
    name: 'Haro'
  }
]

app.get('/koders', (request, response) => {
  response.json({
    success: true,
    data: {
      koders: koders
    }
  })
})

app.post('/koders', (request, response) => {
  console.log(request.body)
  const id = koders.length + 1 // práctica de tarea
  const name = request.body.name
  koders.push({
    id: id,
    name: name
  })
  response.json(request.body)
})

app.listen(8080, () => {
  console.log('server is ready in port 8080')
})

/* PRÁCTICA
    > Ocupar el json de la petición para agregar (.push) un nuevo koder al array de koders
    > Comprobar con un get que el koder fue agregado
*/
