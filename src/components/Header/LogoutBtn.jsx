import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block px-4 py-3 text-lg duration-200 hover:bg-orange-500 font-bold hover:text-white rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn