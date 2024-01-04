import React from 'react'

const MainPage = ({ children }) => {
  return (
    <>
    <h2>Navbar</h2>
      <div>
        {children}
      </div>
      <h2>Footer</h2>
    </>
  )
}

export default MainPage