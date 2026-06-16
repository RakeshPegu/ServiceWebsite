import {configureStore} from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'

export const store = configureStore({
    reducer: {
        login: authSlice.reducer
    },
    devTools:true
})
export default store