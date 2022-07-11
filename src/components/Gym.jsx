import React from 'react';
import './Gym.styles';
import { GymContainer, 
  GymWrapper,  
  GymImage, 
  GymTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  PriceContainer, 
  Price } from './Gym.styles';
  
import gym from '../assets/gym.png';
// import downarrow from '../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

const Gym = () => {
  return (
    <GymContainer>
      <GymWrapper>
        <GymImage src={gym} alt='image'/>
        <GymTitle>GYM STARTER</GymTitle>
      </GymWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>5</Listing>
          <ListItem>Racerbacks</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>4</Listing>
          <ListItem>Sleeveless T-Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>4</Listing>
          <ListItem>Sweatshorts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Sweatpants</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Trainers</ListItem>
        </ListWrap>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </GymContainer>
  )
  }

export default Gym;
