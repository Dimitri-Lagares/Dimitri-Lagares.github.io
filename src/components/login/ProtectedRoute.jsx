import { React } from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom'

const ProtectedRoute = ({
    isAllowed,
    redirectTo = '/inicio-sesion',
    children
}) => {

    if (!isAllowed) {
        return <Navigate to={redirectTo}/>
    }
  return children ? children : <Outlet/>
}

export default ProtectedRoute