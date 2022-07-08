import React from 'react'
import styled from 'styled-components';
import techbro from '../assets/techbro.png';

const TechBroContainer = styled.div`
flex: 1;
`;
const TechBroWrapper = styled.div`
display: flex;
position: relative;
`;
const TechBroImage = styled.img`
width: 50%;
// background-color: teal;
position: absolute;
margin-left: 428px;
margin-top: 100px;
// margin-right: 30px;
`;
const TechBroTitle = styled.p`
font-family: rische;
font-weight: 700;
font-size: 100px;
width: 50%; 
margin: 0 0 0 100px;
`;
const OrderList = styled.div`
// display: flex;
margin: 0 0 0 100px;
`;
const ListWrap = styled.div`
display: flex;
font-family: 'Sora', sans-serif;
margin-top: 24px;
`;
const Listing = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content: center;
border: 1.5px solid #000000;
height: 50px;
width: 80px;
border-radius: 20px 0 20px 0;
font-size: 24px;
`;
const ListItem = styled.div`
margin-left: 24px;
font-size: 24px;
margin-top: 10px;
`;

const TechBro = () => {
  return (
    <TechBroContainer>
      <TechBroWrapper>
        <TechBroImage src={techbro} alt='techbro' />
        <TechBroTitle>TECH BRO STARTER</TechBroTitle>
      </TechBroWrapper>
      <OrderList>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Jean(s)</ListItem>

        </ListWrap>
      </OrderList>
    </TechBroContainer>
  )
  }

export default TechBro
