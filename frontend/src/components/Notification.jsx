import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { creatorResetNotification } from "../reducers/notificationReducer"

const Notification = () => {
    const styleMsg = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        color: 'green'
    }
    const styleErr = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        color: 'red'
    }
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)
    
    // console.log("notification",notification)
    // useEffect(() => {
    //     if (notification) {
    //         const timeoutId = setTimeout(() => {
    //             dispatch(creatorResetNotification());
    //         }, 5000);
    //         return () => clearTimeout(timeoutId);
    //     }
    // }, [notification, dispatch]);

    return (
        <div>
            {
                notification 
                ? (
                    <div style={notification.type === "err" ? styleErr : styleMsg}>
                        <div>
                            {notification.type} : {notification.msg}
                        </div>
                    </div>
                )
                : null
            }

        </div>
        
    )
}

export default Notification