import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from '../../../api/axios/index'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'


const StyledPost = styled.div`
    & {
        padding-top:30px;
    }
     .container {
        width:75%;
        margin:0 auto;
        img {
            max-width:100%;
        }
    }
`

function SinglePost() {
    const { id } = useParams();
    const [ postTitle, setPostTitle ] = useState(null)
    const [ postContent, setPostContent ] = useState(null)
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        
        axios.get(`/posts/${id}`).then(response => {
            setPostTitle(response.data.title)
            setPostContent(response.data.text);
            setImageURL(response.data.imageURL)
            console.log(response)
        })
        
    }, [])


  return (
    <StyledPost>
        <div className="container">
            <img src={`${process.env.REACT_APP_API_URL}${imageURL}`} alt="" />
            <h1>{postTitle}</h1>
            {/* <p>{postContent}</p> */}
            <ReactMarkdown children={postContent}/>
        </div>
    </StyledPost>
  )
}

export default SinglePost