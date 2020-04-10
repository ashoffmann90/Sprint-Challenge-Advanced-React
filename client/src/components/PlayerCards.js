import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function PlayerCards(props) {
        
    return(
        <div data-testid='cards'>
            {props.players.map(player => (
                <Card key={player.id}>
                    <CardTitle>Name:{player.name}</CardTitle>
                    <CardSubtitle>Country:{player.country}</CardSubtitle>
                    <CardText>Searches:{player.searches}</CardText>
                </Card>    
            ))}
        </div>
    )
}

export default PlayerCards