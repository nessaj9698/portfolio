import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios/index'

const initialState = {
 tags:[],
 posts:[],
 selectedTags:[]
}

export const fetchPosts = createAsyncThunk(
    'blogPage/fetchPosts',
    async () => {
        const { data } = await axios.get('posts/');
        return data
    }
)

export const fetchTags = createAsyncThunk(
    'blogPage/fetchTags',
    async () => {
            const  tags  = await axios.get('posts/tags');
            return tags.data    }
)

export const blogSlice = createSlice({
  name: 'blogPage',
  initialState,
  reducers: {
    selectTag: (state,action) => {
        let actionIndex = state.selectedTags.indexOf(action.payload)
        if (actionIndex < 0) {
            // Если элемента нет в массиве
            state.selectedTags.push(action.payload)
        } else {
            //  Если элемент в массиве уже есть
            state.selectedTags.splice(actionIndex, 1)
        }
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled] : (state, action) => {
        state.posts = action.payload
    },
    [fetchTags.fulfilled] : (state, action) => {
        state.tags = action.payload
        state.selectedTags = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { selectTag } = blogSlice.actions

export default blogSlice.reducer