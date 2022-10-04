import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../../redux/reducers/blogPageReducer'
import { useSelector, useDispatch } from 'react-redux'
import PostPagesContent from '../../../components/blog/PostPagesContent'
import BlogFilters from '../blogFilters/BlogFilters'

function BlogPageContent() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])


    const posts = useSelector(state => state.blogPage.posts)
    const selectedTags = useSelector(state => state.blogPage.selectedTags)

    return (
        <PostPagesContent>
            <BlogFilters filters={selectedTags}/>
            <div className="content-inner">
                {posts
                .filter(post => selectedTags.indexOf(post.tags[0]) > -1)
                .map((post) =>
                    <div className='projects-item'>
                        <p className='projects-item__title'>{post.title}</p>
                        <div className="post__logo-wrapper">
                            <img src={`http://localhost:4444${post.imageURL}`} alt="" />


                        </div>
                        <div className="projects-item__bottom">
                            <p className='projects-item__description'>{post.excerpt}</p>
                            <Link to={`/post/${post._id}`} className='projects-item__link'>открыть_запись</Link>
                        </div>

                    </div>
                )}
            </div>
        </PostPagesContent>
    )
}

export default BlogPageContent