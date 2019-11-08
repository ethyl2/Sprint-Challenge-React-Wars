import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col
  } from "reactstrap";

const CharacterCard = (props) => {
    return (
            <Col xs="12" s="6" md="4">
                <Card className="m-2">
                
                    <CardImg
                        top
                        width="100%"
                        src="https://source.unsplash.com/user/danielkcheung"
                        alt="Star Wars"
                    />
                    <CardBody>
                        <CardTitle style={{fontWeight: "bold"}}>{props.name}</CardTitle>
                        <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
                        <CardText>Height: {props.height}</CardText>
                        <CardText>Mass: {props.mass}</CardText>
                        <CardText>Gender: {props.gender}</CardText>
                        <CardText>Hair: {props.hair_color}</CardText>
                        <CardText>Skin: {props.skin_color}</CardText>
                        <CardText>Eyes: {props.eye_color}</CardText>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default CharacterCard;