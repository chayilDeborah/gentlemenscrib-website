import React from 'react';
import './Student.styles';
import { StudentContainer, 
  StudentWrapper,  
  StudentImage, 
  StudentTitle, 
  OrderList, 
  ListWrap, 
  Listing, 
  ListItem,
  ScrollText,
  ScrollIcon, 
  PriceContainer, 
  Price } from './Student.styles';
  
import student from '../assets/student.png';
import downarrow from '../assets/downarrow.png';
// import { Icon } from '../components/icons/icons';

const Student = () => {
  return (
    <StudentContainer>
      <StudentWrapper>
        <StudentImage src={student} alt='image'/>
        <StudentTitle>STUDENT 
STARTER PACK</StudentTitle>
      </StudentWrapper>
      <OrderList>
        <ListWrap>
          <Listing style={{marginTop:0}}>3</Listing>
          <ListItem>T-Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Jeans</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Pant trousers</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Collared Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>3</Listing>
          <ListItem>Polo Shirts</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>2</Listing>
          <ListItem>Chinos</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Palm sandal</ListItem>
        </ListWrap>
        <ListWrap>
          <Listing>1</Listing>
          <ListItem>Loafers</ListItem>
        </ListWrap>
        <ScrollText>Scroll for more<span style={{width: "0px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
      </OrderList>
      <PriceContainer>
        <Price>Order Pack for N170000</Price>
      </PriceContainer>
    </StudentContainer>
  )
  }

export default Student;
