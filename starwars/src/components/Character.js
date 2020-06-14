// Write your Character component here
import React from 'react';
import styled from 'styled-components';




const People = (props) => {
    const { data } = props;

    return (
        <CardHolderDiv>
            {data.map((characterInfo) => {
                return (

                    <Card>
                        <h1>Name: {characterInfo.name}</h1>
                        <h3>Gender: {characterInfo.gender}</h3>
                        <h3>Status: {characterInfo.status}</h3>
                        <h3>Spieces: {characterInfo.species}</h3>
                        <ImgPicture>Picture</ImgPicture>>
                        <Img src={characterInfo.image}></Img>
                    </Card>

                );


            })}

        </CardHolderDiv>
    );


};

const CardHolderDiv = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  align-items: center;
`;


const Card = styled.div`
  background-color: #fff;
  border: solid 1px black;
  border-radius: 2%;
  width: 25%;
  margin: 2% 0;
  padding: 2%;
  box-shadow: 5px 5px 20px red;
  color: #555;
`;


const Img = styled.img`
  border: gray solid 3px;
  border-radius: 5%;
  max-width: 100%;
`;


const ImgPicture = styled.p`
  color: pink;
  font-size: 15px;
`;



export default People;