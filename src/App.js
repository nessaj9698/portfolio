import React from 'react';
import axios from './api/axios/index'
import './App.css';
import styled,{createGlobalStyle} from 'styled-components';
import Header from './components/header/Header';
import Homepage from './pages/Homepage';
import Footer from './components/footer/Footer';
import Aboutpage from './pages/aboutPage/Aboutpage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ContactPage from './pages/contactPage/ContactPage';
import BlogPage from './pages/blogPage/BlogPage';
import SinglePost from './pages/blogPage/singlePost/SinglePost';
import LoginPage from './pages/login/LoginPage';
import AddPost from './pages/blogPage/singlePost/AddPost';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const AppWrapper = styled.div`
display:grid;
grid-template-rows: 55px 1fr;
background-color:var(--colors-bg);
min-height:100vh;
`

const GlobalStyle = createGlobalStyle`
* {
  font-family:Fira code;
  color:var(--colors-text);
  font-size:16px;
  box-sizing:border-box;
 
}
::-webkit-scrollbar {
  height:7px;
  width: 7px;
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
@media (max-device-width:768px) {
  ::-webkit-scrollbar {
 display:none;
}
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
       <Route path="/contacts/" element={<ContactPage/>}/>
       <Route path="/blog/" element={<BlogPage/>}/>
       <Route path="/post/:id" element={<SinglePost/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/blog/post-create" element={<AddPost/>}/>
     </Routes>
     <Footer/>
</AppWrapper>

  );
}

export default App;
