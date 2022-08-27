import {configureStore} from '@reduxjs/toolkit'
import directionReducer from './directionSlice'
import filterReducer from './filterSlice'
import tradeReducer from './tradeSlice'

export default configureStore ({
  reducer: {
    filters: filterReducer,
    directions: directionReducer,
    trades: tradeReducer,
  }
})