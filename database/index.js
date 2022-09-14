const port = 8080;
const server = require('./app')

server.listen(port, () => console.log(`App is running on ${port}`));