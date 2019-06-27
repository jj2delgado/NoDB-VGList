const videogames = [
    {image: `https://news.xbox.com/en-us/wp-content/uploads/sekiro_launch_hero-hero.jpg`,
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
       let index = videogames.findIndex(videogame => videogame.id === +id)
       videogames[index] = {...videogames[index], ...updatedVideogame} 
       res.status(200).send(videogames)
    }

}