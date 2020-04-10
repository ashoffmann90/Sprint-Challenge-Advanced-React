import React from 'react'

function PlayerCards(props) {
        
    return(
        <>
            {props.players.map(player => (
                <div key={player.id}>
                    <p>Name:{player.name}</p>
                    <p>Country:{player.country}</p>
                    <p>Searches:{player.searches}</p>
                </div>    
            ))}
        </>
    )
}

export default PlayerCards