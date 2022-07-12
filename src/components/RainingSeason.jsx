import React from 'react';
import './RainingSeason.styles';
import { RainingSeasonContainer, 
  RainingSeasonWrapper,  
  RainingSeasonImage, 
  RainingSeasonTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from './RainingSeason.styles';
  
import raining from '../assets/raining.png';
import downarrow from '../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

const RainingSeason = () => {
  return (
    <RainingSeasonContainer>
      <RainingSeasonWrapper>
        <RainingSeasonImage src={raining} alt='image'/>
        <RainingSeasonTitle>TECH BRO STARTER</RainingSeasonTitle>
      </RainingSeasonWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>3</Listing>
          <ListItem>Dark coloured 
shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Black jeans</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Grey Pants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Hoodies</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Leather Jacket</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Denim Jacket</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Turtle Neck</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing></Listing>
          <ListItem></ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </RainingSeasonContainer>
  )
  }

export default RainingSeason;
