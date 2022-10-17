import React from 'react'
import Tabs from '../../../../../components/tabs/Tabs'
import CodeBlock from '../../../../../components/common/CodeBlock'


function SoftSkillsTab() {
    return (
        <Tabs>
            <CodeBlock
                className='javascript'
            >
                {`let softSkills = {
                   усидчивость:true,
                   внимательность:true,
                   инициативность:true,
                   скромность:undefined
                 }`}

            </CodeBlock>
            <p>/ **</p>
            <ul>Личностные навыки:
                <li>* Усидчивость и упорство: пожалуй, важнейшие черты характера, которые я могу в себе отметить. Они очень помогли мне в процессе самообучения</li>
                <li>* Умения слушать и СЛЫШАТЬ: я адекватно отношусь к критике, признаю свои ошибки и работаю над ними</li>
                <li>* Инициативность: способен не только слушать, но и предлагать. Умею отстаивать свою точку зрения.</li>
            </ul>
            <p>* /</p>
        </Tabs>
    )
}

export default SoftSkillsTab