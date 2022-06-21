import React from 'react';
import './App.css';
import styled,{createGlobalStyle} from 'styled-components';
import Header from './components/header/Header';
import Homepage from './components/pages/Homepage';
import Footer from './components/footer/Footer';
import Aboutpage from './components/pages/aboutPage/Aboutpage';
import ProjectsPage from './components/pages/projectsPage/ProjectsPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const AppWrapper = styled.div`
display:grid;
grid-template-rows: 55px 1fr;
background-color:#011627;
height:100vh;
`

const GlobalStyle = createGlobalStyle`
* {
  font-family:Fira code;
  color:white;
  font-size:16px;
  box-sizing:border-box;
}
::-webkit-scrollbar {
  height:7px;
  width: 7px;
  background-color: #011627;
  ;
}
::-webkit-scrollbar-thumb {
  background-color: #607B96;
}
a {
  text-decoration:none;
}
p {
  font-size:16px;
  margin:0;
}
.content {
  padding-left:40px;
}
.fullwidth {
  width:100%;
}
.hljs {
  background:unset;
}
`

function App() {
  
  return (
   <AppWrapper>
 <link rel="stylesheet" href="../node_modules/highlight.js/styles/arta.css"></link>
     <style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
</style>
     <GlobalStyle/>
     <Header/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/about/" element={<Aboutpage/>}/>
       <Route path="/projects/" element={<ProjectsPage/>}/>
     
     </Routes>
     <Footer/>
</AppWrapper>
  );
}

export default App;
