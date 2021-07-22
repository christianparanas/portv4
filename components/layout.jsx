import Nav from './Nav'


export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <div className="footer">&#169; 2021 Christian Paranas</div>
    </>
  )
}