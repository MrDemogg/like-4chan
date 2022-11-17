import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IError} from "../../models/IError";

interface ChatState {
  errorInfo: IError
}

const initialState: ChatState = {
  errorInfo: {
    status: null,
  }
}

export const fourChanSlice = createSlice({
  name: 'fourChan',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<any>) {
      state.errorInfo = action.payload
    }
  }
})

export default fourChanSlice.reducer