import React from 'react';
import styled from 'styled-components';
import Telegram from '../../assets/img/icons8-telegram-app-20.svg'
import VK from '../../assets/img/icons8-vk-circled-20.svg'

const StyledFooter = styled.div`
position:absolute;
bottom:0;
display:flex;
justify-content:space-between;
border-top:1px solid #1E2D3D;
border-bottom:1px solid #1E2D3D;
width:100%;
padding:15px 20px;
z-index:99;
& > div > p {
    color:var(--colors-text);
}
& > div {
    display:flex;
    column-gap:30px;
}
@media (max-device-width:768px) {
   position:static;
   width:100vw;
}
`

function Footer() {
    return (
        <StyledFooter>
            <div>
                <p>мои_соц_сети:</p>
                <a href="https://t.me/nessaj9698">
                <img src={Telegram} alt="" />
                </a>
                <a href="https://vk.com/roundnround">
                <img src={VK} alt="" />
                </a>
            </div>
            <div>
                <p><a href='https://github.com/nessaj9698'>@nessaj9698</a></p>
            </div>
        </StyledFooter>
    )
}

export default Footer