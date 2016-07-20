var express = require('express')
  , app     = express()
  , port    = process.env['PORT'] || 3000


app.use(express.bodyParser())


function home (req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.send('<html><body><h1>Web\'s Best Game Ever</h1><p><a href=\'/adventures\'>Go to Adventures</a></body></html>')
}

function adventureIndex(req, res) {
  res.setHeader('Content-type', 'text/html')
  res.send('<html><body><h1>YES !!</h1>You found <a href="/loot/1">Loot!</a></body></html>')
}

function createAdventure(req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.send('<html><body><h1>Are Ye Brave?</h1><form action=\'adventures\' method=\'POST\'><button type=\'submit\'>YES!</button></form></body></html>')
}

function showLoot(req, res) {
  var id = req.params.id
  res.setHeader('Content-type', 'text/html')
  res.send('<html><body><h1>Ogre Slaying Knife</h1><p>has +9 against orcs. It was id: ' + id + '</p></body></html>')
}

app.get('/', home)
app.post('/adventures', adventureIndex)
app.get('/adventures', createAdventure)
app.get('/loot/:id', showLoot)

app.listen(port)
console.log('Server running at http://127.0.0.1: ' + port + '/') 
