import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

import App from './App.jsx'
import anecdoteReducer from './reducers/anecdoteReducer.js'
import notificationReducer, { creatorSendNotification } from './reducers/notificationReducer.js'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer
  }
})

console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})
// store.dispatch(creatorSendNotification({type:"msg", msg:"i luv you"}))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
      <App/>
  </Provider>
)
