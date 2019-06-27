import React from 'react'
import Videogame from './videogame'

export default function VideogameList(props){
    let {deletegame, editgame} = props
    return(
        <div>
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
                />
                )})}

        </div>
    )
}
    