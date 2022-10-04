import React from 'react'
import styled from 'styled-components';
import Sidebar from './sidebar/Sidebar';
import AboutPageContent from './AboutPageContent';
import StyledInnerPage from '../../components/pageInner/PageInner';

function Aboutpage() {
    return (
        <StyledInnerPage>
            <Sidebar/>
            <AboutPageContent/>
        </StyledInnerPage>
    )
}

export default Aboutpage