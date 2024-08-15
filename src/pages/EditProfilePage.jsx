import { useState } from "react"
import { useNavigate } from "react-router-dom";
import request from "../utils/axios";

export default function EditProfilePage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [imageUrl, setImageUrl] = useState('');

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
        <div className="bg-[#0E1217] w-screen h-screen p-5">
            <h2 className="text-white text-xl">Edit profile</h2>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        name="username"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text"
                        id="InputUsername"
                        placeholder=" "
                        required=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label
                        htmlFor="username"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Username
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        name="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="password"
                        id="InputPassword"
                        placeholder=" "
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Password
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        name="bio"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text"
                        id="InputBio"
                        placeholder=" "
                        required=""
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <label
                        htmlFor="bio"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Bio
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        name="imageUrl"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text"
                        id="InputImageUrl"
                        placeholder=" "
                        required=""
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <label
                        htmlFor="imageUrl"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >ImageUrl
                    </label>
                </div>
                <button
                    className="bg-white px-14 py-2 rounded-md font-bold"
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}