import { configureStore } from '@reduxjs/toolkit'
import aboutPageTabsReducer from './reducers/aboutPageTabsReducer'
import aboutPageReducer from './reducers/aboutPageReducer'
import filterReducer from './reducers/projectsFilterReducer'
import blogPageReducer from './reducers/blogPageReducer'

export const store = configureStore({
  reducer: {
      aboutPageTabs:aboutPageTabsReducer,
      aboutPage:aboutPageReducer,
      filter:filterReducer,
      blogPage:blogPageReducer
  },
})