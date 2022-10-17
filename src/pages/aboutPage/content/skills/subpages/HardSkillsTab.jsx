import React from 'react'
import {useDispatch} from 'react-redux'
import fetchCodeExample from '../../../../../api/gitHubApi'
import Tabs from '../../../../../components/tabs/Tabs'
import CodeBlock from '../../../../../components/common/CodeBlock'



function HardSkillsTab() {
  const dispatch = useDispatch()
   
 
  return (
    <Tabs>
        <CodeBlock
                className='javascript'
            >
              let hardSkills = new Array('React','Redux','Git');

            </CodeBlock>
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
    </Tabs>
  )
}

export default HardSkillsTab