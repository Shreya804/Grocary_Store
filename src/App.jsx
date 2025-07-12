import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppContext } from './context/AppContext'

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Grocery Store Management System
        </h1>
        <p className="text-gray-600">
          Welcome to your grocery store management dashboard
        </p>
      </div>
    </div>
  )
}

export default App