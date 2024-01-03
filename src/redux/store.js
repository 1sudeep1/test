import { configureStore} from '@reduxjs/toolkit'
import userReducer from "../redux/reducersSlice/userSlice"
import counterReducer from "../redux/reducersSlice/counterSlice"
import boxReducer from "../redux/reducersSlice/boxSlice"
import boxCircleReducer from "../redux/reducersSlice/boxCircleSlice"
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter:counterReducer,
    box: boxReducer,
    boxCircle: boxCircleReducer,
  },

  middleware: ()=> [logger]
})