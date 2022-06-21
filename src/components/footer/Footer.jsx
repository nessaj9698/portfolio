import React from 'react';
import styled from 'styled-components';
import Telegram from '../../assets/img/icons8-telegram-app-20.png'
import VK from '../../assets/img/icons8-vk-circled-20.png'

const StyledFooter = styled.div`
position:absolute;
bottom:0;
display:flex;
justify-content:space-between;
border-top:1px solid #1E2D3D;
width:100%;
padding:15px 20px;
& > div > p {
    color:#607B96;
}
& > div {
    display:flex;
    column-gap:30px;
}
`

function Footer() {
    return (
        <StyledFooter>
            <div>
                <p>find me in:</p>
                <a href="">
                <img src={Telegram} alt="" />
                </a>
                <a href="">
                <img src={VK} alt="" />
                </a>
            </div>
            <div>
                <p>@nessaj12</p>
            </div>
        </StyledFooter>
    )
}

export default Footer