import React from 'react'
import Highlight from 'react-highlight'
import arta from '../../../../../../../../node_modules/highlight.js/styles/arta.css'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import fetchCodeExample from '../../../../../../../api/gitHubApi'

const StyledHardSkillsTab = styled.div`
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
`

function HardSkillsTab() {
  const dispatch = useDispatch()
   
 
  return (
    <StyledHardSkillsTab>
        <Highlight
                className='javascript'
            >
              let hardSkills = new Array('React','Redux','Git');

            </Highlight>
            <p>/ **</p>
            <ul>Мои основные навыки:
            <li>* HTML5</li>
            <li>* CSS3</li>
            <li>* React</li>
            <li>* Redux</li>
            <li>* Git</li>
            </ul>
            <ul>Дополнительно:
            <li>* styled-components</li>
            <li
            className='gh-link'
            onClick={() => { fetchCodeExample(dispatch,'TimePlanner','src/api/location-api.js')}}>axios</li>
            <li>* stylus</li>
            <li 
            className='gh-link'
            onClick={() => { fetchCodeExample(dispatch,'TimePlanner','src/firebase.js')}}>firebase</li>
            <li>* formik</li>
            
           
            <li
            className='gh-link'
            onClick={() => { fetchCodeExample(dispatch,'TimePlanner','src/components/content/tasks/tasksList/importance-radio.jsx')}}>MUI components</li>
            <li>* ...и многое другое:)</li>
            </ul>
            <p>* /</p>
    </StyledHardSkillsTab>
  )
}

export default HardSkillsTab