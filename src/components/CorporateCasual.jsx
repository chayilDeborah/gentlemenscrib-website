import React from 'react';
import './CorporateCasual.styles';
import { CorporateCasualContainer, 
  CorporateCasualWrapper,  
  CorporateCasualImage, 
  CorporateCasualTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from './CorporateCasual.styles';
  
import corporate from '../assets/corporate.png';
import downarrow from '../assets/downarrow.png';

const CorporateCasual = () => {
  return (
    <CorporateCasualContainer>
      <CorporateCasualWrapper>
        <CorporateCasualImage src={corporate} alt='image'/>
        <CorporateCasualTitle>CORPORATE
CASUAL</CorporateCasualTitle>
      </CorporateCasualWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>2</Listing>
          <ListItem>Blazers Jacket</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pant trousers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Turtle Neck</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Plain round neck shirt</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>White sneakers</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </CorporateCasualContainer>
  )
  }

export default CorporateCasual;
