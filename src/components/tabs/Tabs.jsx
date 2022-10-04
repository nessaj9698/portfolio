import React from 'react'
import styled from 'styled-components'

const StyledTab = styled.div`
& {
    padding-left:40px;
    ul,li,p {
        color: #607B96;
        list-style:none;
        padding-left:0;
    }
    ul {
      margin-bottom:30px;
    }
    li {
      padding-top:10px;
    }
    li.gh-link {
      display:inline-block;
      cursor:pointer;
      position:relative;
      border-bottom:1px solid #607B96;
      margin-left:19px;
        &:before {
          content:"*";
          position:absolute;
          left:-19px;
        }
    }
}
@media (max-device-width:768px) {
    & {
        padding-left:0;
    }
}
`

function Tabs({ children }) {
    return (
        <StyledTab>
            {children}
        </StyledTab>
    )
}

export default Tabs