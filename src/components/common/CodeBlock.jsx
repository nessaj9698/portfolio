import React, { useEffect } from 'react'
import Prism from 'prismjs'
import '../../prism-night-owl.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'




function CodeBlock({ children, isLineNumber }) {
  useEffect(() => {
    Prism.manual = true
    Prism.highlightAll();
  }, [])
  return (
    <div className={isLineNumber === true ? 'line-numbers' : ''}>
      <pre>
        <code className='language-js'>
          {children}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock