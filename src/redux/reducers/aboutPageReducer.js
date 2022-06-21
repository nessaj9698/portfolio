import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 codeExample:null,
 gitHubFileName:null,
  githubFileLink:null
}

export const aboutSlice = createSlice({
  name: 'aboutPage',
  initialState,
  reducers: {
    setCodeExample: (state,action) => {
        state.codeExample = action.payload;
    },
    setGitHubFileName: (state,action) => {
      state.gitHubFileName = action.payload;
    },
    setGitHubFileLink: (state,action) => {
      state.gitHubFileLink = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCodeExample, setGitHubFileLink, setGitHubFileName } = aboutSlice.actions

export default aboutSlice.reducer