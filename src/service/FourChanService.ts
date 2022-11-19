import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {IGetPosts} from "../models/IGetPosts";
export const fourChanAPI = createApi({
  reducerPath: 'fourChanAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    postRequest: build.mutation<string, FormData>({
      query: (message) => ({
        url: '/uploads',
        method: 'POST',
        body: message,
        responseHandler: response => response.text()
      }),
      invalidatesTags: ['Post']
    }),
    getPosts: build.query<IGetPosts[], null>({
      query: () => ({
        url: '/uploads',
        method: 'GET'
      }),
      providesTags: result => ['Post']
    })
  })
})