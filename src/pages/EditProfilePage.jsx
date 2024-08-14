import { useState } from "react"
import { useNavigate } from "react-router-dom";
import request from "../utils/axios";

export default function EditProfilePage() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ imageUrl, setImageUrl] = useState('');

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await request.put('/user/edit', {
                username,
                password,
                bio,
                imageUrl
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.token
                }
            });
            nav('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-[#0E1217] w-screen h-screen p-5 flex flex-col justify-between">
            <h2 className="text-white text-xl">Edit profile</h2>
            <form onSubmit={handleSubmit}>  
                <label htmlFor="" className="text-white text-xl">Username</label>
                <input
                    className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm"
                    type="text"
                    id="InputUsername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="" className="text-white text-xl">Password</label>
                <input
                    className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm"
                    type="password"
                    id="InputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="" className="text-white text-xl">Bio</label>
                <input
                    className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm"
                    type="text"
                    id="InputBio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <label htmlFor="" className="text-white text-xl">ImageUrl</label>
                <input
                    className="bg-[#20252D] rounded-md px-5 py-2 text-white text-sm"
                    type="text"
                    id="InputImageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button
                    className="bg-white px-14 py-2 rounded-md font-bold"
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}