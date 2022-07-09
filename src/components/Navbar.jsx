import React from "react";

import {Container, Wrapper, LogoContainer, LogoTitle, Arm, Center, Product, MenuItem, Arrow, IconsContainer, SearchIcon, CartIcon, PersonIcon, NavbarText, NavText, NavTextIcon} from './Navbar.styles';

import armchair from '../assets/armchair.png';
import arrow from '../assets/arrow.png';
import search from '../assets/search.png';
import cart from '../assets/cart.png';
import person from '../assets/person.png';
import cancel from '../assets/cancel.png';



export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <LogoTitle>GENTLEMEN'S CRIB</LogoTitle>
                    <Arm src={armchair} alt='armchair' />
                </LogoContainer>
                <Center>
                    <Product>
                        <MenuItem>Products</MenuItem>
                        <Arrow src={arrow} alt='arrow' />
                    </Product>
                    <MenuItem style={{marginLeft: "30px"}}>Company</MenuItem>
                    <MenuItem style={{marginLeft: "30px"}}>Support</MenuItem>
                    <MenuItem style={{marginLeft: "30px"}}>Reads</MenuItem>
                </Center>
                <IconsContainer>
                    <SearchIcon src={search} alt='search' style={{color: 'red'}}/>
                    <CartIcon src={cart} alt='cart' />
                    <PersonIcon src={person} alt='person' />
                </IconsContainer>
            </Wrapper>
            <NavbarText>
                <NavText>These are template packs, we will create packs to be suited specially for you.</NavText>
                <NavTextIcon src={cancel} alt='cancel'/>
            </NavbarText>
        </Container>

    )
}
export default Navbar;