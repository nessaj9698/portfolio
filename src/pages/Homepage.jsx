import React, { useState } from 'react'
import styled from 'styled-components'
import SnakeGame from '../components/snake-game/SnakeGame'
import CodeBlock from '../components/common/CodeBlock'
import codewarsLogo from '../assets/img/codewars-logo.svg'
import { useEffect } from 'react'
import axios from 'axios'


const StyledHomepage = styled.div`
display:flex;
height:100%;
align-items:center;
& h3 {
    font-size:18px;
    color:var(--colors-headings);
    margin:0;
    width:100%;
}
& h2 {
    font-size:18px;
    color:#4D5BCE;
    margin-bottom:80px;
    margin-top:0;
   
}
& h1 {
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
.codewars-logo {
    width:35px;
    height:35px;
}
.codewars-block {
    display:flex;
    column-gap:15px;
    align-items:center;
    margin-top:-15px;
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
    const [kyu, setKyu] = useState(null)
    useEffect(()=> {
        axios.get('https://www.codewars.com/api/v1/users/nessaj9698')
        .then(response => {
            setKyu(response.data.ranks.overall.name)
        })
    }, [])
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
                        <div className="codewars-block">
                            <img src={codewarsLogo} alt="" className='codewars-logo'/>
                            <a href='https://www.codewars.com/users/nessaj9698'><p>Codewars: {kyu}</p></a>
                        </div>
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