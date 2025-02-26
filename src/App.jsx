import React from 'react'
import {
  Header, Footer
} from "./Components"
import { Outlet } from 'react-router'
function App() {
  return (
    <div className='text-xl'>
      <Header />

      <Outlet />
      <Footer />
    </div>
  )
}

export default App