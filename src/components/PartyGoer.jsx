import React from 'react';
import './PartyGoer.styles';
import { PartyGoerContainer, 
  PartyGoerWrapper,  
  PartyGoerImage, 
  PartyGoerTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from './PartyGoer.styles';
  
import partygoer from '../assets/partygoer.png';
import downarrow from '../assets/downarrow.png';

const PartyGoer = () => {
  return (
    <PartyGoerContainer>
      <PartyGoerWrapper>
        <PartyGoerImage src={partygoer} alt='image'/>
        <PartyGoerTitle>PARTY GOER
STARTER</PartyGoerTitle>
      </PartyGoerWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>3</Listing>
          <ListItem>Patterned Shirt</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Jean</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Denim Jackets</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Chinos</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Aloha Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Sneakers</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </PartyGoerContainer>
  )
  }

export default PartyGoer;
