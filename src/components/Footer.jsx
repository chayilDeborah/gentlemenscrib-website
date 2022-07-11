import React from "react";
import './Footer.styles';
import { 
    FooterContainer, 
    FooterRow, 
    FooterColumn, 
    FooterHeadings, 
    Link, 
    Icon, 
    FooterBreak, 
    LastSection, 
    FooterEnd,
    FooterWrapper, 
    LogoContainer, 
    LogoTitle, 
    WhiteArm
} from './Footer.styles';

import whiteArmchair from '../assets/whiteArmchair.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

export const Footer = () => {
    return (
        <FooterWrapper>
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <FooterHeadings>Company</FooterHeadings>
              <Link href="#">About Us</Link>
              <Link href="#">Reads</Link>
              <Link href="#">FAQs</Link>
            </FooterColumn>
            <FooterColumn>
              <FooterHeadings>Products</FooterHeadings>
              <Link href="#">Starter Packs</Link>
              <Link href="#">Community</Link>
              <Link href="#">Mobile App</Link>
            </FooterColumn>
            <FooterColumn>
              <FooterHeadings>Legal</FooterHeadings>
              <Link href="#">Cookies & Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </FooterColumn>
            <FooterColumn>
              <FooterHeadings>Get In Touch</FooterHeadings>
              <Link style={{height:15, border: "5px", color: "E28F1D"}}>
              <Icon src={instagram} alt='instagram' />
              <Icon src={twitter} alt='twitter' />
              </Link>
              <Link href="#">support@gentlemenscrib.com</Link>
              <Link href="#">Block 2, Flat 6, Baba Omojola Estate, Bagada, Lagos</Link>
            </FooterColumn>
          </FooterRow>
        </FooterContainer>
        <FooterBreak />
        <LastSection>
          <FooterEnd>© 2022 Gentlemen'scrib. All rights reserved</FooterEnd>
          <FooterEnd>
            <LogoContainer>
              <LogoTitle>GENTLEMEN'S CRIB</LogoTitle>
                <WhiteArm src={whiteArmchair} alt='armchair' />
            </LogoContainer>
          </FooterEnd>
          <FooterEnd>Terms of Service | Privacy Policy</FooterEnd>
        </LastSection>
      </FooterWrapper>
    )
}
export default Footer;