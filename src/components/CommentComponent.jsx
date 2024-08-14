import { useState } from "react";
import request from "../utils/axios";
import showToast from "../utils/toast";
import { formatRelativeTime } from "../utils/relativeTime";
import { useAuth } from "../context/authProvider";

export default ({ e, setRefreshPosts }) => {
    const { emitEvent, userInfo } = useAuth();
    const [comment, setComment] = useState([]);
    const username = userInfo.username
    const id = e.id

    const handleComment = async (e) => {
        e.preventDefault();

        // nanti kalo ada yang post comment ini yang di pake ya Rofiq

        // const { id } = data.id; // ambil id dari postnya jangan lupa

        try {
            request.post(
                `/comments/${id}`,
                { username: username, comment: comment },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setComment("");
            emitEvent("new_likes", { username });
            setRefreshPosts((prev) => !prev);
            showToast({ message: "Comment added", type: "success" });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>

                <form className="w-full mt-2" onSubmit={handleComment}>
                    <div className="relative">
                        <input
                            name='comment'
                            type="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            id="comment-input"
                            className="block w-full p-1 ps-3 text-sm rounded-lg bg-[#1D1F25] autofill:bg-[#1D1F25] outline-none border text-white border-transparent focus:border-[#383D48]"
                            placeholder="Add comment"
                        />
                    </div>
                </form>


            <div className="flex flex-col-reverse mt-3">
            {e.comments ?
                e.comments.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className="flex justify-between">
                                <p className="text-white">{e.username}</p>
                                <p className="text-white text-opacity-50">{formatRelativeTime(e.date)}</p>
                            </div>
                            <p className="text-white text-opacity-50">{e.comment}</p>
                            {i !==0 &&
                            <hr className="my-2 border border-gray-700"></hr>
                            }
                        </div>
                    )
                })
                : ''}
            </div>
        </>
    )
}