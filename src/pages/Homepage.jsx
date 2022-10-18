import React from 'react'
import styled from 'styled-components'
import SnakeGame from '../components/snake-game/SnakeGame'
import CodeBlock from '../components/common/CodeBlock'




const StyledHomepage = styled.div`
display:flex;
height:100%;
align-items:center;
& > div > div > h3 {
    font-size:18px;
    color:var(--colors-headings);
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
    color:var(--colors-headings);
    font-weight:400;
    margin:0;
    line-height:62px;
    margin:15px 0;
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
pre > .mobile {
    display:none;
}
@media (max-device-width:768px) {
    & {
        display:block;
        padding-top:95px;
        div {
            width:90%;
        }
    }
    & > div > div > h1 {
        font-size: 46px;
    }
    pre > .mobile {
        display:block;
    }
}

`

function Homepage() {
    return (
        <StyledHomepage>

            <div>
                <div>
                    <h3>Тимошин Вадим</h3>
                    <h1>Frontend разработчик</h1>
                    <h2>React, TypeScript, Git, etc.</h2>
                    <div className="desktop">
                        <CodeBlock className='language-js desktop'>
                            <p>const githubLink = <a href='https://github.com/nessaj9698'>"https://github.com/nessaj9698"</a></p>
                        </CodeBlock>
                    </div>
                    <div className="mobile">
                        <div className='language-js mobile'>
                            <a href='https://github.com/nessaj9698'>https://github.com/nessaj9698</a>
                        </div>
                    </div>
                </div>

                <div className='desktop'>

                    <SnakeGame />

                </div>
            </div>

        </StyledHomepage>
    )
}

export default Homepage