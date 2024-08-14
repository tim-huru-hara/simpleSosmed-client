import { useEffect, useState } from "react";
import request from "../utils/axios";
import { useAuth } from "../context/authProvider";

export default function PostsList({ refreshPosts, setRefreshPosts }) {
  const [data, setData] = useState([]);
  const [like, setLikes] = useState([]);
  const { userInfo, socket, onEvent, offEvent } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await request.get("/post", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(socket);
    if (socket) {
      onEvent("update_posts", (payload) => {
        console.log(payload);
        fetchData();
      });
    }
  }, [refreshPosts, onEvent]);

  const handleLike = async (e) => {
    e.preventDefault();

    const { id } = data.id;

    try {
      request.post(
        `/likes/${id}`,
        { username: userInfo.username },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      showToast({ message: "Liked", type: "success" });
      setDescription("");
      emitEvent("new_likes", { username });
      setRefreshPosts((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  if (data)
    return (
      <>
        {data.map((e, i) => {
          return (
            <div key={i} className="flex p-3 border border-gray-700">
              <div className="w-[12%]">
                <img
                  className="rounded-xl w-[50px] h-[50px]"
                  src={e.User.imageUrl}
                  alt=""
                />
              </div>
              <div className="w-[88%]">
                <p className="text-white font-bold">{e.User.username}</p>
                <p className="text-white text-sm opacity-85">{e.description}</p>
                <div className="flex justify-start gap-5 mt-1">
                  <div
                    className="flex items-center content-center gap-1 opacity-50 hover:opacity-100 hover:cursor-pointer"
                    onClick={handleLike}
                  >
                    <div className="flex">
                      <svg
                        fill="#ffffff"
                        height="15px"
                        width="15px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 503.876 503.876"
                        xmlSpace="preserve"
                        opacity="70%"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M469.361,71.689c-32.071-35.681-70.026-54.532-109.761-54.532c-44.309,0-84.27,27.01-107.654,71.638 c-23.334-44.628-62.993-71.638-106.857-71.638c-39.743,0-76.649,18.331-109.719,54.482 C-3.392,114.042-25.273,210.34,50.889,282.356c35.143,33.221,193.779,200.074,195.374,201.753c1.586,1.662,3.785,2.61,6.077,2.61 h0.008c2.291,0,4.482-0.94,6.068-2.594c1.603-1.679,160.667-168.163,195.458-201.837 C528.576,209.962,507.274,113.866,469.361,71.689z" />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <p className="text-white">{e.likes ? e.likes.length : 0}</p>
                  </div>
                  <div className="flex items-center content-center gap-1 opacity-50 hover:opacity-100 hover:cursor-pointer">
                    <div className="flex">
                      <svg
                        fill="#ffffff"
                        height="15px"
                        width="15px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 60 60"
                        xmlSpace="preserve"
                        stroke="#ffffff"
                        opacity="70%"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z" />{" "}
                        </g>
                      </svg>
                    </div>
                    <p className="text-white">
                      {e.comment ? e.comment.length : 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
}
