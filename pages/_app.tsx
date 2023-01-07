import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import * as dotenv from 'dotenv'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

dotenv.config()

export default function App({ Component, pageProps }: AppProps) {
  
  const [isSSR, setIsSSR] = useState(true)

  useEffect(()=> {
    setIsSSR(false)
  }, [])
  
  if(isSSR) return null


  
  console.log('process.env.REACT_PUBLIC_GOOGLE_API_KEY', process.env.REACT_PUBLIC_GOOGLE_API_KEY)

  return (
    <GoogleOAuthProvider clientId='{process.env.REACT_PUBLIC_GOOGLE_API_KEY}'>
      <div>
        <Navbar />
        <div className='flex gap-6 md:gap-20'>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto '>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}