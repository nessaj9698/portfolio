import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openedTabs: [],
  activeTab:null,
  prevTab: null,
  codeExample:''
}

export const mainSlice = createSlice({
  name: 'aboutPageTabs',
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
      // Вычисляем индекс нажатой вкладки
      let tabIndex
      for (let i = 0; i < state.openedTabs.length; i++) {
        if(action.payload === state.openedTabs[i].pageName) {
          tabIndex = i;
        }
      }

      // Логика закрытия текущей вкладки
      if (action.payload === state.activeTab) {
        state.activeTab = state.openedTabs[0].pageName
        if (state.openedTabs.length > 1 && tabIndex === 0  ) {
          state.activeTab = state.openedTabs[1].pageName
        }
      }

      // Если вкладка последняя - обнуляем контент
      if (state.openedTabs.length === 1) {
        state.activeTab = null
      }
      state.openedTabs.splice(tabIndex, 1)
    },
    setCodeExample: (state,action) => {
      state.codeExample = action.payload;
  }
  },
})

// Action creators are generated for each case reducer function
export const { setOpenedTabs, setTab, deleteTab, setCodeExample } = mainSlice.actions

export default mainSlice.reducer