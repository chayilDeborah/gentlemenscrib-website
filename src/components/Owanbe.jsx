import React from 'react';
import './Owanbe.styles';
import { OwanbeContainer, 
  OwanbeWrapper,  
  OwanbeImage, 
  OwanbeTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  PriceContainer, 
  Price } from './Owanbe.styles';
  
import owanbe from '../assets/owanbe.png';
// import downarrow from '../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

const Owanbe = () => {
  return (
    <OwanbeContainer>
      <OwanbeWrapper>
        <OwanbeImage src={owanbe} alt='image'/>
        <OwanbeTitle>OWANBE STARTER 
PACK</OwanbeTitle>
      </OwanbeWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>2</Listing>
          <ListItem>Senator</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Agbada</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Ankara shorts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Brogues</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Palms</ListItem>
        </ListWrap>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </OwanbeContainer>
  )
  }

export default Owanbe;
