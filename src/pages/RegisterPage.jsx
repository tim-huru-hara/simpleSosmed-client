import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import request from "../utils/axios"
import showToast from "../utils/toast"
import Footer from "../components/Footer"

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await request.post("/register", {
                username: username,
                email: email,
                password: password
            })
            showToast({ message: 'success Sign Up', type: 'success' })
            navigate("/login")
        } catch (err) {
            showToast({ message: 'failed Sign Up' })
        }
    }

    return (
        <div className="bg-[#0E1217] w-screen h-screen p-5 flex flex-col justify-between">
            <p className="text-white text-xl">Simple Sosmed</p>
            <form onSubmit={handleSubmit} className="grid w-full justify-center gap-4">
                <h1 className="text-white text-center text-2xl w-[400px] font-bold">Sign Up</h1>


                <div className="flex items-center">
                    <div className="border-t border-[#2D323C] flex-grow"></div>
                    <span className="mx-4 text-[#6A7280] text-xl">or</span>
                    <div className="border-t border-[#2D323C] flex-grow"></div>
                </div>

                <div className="grid gap-4 text-xl">
                <input id="email" name='email' className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm" type="text" placeholder="username"  value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    <input id="email" name='email' className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm" type="text" placeholder="Email"  value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    <input id="password" name='password' className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm" type="password" placeholder="Password"  value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-center items-center my-3">
                    {/* <p className="text-[#A8B3CF] font-normal underline">Forgot password?</p> */}
                    <button type="submit" className="bg-white px-14 py-2 rounded-md font-bold">Sign Up</button>
                </div>

                <div className="border-t border-[#2D323C] flex-grow"></div>
                <p className="text-[#A8B3CF] text-center">Not a member yet? <Link to='/login' className="text-white underline hover:cursor-pointer">Log in</Link></p>
            </form>
            <Footer />
        </div>
    )
}