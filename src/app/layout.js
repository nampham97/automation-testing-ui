import { Inter } from 'next/font/google'
import './assert/css/globals.css'
import './assert/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Autotest - npd',
  description: 'Automation testing for saalem',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  )
}
