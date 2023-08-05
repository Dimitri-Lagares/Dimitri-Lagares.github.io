import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Requests from "./components/requests/Requests";
import ProtectedRoute from "./components/login/ProtectedRoute"
import { useState } from 'react';

const App = () => {
    const [isAllowed, setIsAllowed] = useState()
    let previousTitle = document.title

window.addEventListener('blur', () => {
  previousTitle = document.title
  document.title = '¡No te vayas! ¡Vuelve! 😱'
})

window.addEventListener('focus', () => {
  document.title = previousTitle })

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
  }

  return (
  <HashRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="login" element={<Login childToParentData={functionToGetchildData} />} />
      <Route element={<ProtectedRoute isAllowed={isAllowed}/> }>
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  </HashRouter>
  )
}

export default App