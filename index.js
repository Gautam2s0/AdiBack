const jsonServer = require('json-server')
const fs = require('fs')
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
const router = jsonServer.router(db)
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4500, () => {
  console.log('JSON Server is running')
})