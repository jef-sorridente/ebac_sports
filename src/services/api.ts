import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '//fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getprodutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetprodutosQuery } = api

export default api
