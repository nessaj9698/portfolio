import React from 'react';
import styled from 'styled-components';
import Bio from './bio/Bio';
import Education from './education/Education';
import Skills from './skills/Skills';


const StyledInfo = styled.div`
& {
    padding:20px 35px;
}
& > ul {
  position:relative;
}
`

function PersonalInfo() {
 
  return (
    <StyledInfo>
     
        <Bio />
      
        <Education /> 
        <Skills /> 
        
      
      
    </StyledInfo>
  )
}

export default PersonalInfo