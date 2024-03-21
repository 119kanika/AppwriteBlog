import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true) 
  //when you fetch data from appwrite it might not give data immediately. so it's a good practice to create a loading state for conditional rendering. eg- if loading true then show loading icon, if false then show data.
  //By default we assign loading as true as we'll use useEffect, to uske andar loading ko false kr denge after the app is mounted.

  const dispatch = useDispatch()


  // the instance app loads, use useEffect to ask the service if the user in logged in or not.
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => { //userData from authSlice.js which will be dispatched if data present
      if (userData) { 
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  //here we'll do conditional rendering
  // if loading false
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block min-h-screen flex flex-col'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App