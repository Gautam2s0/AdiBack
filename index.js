const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(router)
server.listen(4500, () => {
  console.log('JSON Server is running')
})