import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {fourChanAPI} from "../service/FourChanService";

const rootReducer = combineReducers({
  [fourChanAPI.reducerPath]: fourChanAPI.reducer
})

export const setupStore = (): any => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(fourChanAPI.middleware)
  })
}