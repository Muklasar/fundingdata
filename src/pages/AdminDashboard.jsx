import { Navigate } from "react-router-dom"

const AdminDashboard = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to='/sign-in' />
    }
    return (
        <div>
            <Nav />
            AdminDashboard
        </div>
    )
}

export default AdminDashboard