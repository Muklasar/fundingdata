import { Navigate } from "react-router-dom"
import Nav from "../components/nav/Nav"

const UserDashboard = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to='/sign-in' />
    }
    return (
        <div>
            <Nav />
            <div className="text-center pt-5 fs-2">
                UserDashboard
            </div>
        </div>
    )
}

export default UserDashboard