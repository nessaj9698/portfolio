import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Highlight from 'react-highlight'
import Links from './Links'
import arta from '../../../../../node_modules/highlight.js/styles/arta.css'


const StyledCodeExample = styled.div`
& {
max-height:80vh;
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
`

function CodeExample() {

    const code = useSelector(state => state.main.codeExample)
   
    
    
   
    return (
        <StyledCodeExample>
            <div>
               <p>// Нажмите на подчеркнутый текст, чтобы увидеть пример моего кода</p>
               {code ? <Links/> : false}
               <Highlight className='javascript'>{atob(code)}</Highlight>
           
            </div>
        </StyledCodeExample>
    )
}

export default CodeExample