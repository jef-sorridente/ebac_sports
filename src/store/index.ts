import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favorito'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
