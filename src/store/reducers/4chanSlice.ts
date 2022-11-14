import {IError} from "../../models/IError";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FourChanState {
  errorInfo: IError
}

const initialState: FourChanState = {
  errorInfo: {
    status: null
  }
}

export const fourChanSlice = createSlice({
  name: 'fourChan',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<IError>) {
      state.errorInfo = action.payload
    }
  }
})

export default fourChanSlice.reducer