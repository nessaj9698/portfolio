import React, { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";
import {TextField} from '@mui/material'
import axios from '../../../api/axios/index'
import styled from 'styled-components'

const StyledAddPost = styled.div`
    & {
        max-height:80vh;
        overflow-y:scroll;
    }
`

function AddPost() {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [imageURL, setImageURL] = useState('')
 
    const handleChangeFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0]

        formData.append('image', file)
        const { data } = await axios.post('/upload', formData);
        setImageURL(data.url)
    };
  

    const onSubmit = async () => {
        const fields = {
            title,
            imageURL,
            tags,
            text,
            excerpt
        }
        const { data } = await axios.post('/posts', fields)
    }
  
    const onChange = React.useCallback((value) => {
      setText(value);
    }, []);
  
    const options = React.useMemo(
      () => ({
        spellChecker: false,
        maxHeight: '400px',
        autofocus: true,
        placeholder: 'Введите текст...',
        status: false,
        autosave: {
          enabled: true,
          delay: 1000,
        },
      }),
      [],
    );

  return (
    <StyledAddPost>
        <input type="file" onChange={handleChangeFile}/>
        {imageURL && <img src={`http://localhost:4444${imageURL}`}/>}
    <TextField
    fullWidth
    onChange={(e) => {setTitle(e.target.value)}}
    label={'Заголовок статьи'}
    />
      <TextField
    fullWidth
    onChange={(e) => {setTags(e.target.value)}}
    label={'Рубрики'}
    />
          <TextField
    fullWidth
    onChange={(e) => {setExcerpt(e.target.value)}}
    label={'Отрывок'}
    />
      <SimpleMDE value={text} onChange={onChange} options={options} />
      <input type="submit" value="Отправить пост" onClick={onSubmit}/>
    </StyledAddPost>
  )
}

export default AddPost