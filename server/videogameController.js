const videogames = [
    {image: `https://cdn-cf.gamivo.com/image_cover.jpg?f=44785&n=05573758049590405.jpg&h=45ceb7682d4872ef348f73217497389e`,
     title: 'Sekiro: Shadows Die Twice',
     review: 'From the same creators of the Soulsborne series, comes this challenging title set in imperial Japan, this challenging game will push you to your limits',
     rating: 5,
     id: 1


    }
]

let id = 2

module.exports = {
    myVideoGames(req, res){
        res.status(200).send(videogames)
    },
    addVideoGame(req, res){
        let {image, title, review, rating} = req.body
        let newVideoGame = {
            image,
            title,
            review,
            rating,
            id
        }
        id++
        videogames.push(newVideoGame)
        res.status(200).send(videogames)
    },
    deleteVideoGame(req, res){
        let {id} = req.params
        let index = videogames.findIndex(videogame => videogame.id === +id)
        videogames.splice(index, 1)
        res.status(200).send(videogames)
    },
    editVideoGame(req, res){
       let {id} = req.params
       let {rating, review} = req.body
       let updatedVideogame = {
           rating,
           review
       }
       console.log(videogames)
       let index = videogames.findIndex(videogame => videogame.id === +id)
       videogames[index] = {...videogames[index], ...updatedVideogame} 
       console.log(videogames)
       res.status(200).send(videogames)
    }

}