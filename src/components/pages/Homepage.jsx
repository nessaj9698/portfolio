import React from 'react'
import styled from 'styled-components'
import Background from '../../assets/img/Background.png'

  

const StyledHomepage = styled.div`
display:flex;
height:100%;
align-items:center;
& > div > div > h3 {
    font-size:18px;
    color:#e5e9f0;
    margin:0;
    width:100%;
    
}
& > div > div > h2 {
    font-size:18px;
    color:#4D5BCE;
    margin-bottom:80px;
    margin-top:0;
   
}
& > div > div > h1 {
    font-size:62px;
    color:#e5e9f0;
    font-weight:400;
    margin:0;
  
}
& > div {
    display:flex;
   justify-content:space-between;
    width:1160px;
    margin:0 auto;
}
& > div > div > p {
    color:#607B96;
  margin-bottom:10px;
}
`

function Homepage() {
    return (
        <StyledHomepage>
            
            <div>
                <div>
                    <h3>Hi all. I am</h3>
                    <h1>Micheal Weaver</h1>
                    <h2>> Front-end and wordpress developer</h2>
                    <p>// you can also visit my Github profile</p>
                    <p>const githubLink = “https://github.com/example/url”</p>
                </div>
           
            <div>
                <img src={Background} />
            </div>
            </div>
         
        </StyledHomepage>
    )
}

export default Homepage