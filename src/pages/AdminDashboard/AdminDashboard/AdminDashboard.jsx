import AdminDashboardNavbar from '../../../components/AdminDashboardNavbar/AdminDashboardNavbar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
    return (
        <div>
            <AdminDashboardNavbar />
            <Outlet />
        </div>
    )
}

export default AdminDashboard