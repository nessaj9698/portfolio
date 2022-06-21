import React from 'react'
import styled from 'styled-components';
import Sidebar from './sidebar/Sidebar';
import AboutPageContent from './AboutPageContent';


export const StyledInnerPage = styled.div`
& {
    display:grid;
    grid-template-columns:300px 1fr;
    height:100%;
}
`

function Aboutpage() {
    return (
        <StyledInnerPage>
            <Sidebar/>
            <AboutPageContent/>
        </StyledInnerPage>
    )
}

export default Aboutpage