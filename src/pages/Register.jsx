import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/nav/Nav'
import AuthClient from '../utilities/AuthClient'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState({
    msg: '',
    show: false
  })
  const [errorMessage, setErrorMessage] = useState({
    msg: '',
    show: false
  })
  const [user, setUser] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "company_name": "",
    "phone_no": "",
    "password": ""
  })
  const changeHandler = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    const fetchClient = new AuthClient('/users/sign-up/', user)
    const response = fetchClient.postAPI()
    response.then(res => {
      setLoading(false)
      // setMessage(true)
      setUser({
        "first_name": "",
        "last_name": "",
        "email": "",
        "company_name": "",
        "phone_no": "",
        "password": ""
      })
      setErrorMessage({
        msg: '',
        show: false
      })
      setSuccessMessage({
        msg: '',
        show: true
      })
    }).catch(err => {
      console.log('error', err.response.data.message)
      setErrorMessage({
        msg: err.response.data.message,
        show: true
      })
      setSuccessMessage({
        msg: '',
        show: false
      })
      setLoading(false)
    })
  }
  return (
    <div className='h-100 w-100'>
      <Nav />
      <div className='d-flex flex-column align-items-center justify-content-center mt-5 w-100'>
        <form method="POST" className='border p-4 w-50 border-rounded' onSubmit={submitHandler}>
          <div className='d-flex align-items-center justify-content-between'>
            <h3>Sign Up</h3>
            {successMessage.show &&
              <Link to="/sign-in" className='text-decoration-none'>
                <div className="alert alert-success" role="alert">
                  Signup successfully!! please sing-in
                </div>
              </Link>}
            {errorMessage.show &&
              <div className="alert alert-danger ps-3 pe-3 pt-1 pb-1" role="alert">
                {errorMessage.msg}
              </div>}
          </div>
          <div className="mb-3">
            <label className='mb-1'>First Name</label>
            <input
              type="text"
              className="form-control fs-7"
              placeholder="Enter First Name"
              name="first_name"
              value={user.first_name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className='mb-1'>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="last_name"
              value={user.last_name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className='mb-1'>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className='mb-1'>Company Name (* Optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Company Name"
              name="company_name"
              value={user.company_name}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className='mb-1'>Phone Number (* Optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone Number"
              name="phone_no"
              value={user.phone_no}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className='mb-1'>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
            {/* {loading ?
              <button type="submit" className="btn btn-primary">
                Sign up
              </button> :
              <button type="submit" className="btn btn-primary" disabled>
                saving..
              </button>
            } */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
