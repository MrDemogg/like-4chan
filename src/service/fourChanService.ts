import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {IPost} from "../hooks/IPost";

export const chatAPI = createApi({
  reducerPath: 'chatAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    postMessage: build.mutation<string, IPost>({
      query: (message) => ({
        url: '/upload',
        method: 'POST',
        body: message
      }),
      invalidatesTags: ['Post']
    })
  })
})