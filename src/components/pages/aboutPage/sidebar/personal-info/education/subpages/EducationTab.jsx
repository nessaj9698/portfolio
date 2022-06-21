import React, { useEffect, useState } from 'react'
import Highlight from 'react-highlight'
import arta from '../../../../../../../../node_modules/highlight.js/styles/arta.css'
import styled from 'styled-components'

const StyledEducationTab = styled.div`
& {
    padding-left:40px;
    p {
        color: #607B96;
    }
}
`

function EducationTab() {
  return (
    <StyledEducationTab>
         <Highlight 
                className='javascript'
                >
             const education = 'Неоконченное высшее'
             
                </Highlight>
                <p>/ **</p>
              <p>* В 2016 году я поступил в Уральский Федеральный университет на специальность инженер-нанотехнолог.</p>
              <p>* Проучившись там до 3 курса, я был вынужден бросить учёбу по обстоятельствам личного характера.</p>
              <p>* Спустя время я понял, что хочу заниматься веб разработкой и погрузился в изучение этой темы.</p>
              <p>* /</p>
    </StyledEducationTab>
  )
}

export default EducationTab