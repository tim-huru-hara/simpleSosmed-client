import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import request from "../utils/axios"
import showToast from "../utils/toast"
import { useAuth } from "../context/authProvider"
import Footer from "../components/Footer"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await request.post("/login", {
                email: email,
                password: password
            })
            login(response.data.access_token)
            showToast({ message: 'success Log in', type: 'success' })
            navigate("/")
        } catch (err) {
            showToast({ message: 'failed Log in' })
        }
    }

    return (
        <div className="bg-[#0E1217] w-screen h-screen p-5 flex flex-col justify-between">
            <p className="text-white text-xl">Dev Place</p>
            <form onSubmit={handleSubmit} className="grid w-full justify-center gap-4">
                <h1 className="text-white text-center text-2xl w-[400px] font-bold">Log in</h1>

                <div className="flex items-center">
                    <div className="border-t border-[#2D323C] flex-grow"></div>
                    <span className="mx-4 text-[#6A7280] text-xl">or</span>
                    <div className="border-t border-[#2D323C] flex-grow"></div>
                </div>

                <div className="grid gap-4 text-xl">
                    <input id="email" name='email' className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm" type="text" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input id="password" name='password' className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm" type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-between items-center my-3">
                    <p className="text-[#A8B3CF] font-normal underline">Forgot password?</p>
                    <button type="submit" className="bg-white px-14 py-2 rounded-md font-bold">Log in</button>
                </div>

                <div className="border-t border-[#2D323C] flex-grow"></div>
                <p className="text-[#A8B3CF] text-center">Not a member yet? <Link to='/register' className="text-white underline hover:cursor-pointer">Sign up</Link></p>
            </form>
            <Footer />
        </div>
    )
}