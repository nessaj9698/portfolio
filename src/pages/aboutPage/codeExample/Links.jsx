import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledLinks = styled.div`
& {
    display:flex;
    justify-content:space-between;
    margin:30px 0;
    div {
        display:flex;
        align-items:center;
    }
        .gh-profile {
            color:#5565E8;
        }
        .gh-file-link {
            position:relative;
            color:#607B96; 
            &:before {
                content:url('https://img.icons8.com/material-outlined/24/607B96/github.png');
                position:absolute;
                left:-30px;
            }
        }
        img {
            height:35px;
            width:35px;
            margin-right:15px;
            border-radius:30px;
        }
}
@media (max-device-width:768px) {
    & {
        flex-wrap:wrap;
        row-gap:20px;
        div:nth-child(2) {
            padding-left:35px;
        }
    }
}
`

function Links() {

    const fileLink = useSelector(state => state.aboutPage.gitHubFileLink);
    const fileName = useSelector(state => state.aboutPage.gitHubFileName)

    return (
        <StyledLinks>
            <div>
                <img src="https://avatars.githubusercontent.com/u/66894098?v=4" alt="" />
                <a href="https://github.com/nessaj9698" className='gh-profile'>@nessaj9698</a>
            </div>
            <div>
                <a href={fileLink} className='gh-file-link'>file:{fileName}</a>
            </div>
            
        </StyledLinks>
    )
}

export default Links