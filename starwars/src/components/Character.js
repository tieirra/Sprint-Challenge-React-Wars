// Write your Character component here
import React, { useState, useEffect } from 'react'
import {Card, Col, CardText, CardTitle, CardImg } from 'reactstrap'


 const People = props => {
    return(
    <Card outline color='warning' style={{padding:'7%',margin:'7%',backgroundColor:'#red'}}>
    <CardImg src={props.image} />
    <CardTitle><b>Name:</b> <u>{props.name}</u></CardTitle>
    <CardText><b>Species:</b> {props.species}</CardText>
    <CardText><b>Gender:</b> {props.gender}</CardText>
    </Card>
    )
};

export default People;