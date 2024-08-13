import showToast from "../utils/toast"

const posts = [
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'ai',
        imageUrl: 'https://pbs.twimg.com/profile_images/1823267684886392832/ll1EASAy_400x400.jpg',
        description: 'Mirip kejadian plot twist yang dialami kakak aku. Selama 4/5 tahun dia diem2 bawa-bawa tumor miom sampai seberat 6 kg. Awalnya keluarga selalu bingung kenapa dia kalau jalan sering nyeret kakinya, dan gak mau pakai celana. Baju pun selalu sepanjang lutut.',
        comment: 150,
        like: 1000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'ai',
        imageUrl: 'https://pbs.twimg.com/profile_images/1823267684886392832/ll1EASAy_400x400.jpg',
        description: 'Mirip kejadian plot twist yang dialami kakak aku. Selama 4/5 tahun dia diem2 bawa-bawa tumor miom sampai seberat 6 kg. Awalnya keluarga selalu bingung kenapa dia kalau jalan sering nyeret kakinya, dan gak mau pakai celana. Baju pun selalu sepanjang lutut.',
        comment: 150,
        like: 1000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'ai',
        imageUrl: 'https://pbs.twimg.com/profile_images/1823267684886392832/ll1EASAy_400x400.jpg',
        description: 'Mirip kejadian plot twist yang dialami kakak aku. Selama 4/5 tahun dia diem2 bawa-bawa tumor miom sampai seberat 6 kg. Awalnya keluarga selalu bingung kenapa dia kalau jalan sering nyeret kakinya, dan gak mau pakai celana. Baju pun selalu sepanjang lutut.',
        comment: 150,
        like: 1000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'ai',
        imageUrl: 'https://pbs.twimg.com/profile_images/1823267684886392832/ll1EASAy_400x400.jpg',
        description: 'Mirip kejadian plot twist yang dialami kakak aku. Selama 4/5 tahun dia diem2 bawa-bawa tumor miom sampai seberat 6 kg. Awalnya keluarga selalu bingung kenapa dia kalau jalan sering nyeret kakinya, dan gak mau pakai celana. Baju pun selalu sepanjang lutut.',
        comment: 150,
        like: 1000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'ai',
        imageUrl: 'https://pbs.twimg.com/profile_images/1823267684886392832/ll1EASAy_400x400.jpg',
        description: 'Mirip kejadian plot twist yang dialami kakak aku. Selama 4/5 tahun dia diem2 bawa-bawa tumor miom sampai seberat 6 kg. Awalnya keluarga selalu bingung kenapa dia kalau jalan sering nyeret kakinya, dan gak mau pakai celana. Baju pun selalu sepanjang lutut.',
        comment: 150,
        like: 1000
    },
    {
        userName: 'Elon Musk',
        imageUrl: 'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
        description: 'Happy to host Kamala on an 𝕏 Spaces too, letsgoo booooys',
        comment: 2000,
        like: 2000
    },
    {
        userName: 'ai',
        imageUrl: 'https://pbs.twimg.com/profile_images/1823267684886392832/ll1EASAy_400x400.jpg',
        description: 'Mirip kejadian plot twist yang dialami kakak aku. Selama 4/5 tahun dia diem2 bawa-bawa tumor miom sampai seberat 6 kg. Awalnya keluarga selalu bingung kenapa dia kalau jalan sering nyeret kakinya, dan gak mau pakai celana. Baju pun selalu sepanjang lutut.',
        comment: 150,
        like: 1000
    },
]

const currentUser = {
    userName: 'rofiq',
    imageUrl: 'https://pbs.twimg.com/profile_images/1057274167253336065/hHVlpCM4_400x400.jpg',
}
export default () => {
    const notify = () => showToast({ message: "Hello" })

    return (
        <>
            {/* post */}
            <div className="flex p-3 border border-gray-700">
                <div className="w-[12%]">
                    <img className="rounded-xl w-[50px]" src={currentUser.imageUrl} alt="" />
                </div>
                <div className="w-[88%] flex flex-col gap-5">
                    <form action="">
                        <input
                            className="bg-black text-white outline-none mt-3 w-full"
                            type="text"
                            placeholder="What is happening?!"
                        />
                    </form>
                    <p className="text-white font-bold text-right hover:cursor-pointer">Post</p>
                </div>


            </div>
            {posts.map(e => {
                return (
                    <>
                        <div className="flex p-3 border border-gray-700">
                            <div className="w-[12%]">
                                <img className="rounded-xl w-[50px]" src={e.imageUrl} alt="" />
                            </div>
                            <div className="w-[88%]">
                                <p className="text-white font-bold">{e.userName}</p>
                                <p className="text-white text-sm opacity-85">{e.description}</p>
                                <div className="flex justify-start gap-5 mt-1">
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
                                                opacity='70%'
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z" />{" "}
                                                </g>
                                            </svg>

                                        </div>
                                        <p className="text-white">{e.like}</p>
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
                                                opacity='70%'
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z" />{" "}
                                                </g>
                                            </svg>

                                        </div>
                                        <p className="text-white">{e.like}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </>
                )
            })}
        </>
    )
}