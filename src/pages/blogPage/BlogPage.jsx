import React from 'react'
import StyledInnerPage from '../../components/pageInner/PageInner';
import BlogSidebar from './blogSidebar/BlogSidebar'
import BlogPageContent from './blogContent/BlogPageContent'

function BlogPage() {

    return (
        <StyledInnerPage>
            <BlogSidebar />
            <BlogPageContent/>
        </StyledInnerPage>
    )
}

export default BlogPage