import React, { useEffect } from 'react'
import StyledSidebar from '../../../components/sidebar/Sidebar'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../../redux/reducers/blogPageReducer'
import { selectTag } from '../../../redux/reducers/blogPageReducer'

function BlogSidebar() {
    const dispatch = useDispatch();
    const tags = useSelector(state => state.blogPage.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, [])



    return (
        <StyledSidebar>
            <p className='sidebar__title'>_категории</p>
            <div className="filter-wrapper">
                { tags.map(tag => 
                <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={tag}
                classes={{ root: "filter-label" }}
                onChange={() => { dispatch(selectTag(tag)) }}
                />)}
               
            </div>
        </StyledSidebar>
    )
}

export default BlogSidebar