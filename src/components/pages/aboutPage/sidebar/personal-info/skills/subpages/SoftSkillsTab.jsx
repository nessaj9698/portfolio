import React from 'react'
import Highlight from 'react-highlight'
import arta from '../../../../../../../../node_modules/highlight.js/styles/arta.css'
import styled from 'styled-components'

const StyledSoftSkillsTab = styled.div`
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
}
`

function SoftSkillsTab() {
    return (
        <StyledSoftSkillsTab>
            <Highlight
                className='javascript'
            >
                {`let softSkills = {
                   усидчивость:true,
                   внимательность:true,
                   инициативность:true,
                   скромность:undefined
                 }`}

            </Highlight>
            <p>/ **</p>
            <ul>Личностные навыки:
                <li>* Усидчивость и упорство: пожалуй, важнейшие черты характера, которые я могу в себе отметить. Они очень помогли мне в процессе самообучения</li>
                <li>* Умения слушать и СЛЫШАТЬ: я адекватно отношусь к критике, признаю свои ошибки и работаю над ними</li>
                <li>* Инициативность: способен не только слушать, но и предлагать. Умею отстаивать свою точку зрения.</li>
            </ul>
            <p>* /</p>
        </StyledSoftSkillsTab>
    )
}

export default SoftSkillsTab