import Nav from './Nav'


export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
      <div className="footer"><div className="ff">&#169; 2021 Christian Paranas</div></div>
    </div>
  )
}