import styled from "styled-components";

export const PartyGoerContainer = styled.div`

`;
export const PartyGoerWrapper = styled.div`
display: flex;
position: relative;
`;

export const PartyGoerImage = styled.img`
position: absolute;
width: 1051px;
height: 927px;
margin-left: 32%;
margin-top: -4px;
`;

export const PartyGoerTitle = styled.p`
font-family: rische;
font-weight: 700;
font-size: 100px;
margin: 0 0 0 100px;
width: 790px;
height: 240px;
z-index: 2;
`;

export const OrderList = styled.div`
margin: 0 0 0 100px;
width: 380px;
height: 568px;
overflow: auto;
z-index: 2;
&:first-child{
  margin-top: 0;
}
`;

export const ListWrap = styled.div`
display: flex;
font-family: 'Sora', sans-serif;
margin-top: 24px;
`;

export const Listing = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content: center;
border: 1.5px solid #000000;
height: 50px;
width: 80px;
border-radius: 20px 0 20px 0;
font-size: 24px;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
`;

export const ListItem = styled.div`
margin-left: 24px;
font-size: 24px;
margin-top: 10px;
`;

export const ScrollText = styled.div`
font-family: 'Montserrat', sans-serif;
position: absolute;
width: 370px;
height: 60px;
left: 100px;
top: 943px;
text-align:center;
align-items:center;
justify-content: center;
font-size: 18px;
display: flex;
cursor: pointer;
`;

export const ScrollIcon = styled.img`
flex: 1;
margin: 5px 0 0 12px;
`;

export const PriceContainer = styled.div`
background: #E28F1D;
width: 289px;
height: 58px;
position: absolute;
margin-top: 56px;
margin-left: 141px;
border-radius: 35px;
`;

export const Price = styled.div`
font-family: Montserrat;
font-size: 18px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
align-items:center;
justify-content: center;
display: flex;
padding-top: 18px;
color: #FFFFFF;
cursor: pointer;
`;