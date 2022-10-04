import React from 'react'
import { StyledSubMenu } from '../../aboutPage/submenu/SubMenu'

function BlogFilters({filters}) {
  return (
    <StyledSubMenu>
    <div>Отображать: 
      {filters.map((item) => 
        <span className='filter'>{item}</span>
      )}
    </div>
  </StyledSubMenu>
  )
}

export default BlogFilters