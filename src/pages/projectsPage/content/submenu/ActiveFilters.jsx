import React from 'react'
import { StyledSubMenu } from '../../../aboutPage/submenu/SubMenu'
import { useSelector } from 'react-redux'

function ActiveFilters() {
  const activeFilters = useSelector(state => state.filter.selectedFilters)
  return (
    <StyledSubMenu>
      <div>Отображать: 
        {activeFilters.map((item) => 
          <span className='filter'>{item}</span>
        )}
      </div>
    </StyledSubMenu>
  )
}

export default ActiveFilters