import React from 'react'
import { StyledSidebar } from '../../aboutPage/sidebar/Sidebar'
import { Checkbox, FormControlLabel } from '@mui/material'
import { setFilter } from '../../../../redux/reducers/projectsFilterReducer'
import { useDispatch } from 'react-redux'

function ProjectsSidebar() {
    const dispatch = useDispatch();

  return (
    <StyledSidebar>
        <p className='sidebar__title'>_projects</p>
        <div className="filter-wrapper">
        <FormControlLabel className='react-filter'
        control={<Checkbox defaultChecked/>} 
        label="React" 
        classes={{root:"filter-label"}}
        onChange={() => {dispatch(setFilter('React'))}}
        />

        <FormControlLabel className='wp-filter'
        control={<Checkbox defaultChecked />} 
        label="Wordpress" 
        classes={{root:"filter-label"}}
        onChange={() => {dispatch(setFilter('Wordpress'))}}
        />
        </div>
        
    </StyledSidebar>
  )
}

export default ProjectsSidebar