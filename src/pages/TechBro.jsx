import React from 'react';
import './TechBro.styles';
import { TechBroContainer, 
  TechBroWrapper,  
  TechBroImage, 
  TechBroTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from './TechBro.styles';
  
import techbro from '../assets/techbro.png';
import downarrow from '../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

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
    </TechBroContainer>
  )
  }

export default TechBro;
