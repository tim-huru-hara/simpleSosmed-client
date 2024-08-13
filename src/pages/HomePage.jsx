import { useState } from "react";
import { useAuth } from "../context/authProvider"
import request from "../utils/axios";
import showToast from "../utils/toast"
import PostsList from "../components/PostList";

export default function HomePage() {
    const { isAuthenticated, userInfo } = useAuth();
    const [description, setDescription] = useState('');
    const [refreshPosts, setRefreshPosts] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            request.post('/post', { description }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            showToast({ message: 'Posted', type: 'success' })
            setDescription('');
            setRefreshPosts(prev => !prev);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {/* post */}
            {isAuthenticated &&
                <div className="flex p-3 border border-gray-700">
                    <div className="w-[12%]">
                        <img className="rounded-xl w-[50px] h-[50px]" src={userInfo.imageUrl} alt="" />
                    </div>
                    <div className="w-[88%] flex flex-col gap-5">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="bg-black text-white outline-none mt-3 w-full"
                                type="text"
                                placeholder="What is happening?!"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <button type="submit" className="text-white font-bold text-right hover:cursor-pointer">Post</button>
                        </form>
                    </div>
                </div>
            }
            <PostsList refreshPosts={refreshPosts} />
        </>
    )
}