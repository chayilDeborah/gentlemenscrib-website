import React from "react";
import './WorkFromHome.styles';

import { WorkFromHomeContainer, 
    WorkFromHomeWrapper, 
    WorkFromHomeImage,
    WorkFromHomeTitle,
    OrderList,
    ListWrap,
    Listing,
    ListItem,
    ScrollText,
    ScrollIcon,
    PriceContainer,
    Price
} from "./WorkFromHome.styles";

import workfromhome from '../assets/workfromhome .png';
import downarrow from '../assets/downarrow.png';
const WorkFromHome = () => {
    return (
    <WorkFromHomeContainer>
        <WorkFromHomeWrapper>
            <WorkFromHomeImage src={workfromhome} alt='image' />
            <WorkFromHomeTitle>WORK FROM HOME 
STARTER</WorkFromHomeTitle>
        </WorkFromHomeWrapper>
        <OrderList>
            <ListWrap>
                <Listing style={{ marginTop: 0 }}>2</Listing>
                <ListItem>Jean(s)</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>1</Listing>
                <ListItem>Sweater/Cardigan</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>2</Listing>
                <ListItem>Kakki pants</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>2</Listing>
                <ListItem>Joggers</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>2</Listing>
                <ListItem>Jersey</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>3</Listing>
                <ListItem>Plain tees</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>1</Listing>
                <ListItem>Crocs</ListItem>
            </ListWrap>
            <ListWrap>
                <Listing>3</Listing>
                <ListItem>Designer tees</ListItem>
            </ListWrap>
            <ScrollText>Scroll for more<span style={{width: "0px"}}><ScrollIcon src={downarrow} alt='downarrow' /></span></ScrollText>
        </OrderList>
        <PriceContainer>
            <Price>Order Pack for N170000</Price>
        </PriceContainer>
    </WorkFromHomeContainer>
    
    )
}

export default WorkFromHome;

// import React from 'react';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';

// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import TechBro from './components/TechBro';
// import WorkFromHome from './components/WorkFromHome';

// const App = () => {
//   return (
//    <div>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route exact path='/techbro' component={<TechBro/>} />
//       <Route exact path='/workfromhome' component={<WorkFromHome/>}/>


//     </Routes>

//    </div>
//   )
// };

// export default App;
