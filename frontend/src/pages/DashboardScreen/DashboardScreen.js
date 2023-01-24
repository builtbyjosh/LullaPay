import React from 'react'
import { useLocation } from 'react-router-dom'

const DashboardScreen = () => {
  const {state: {user_info}} = useLocation()

  console.log('user_info: ', user_info);
  return (
    <div>DashboardScreen</div>
  )
}

export default DashboardScreen