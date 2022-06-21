import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openedTabs: [],
  activeTab:null,
  prevTab: null,
  codeExample:''
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setOpenedTabs: (state, action) => {
      // Проверка массива объектов на дубли
      let isDoubles = state.openedTabs.find(item => item.pageName === action.payload)
      if (isDoubles === undefined) {
        state.openedTabs.push({
          pageName : action.payload,
          order: state.openedTabs.length,
          id: state.openedTabs.length
        });
      }
    },
    setTab: (state, action) => {
        state.prevTab = state.activeTab
        state.activeTab = action.payload;
    },
    deleteTab: (state, action) => {
      if (state.openedTabs.length === 1) {
        state.activeTab = null
      } else {
        state.activeTab = state.openedTabs[0].pageName
      }
      state.openedTabs.splice(action.payload, 1)
    },
    setCodeExample: (state,action) => {
      
      state.codeExample = action.payload;
  }
  },
})

// Action creators are generated for each case reducer function
export const { setOpenedTabs, setTab, deleteTab, setCodeExample } = mainSlice.actions

export default mainSlice.reducer