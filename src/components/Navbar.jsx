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
                <Link to='/' className='hover:cursor-pointer'>
                    <p>Home</p>
                </Link>
                <p>Explore</p>
                <p>Trending</p>
                {isAuthenticated ? (
                    <>
                        <Link to='/message' className='hover:cursor-pointer'>
                            <p>Message</p>
                        </Link>
                        <Link to='/profile/edit' className='hover:cursor-pointer'>
                            <p>Profile</p>
                        </Link>
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