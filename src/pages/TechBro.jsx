import React from 'react'
import styled from 'styled-components';
import techbro from '../assets/techbro.png';
import downarrow from '../assets/downarrow.png';

const TechBroContainer = styled.div`


`;
const TechBroWrapper = styled.div`
display: flex;
position: relative;
`;
const TechBroImage = styled.img`

width: 57%;
    position: absolute;
    margin-left: 31%;
    margin-top: 86px;
`;
const TechBroTitle = styled.p`
font-family: rische;
font-weight: 700;
font-size: 100px;
width: 50%; 
margin: 0 0 0 100px;
z-index: 2;
`;
const OrderList = styled.div`
// display: flex;
margin: 0 0 0 100px;
width: 380px;
height: 568px;
overflow: auto;
z-index: 2;
&:first-child{
  margin-top: 0;
}
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
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
`;
const ListItem = styled.div`
margin-left: 24px;
font-size: 24px;
margin-top: 10px;
`;
const ScrollText = styled.div`
font-family: 'Montserrat', sans-serif;
position: absolute;
width: 370px;
height: 60px;
left: 100px;
top: 943px;
// background-color: teal;
text-align:center;
align-items:center;
justify-content: center;
font-size: 18px;
display: flex;
cursor: pointer;
`;
const ScrollIcon = styled.img`
flex: 1;
margin: 5px 0 0 12px;
`;
const PriceContainer = styled.div`
background: #E28F1D;
width: 289px;
height: 58px;
position: absolute;
margin-top: 56px;
margin-left: 141px;
border-radius: 35px;
`;
const Price = styled.div`
font-family: Montserrat;
font-size: 18px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
align-items:center;
justify-content: center;
display: flex;
padding-top: 18px;
color: #FFFFFF;

cursor: pointer;
// margin-bottom: 18px;
`;
const Footer = styled.div`
background-color: #0B0D17;
height: 460px;
margin-top: 135px;

`;
const TechBro = () => {
  return (
    <TechBroContainer>
      <TechBroWrapper>
        <TechBroImage src={techbro} alt='image'/>
        <TechBroTitle>TECH BRO STARTER</TechBroTitle>
      </TechBroWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>2</Listing>
          <ListItem>Jean(s)</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Sweater/Cardigan</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Kakki pants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Joggers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Jersey</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Plain tees</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Crocs</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Designer tees</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
      <Footer>
        {/* <FooterContainer>

        </FooterContainer> */}
      </Footer>
    </TechBroContainer>
  )
  }

export default TechBro
