const PORT = process.env.PORT || 8001

const server = require('http').Server()

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})
