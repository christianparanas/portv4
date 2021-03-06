import Nav from './Nav'

import { useState, useEffect} from 'react'


export default function Layout({ children }) {
  const [footerYear, setFooterYear] = useState(null)

  useEffect(() => {
    setFooterYear(new Date().getFullYear())
  }, [])

  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <div className="footer"><div className="ff">&#169; {footerYear} Christian Paranas</div></div>
    </div>
  )
}