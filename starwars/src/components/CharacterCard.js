import React from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default CharacterCard;