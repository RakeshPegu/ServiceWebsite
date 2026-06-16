import {createSlice} from '@reduxjs/toolkit'
const authSlice = createSlice({
    name:'Auth',
    initialState: false,
    reducers: {
        loginUser: (state, action )=>{
            state =  action.payload.state
        }
        
    },

})
export const  {loginUser}  = authSlice.actions
export default authSlice