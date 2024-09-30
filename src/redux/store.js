import { configureStore } from "@reduxjs/toolkit";
import favReducer from './newsReducer'

export const store = configureStore({
    reducer: {faviourite : favReducer},
  })