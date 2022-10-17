import React from 'react'
import styled from 'styled-components'
import Tabs from '../../../../../components/tabs/Tabs'
import CodeBlock from '../../../../../components/common/CodeBlock'



function EducationTab() {
  return (
    <Tabs>
         <CodeBlock
                className='javascript'
                >
             const education = 'Неоконченное высшее'
             
                </CodeBlock>
                <p>/ **</p>
              <p>* В 2016 году я поступил в Уральский Федеральный университет на специальность инженер-нанотехнолог.</p>
              <p>* Проучившись там до 3 курса, я был вынужден бросить учёбу по обстоятельствам личного характера.</p>
              <p>* Спустя время я понял, что хочу заниматься веб разработкой и погрузился в изучение этой темы.</p>
              <p>* /</p>
    </Tabs>
  )
}

export default EducationTab