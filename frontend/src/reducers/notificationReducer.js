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
            const {type, msg } = action.payload
                return action.payload
        },
        creatorResetNotification(state, action) {
            return null; // Reset the notification state
        },
    }
})

export const {creatorResetNotification, creatorSendNotification} = notificationSlice.actions
export default notificationSlice.reducer
