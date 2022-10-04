import React from 'react'
import styled from 'styled-components'
import { useSelector} from 'react-redux'
import Highlight from 'react-highlight'
import Links from './Links'
import arta from '../../../../node_modules/highlight.js/styles/arta.css'


const StyledCodeExample = styled.div`
& {
max-height:83vh;
overflow-y:scroll;
border-left:1px solid #1E2D3D;
padding:25px 40px 0 25px;
grid-area:example;
    .javascript {
        background-color:#011221;
    }
    p {
        color:#607B96;
    }
}
@media (max-device-width:768px) {
    & {
        border-left:none;
        padding:0;
        width:95%;
        margin:0 auto;
    }
}
`

function CodeExample() {
    const code = useSelector(state => state.aboutPageTabs.codeExample)
   
    return (
        <StyledCodeExample>
            <div>
               <p>// Нажмите на подчеркнутый текст, чтобы увидеть пример моего кода</p>
               {code ? <div><Links/>  <Highlight className='javascript'>{atob(code)}</Highlight></div> : false}
              
           
            </div>
        </StyledCodeExample>
    )
}

export default CodeExample