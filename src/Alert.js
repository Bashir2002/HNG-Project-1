import React, { useEffect, useContext } from 'react'
// import { AppContext } from './context'

const Alert = ({ msg, type, rem }) => {
  //   const { showAlert, list, alert } = useContext(AppContext)
  useEffect(() => {
    const timeout = setTimeout(() => {
      rem()
    }, 300000)
    return () => clearTimeout(timeout)
  }, [])
  return <p className={` alert-${type}`}>{msg}</p>
}

export default Alert
