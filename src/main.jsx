import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Requests from "./components/requests/Requests";
import ProtectedRoute from "./components/login/ProtectedRoute"
import './index.css'

var isAllowed = false

const functionToGetchildData = (validateRouteLogin) => {
  if (validateRouteLogin === ''){
    isAllowed=true
  } else {
    isAllowed=false
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute isAllowed={isAllowed}/> }>
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  </HashRouter>
</React.StrictMode>,
)