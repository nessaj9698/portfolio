import { createSlice } from '@reduxjs/toolkit'

const initialState = {
selectedFilters:['React','Wordpress']
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state,action) => {
        let actionIndex = state.selectedFilters.indexOf(action.payload)
        console.log(actionIndex)
        if (actionIndex < 0) {
            // Если элемента нет в массиве
            state.selectedFilters.push(action.payload)
        } else {
            //  Если элемент в массиве уже есть
            state.selectedFilters.splice(actionIndex, 1)
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions

export default filterSlice.reducer