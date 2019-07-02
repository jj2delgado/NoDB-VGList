import React from 'react'
import Videogame from '../videogame/videogame'

export default function VideogameList(props){
    let {deletegame, editgame, setEdit} = props
    return(
        <div className="DoesThisWork">
            {/* map over video game list and give each one a key value, pass properties down to videogame child */}
            {props.videogames.map(videogame => {console.log(videogame)
                return(<Videogame 
                    key={videogame.id}
                    id={videogame.id}
                    image={videogame.image}
                    title={videogame.title}
                    review={videogame.review}
                    rating={videogame.rating}
                    delete={deletegame}
                    edit={editgame}
                    setEdit={setEdit}
                />
                )})}

        </div>
    )
}
    