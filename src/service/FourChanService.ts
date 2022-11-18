import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const fourChanAPI = createApi({
  reducerPath: 'fourChanAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    postMessage: build.mutation<string, FormData>({
      query: (message) => ({
        url: '/upload',
        method: 'POST',
        body: message,
        responseHandler: response => response.text()
      }),
      invalidatesTags: ['Post']
    })
  })
})