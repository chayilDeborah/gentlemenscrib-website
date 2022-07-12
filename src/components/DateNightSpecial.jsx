import React from 'react';
import './DateNightSpecial.styles';
import { DateNightSpecialContainer, 
  DateNightSpecialWrapper,  
  DateNightSpecialImage, 
  DateNightSpecialTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from './DateNightSpecial.styles';
  
import datenight from '../assets/datenight.png';
import downarrow from '../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

const DateNightSpecial = () => {
  return (
    <DateNightSpecialContainer>
      <DateNightSpecialWrapper>
        <DateNightSpecialImage src={datenight} alt='image'/>
        <DateNightSpecialTitle>DATE NIGHT
SPECIAL</DateNightSpecialTitle>
      </DateNightSpecialWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>3</Listing>
          <ListItem>Collared shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Blazers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Jeans</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Accesories
(Wrist Watch)</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "20px", marginTop: "18px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </DateNightSpecialContainer>
  )
  }

export default DateNightSpecial;
