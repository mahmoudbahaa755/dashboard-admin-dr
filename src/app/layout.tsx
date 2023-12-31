import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar/Navbar'
import Header from '@/components/Header/Header'
import NavToggleProvider from '@/hooks/context/NavToggle'
import Theme from '@/components/Themes/Theme'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer/Footer'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import { ReduxProvider } from '@/Redux/provider'
import { useSelector } from 'react-redux'
export default function RootLayout({ children,
}: {
  children: React.ReactNode
}, includeNavbar: boolean = true) {

  // const theme = window.localStorage.getItem('theme');
  
  return (
    <html lang="en">
      <body className={`text-white bg-fixed bg-bg2 rounded-md`}>
        <ReduxProvider>

        <div className='flex flex-col justify-between h-screen'>
          <div className='flex flex-row gap-0 '>
            <NavToggleProvider>
              <div className='bg-inner relative'>
              
                {includeNavbar && <Navbar />}
              
              </div>
              <div className='w-screen'>
                {includeNavbar && <Header />}
                <div className='mt-8'>

                  {children}
                </div>
              </div>
            </NavToggleProvider>
          </div>
          <Footer />
        </div>
        <Theme />
        </ReduxProvider>

      </body>
    </html>
  )
}
