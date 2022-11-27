import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userInfo } from '../App'
const PrivateRoute = ({children}) => {
    const {myUser} = useContext(userInfo)
    
  return (
    <div>
        {myUser ? children : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRoute