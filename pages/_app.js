import React from 'react'
import { Toaster } from 'react-hot-toast'

import StateContext from '../Context/StateContext'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
       <Component {...pageProps} />
    </StateContext>
  )
}

export default MyApp
