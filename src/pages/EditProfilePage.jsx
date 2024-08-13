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
            nav('/profile')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Edit profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input
                    type="text"
                    id="InputUsername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    id="InputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="">Bio</label>
                <input
                    type="text"
                    id="InputBio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <label htmlFor="">ImageUrl</label>
                <input
                    type="text"
                    id="InputImageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}