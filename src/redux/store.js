import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/mainReducer'
import aboutPageReducer from './reducers/aboutPageReducer'
import filterReducer from './reducers/projectsFilterReducer'

export const store = configureStore({
  reducer: {
      main:mainReducer,
      aboutPage:aboutPageReducer,
      filter:filterReducer
      
  },
})