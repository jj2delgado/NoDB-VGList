require('dotenv').config()
const express = require('express')
const vgc = require('./videogameController')
const {port} = process.env//getting port value from .env file
const app = express()

app.use(express.json())//if I'm using body later

app.get('/api/videogames', vgc.myVideoGames)
app.post('/api/videogames', vgc.addVideoGame)
app.delete('/api/videogames/:id', vgc.deleteVideoGame)
app.put('/api/videogames/:id', vgc.editVideoGame)

app.listen(port, () => {
    console.log('Live on port', port)
})