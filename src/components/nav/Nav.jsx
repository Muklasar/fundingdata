import { Link, useNavigate } from "react-router-dom"

const Nav = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const Logout = () => {
    localStorage.removeItem('token')
    navigate('/sign-in')
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <h2 className="fs-5 ms-3">Funding Data</h2>
        <div className="d-flex align-items-center justify-content-between">
          {!token ?
            <div>
              <Link to="/sign-in">
                <div className="btn ps-3 pe-3 pt-1 pb-1 text-center border-primary me-4">Sign in</div>
              </Link>
              <Link to="/sign-up">
                <div className="btn ps-3 pe-3 pt-1 pb-1 text-center border-primary me-2">Sign up</div>
              </Link>
            </div>
            :
            <div>
              <Link to="/">
                <div className="btn ps-3 pe-3 pt-1 pb-1 text-center border-primary me-4">Dashboard</div>
              </Link>
              {/* <Link to="/user-data">
                <div className="btn ps-3 pe-3 pt-1 pb-1 text-center border-primary me-4">User Data</div>
              </Link> */}
              <div className="btn ps-3 pe-3  pt-1 pb-1 text-center border-primary me-4" onClick={Logout}>Sign out</div>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}
export default Nav