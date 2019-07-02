const videogames = [
    {image: `https://cdn-cf.gamivo.com/image_cover.jpg?f=44785&n=05573758049590405.jpg&h=45ceb7682d4872ef348f73217497389e`,
     title: 'Sekiro: Shadows Die Twice',
     review: 'Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on March 22, 2019. The game takes place in a fictionalised, magical version of the Sengoku period in Japan, and follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.',
     rating: '10/10',
     id: 1


    },
    {
        image: `https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg`,
        title: 'The Legend of Zelda Breath of the Wild',
        review: 'The Legend of Zelda: Breath of the Wild’s sheer freedom and sense of adventure is a remarkable achievement. Right from the start, the vast landscape of Hyrule is thrown completely open to you, and it constantly finds ways to pique your curiosity with mysterious landmarks, complex hidden puzzles, and enemy camps to raid for treasure and weapons.',
        rating: '10/10',
        id: 2
    },
    {
        image: `https://www.hrkgame.com/media/games/.thumbnails/codbo4_cover_SquUcnG.jpg/codbo4_cover_SquUcnG-460x215.jpg`,
        title: 'Call of Duty: Black Ops 4',
        review: "This game is awful, it's just a glorified DLC, literally a copy and paste with different maps, guns, and skins. Would not recommend to anyone.",
        rating: '0/10',
        id: 3
    }
]

let id = 4

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