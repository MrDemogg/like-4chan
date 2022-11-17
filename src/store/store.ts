import { combineReducers, configureStore } from '@reduxjs/toolkit'
import fourChanReducer from './reducers/FourChanSlice'
import {fourChanAPI} from "../service/FourChanService";

const rootReducer = combineReducers({
  fourChanReducer,
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

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']