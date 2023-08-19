const jsonServer = require('json-server');
const server = jsonServer.create();
const Memory = require('lowdb/adapters/Memory'); // Use the Memory adapter
const adapter = new Memory();
const db = jsonServer.createDatabase({ users: [] }, { adapter });
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 4500;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
