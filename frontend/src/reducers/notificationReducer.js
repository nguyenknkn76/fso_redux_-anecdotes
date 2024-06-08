import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     type: 'msg',
//     msg: 'hello this is msg'
// }
const initialState = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        creatorSendNotification(state, action){
            return action.payload
        },
        creatorResetNotification(state, action) {
            return null; // Reset the notification state
        },
    }
})

export const {creatorResetNotification, creatorSendNotification} = notificationSlice.actions
export const setNoti = (noti, time) => {
    return async dispatch => {
        dispatch(creatorSendNotification(noti))
        setTimeout(()=>{
            dispatch(creatorResetNotification())
        }, time * 1000)
    }
}
export default notificationSlice.reducer
