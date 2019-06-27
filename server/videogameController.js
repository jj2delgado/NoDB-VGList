const videogames = [
    {image: 'Hello',
        


    }
]

let id = 1

module.exports = {
    myVideoGames(req, res){
        res.status(200).send(videogames)
    },
    addVideoGame(req, res){
        let {image, review, rating} = req.body
        let newVideoGame = {
            image: req.body.image,
            id,
            review: req.body.review,
            rating: req.body.rating
        }
        id++
        videogames.push(newVideoGame)
        res.status(200).send(videogames)
    },
    deleteVideoGame(req, res){
        //code here
    },
    editVideoGame(req, res){
       //code here 
    }

}