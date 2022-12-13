import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/nav/Nav'
// import Nav from '../components/nav'
import AuthClient from '../utilities/AuthClient'

const Login = () => {
    const navigate = useNavigate()
    const [successMessage, setSuccessMessage] = useState({
        msg: '',
        show: false
    })
    const [errorMessage, setErrorMessage] = useState({
        msg: '',
        show: false
    })
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const changeHandler = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // setLoading(true)
        const fetchClient = new AuthClient('/users/login/', user)
        const response = fetchClient.postAPI()
        response.then(res => {
            console.log('data', res.data)
            localStorage.setItem('token', res.data.access)
            setUser({
                "email": "",
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
            navigate('/')
            // setTimeout(()=>{
            // }, 4000)
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
            // setLoading(false)
        })
    }
    return (
        <div className='h-100 w-100'>
            <Nav />
            <div className='d-flex align-items-center justify-content-center mt-5 w-100'>
                <form method='POST' className='border p-4 w-50 border-rounded' onSubmit={submitHandler}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3>Sign in</h3>
                        {successMessage.show &&
                            <Link to="/sign-in" className='text-decoration-none'>
                                <div className="alert alert-success ps-3 pe-3 pt-2 pb-2" role="alert">
                                    Signin successfully!! please wait..
                                </div>
                            </Link>}
                        {errorMessage.show &&
                            <div className="alert alert-danger ps-3 pe-3 pt-2 pb-2" role="alert">
                                {errorMessage.msg}
                            </div>}
                    </div>
                    <div className="mb-3 mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={user.email}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={user.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login