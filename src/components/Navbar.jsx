import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authProvider"
import showToast from "../utils/toast"

export default () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        logout();
        showToast({ message: 'success Logout', type: 'success' })
        navigate("/login")
    }

    return (
        <>
            <div className="text-white text-end flex flex-col gap-4 p-10">
                <p>Home</p>
                <p>Explore</p>
                <p>Treinding</p>
                {isAuthenticated ? (
                    <>
                        <Link to='/message' className='hover:cursor-pointer'>
                            <p>Message</p>
                        </Link>
                        <p>Profile</p>
                        <p>Post</p>
                        <p className="text-orange-600 opacity-70 hover:cursor-pointer" onClick={handleLogout} >Log Out</p>
                    </>
                ) : (
                    <Link to='/login' className='hover:cursor-pointer'>
                        <p className="hover:cursor-pointer">Login</p>
                    </Link>
                )}
            </div>
        </>
    )
}