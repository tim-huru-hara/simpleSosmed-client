import { Link, NavLink, useNavigate } from "react-router-dom"
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
            <div className="text-white text-end flex flex-col gap-4 p-10 text-2xl font-thin opacity-80 ps-[350px] pt-15">
                <NavLink to='/' className='hover:cursor-pointer flex justify-start gap-2'>
                    <>
                        {/*?xml version="1.0" encoding="utf-8"?*/}
                        {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 1024 1024"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M981.4 502.3c-9.1 0-18.3-2.9-26-8.9L539 171.7c-15.3-11.8-36.7-11.8-52 0L70.7 493.4c-18.6 14.4-45.4 10.9-59.7-7.7-14.4-18.6-11-45.4 7.7-59.7L435 104.3c46-35.5 110.2-35.5 156.1 0L1007.5 426c18.6 14.4 22 41.1 7.7 59.7-8.5 10.9-21.1 16.6-33.8 16.6z"
                                fill="#5F6379"
                            />
                            <path
                                d="M810.4 981.3H215.7c-70.8 0-128.4-57.6-128.4-128.4V534.2c0-23.5 19.1-42.6 42.6-42.6s42.6 19.1 42.6 42.6v318.7c0 23.8 19.4 43.2 43.2 43.2h594.8c23.8 0 43.2-19.4 43.2-43.2V534.2c0-23.5 19.1-42.6 42.6-42.6s42.6 19.1 42.6 42.6v318.7c-0.1 70.8-57.7 128.4-128.5 128.4z"
                                fill="#3688FF"
                            />
                        </svg>
                        <p>Home</p>
                    </>
                </NavLink>
                <div className="flex justify-start gap-2">
                    <svg
                        fill="#ffffff"
                        height="25px"
                        width="25px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 490.4 490.4"
                        xmlSpace="preserve"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                                {" "}
                                <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z" />{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <p>Explore</p>
                </div>
                <Link className="flex justify-start gap-2">

                        <svg
                            height="25px"
                            width="25px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 415.59 415.59"
                            xmlSpace="preserve"
                            fill="#ffffff"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <g>
                                    {" "}
                                    <path
                                        style={{ fill: "none" }}
                                        d="M207.795,24C106.451,24,24,106.45,24,207.793c0,101.346,82.451,183.797,183.795,183.797 c101.344,0,183.795-82.451,183.795-183.797C391.59,106.45,309.139,24,207.795,24z M322.508,109.027l-0.098,0.181 c-0.137,0.283-0.287,0.558-0.445,0.83l-72.305,134.701c-1.115,2.073-2.814,3.773-4.889,4.887l-135.131,72.572 c-0.048,0.026-0.096,0.053-0.145,0.078l-0.051,0.027l-0.002-0.003c-3.391,1.735-7.548,1.836-11.156-0.105 c-1.06-0.569-2-1.275-2.809-2.085c-3.648-3.648-4.648-9.389-2.08-14.166l72.596-135.034c1.114-2.073,2.813-3.773,4.887-4.888 l135.065-72.625c5.838-3.139,13.113-0.952,16.252,4.887c1.861,3.463,1.836,7.427,0.299,10.738L322.508,109.027z"
                                    />{" "}
                                    <polygon
                                        style={{ fill: "none" }}
                                        points="133.371,282.278 219.172,236.141 179.502,196.47 "
                                    />{" "}
                                    <path
                                        style={{ fill: "#fcfcfc" }}
                                        d="M207.795,0C93.217,0,0,93.216,0,207.793C0,322.372,93.217,415.59,207.795,415.59 c114.578,0,207.795-93.218,207.795-207.797C415.59,93.216,322.374,0,207.795,0z M207.795,391.59 C106.451,391.59,24,309.139,24,207.793C24,106.45,106.451,24,207.795,24C309.139,24,391.59,106.45,391.59,207.793 C391.59,309.139,309.139,391.59,207.795,391.59z"
                                    />{" "}
                                    <polygon
                                        style={{ fill: "#73d0f4" }}
                                        points="236.153,219.179 282.282,133.371 196.48,179.507 "
                                    />{" "}
                                    <path
                                        style={{ fill: "#fcfcfc" }}
                                        d="M322.198,98.284c-3.139-5.839-10.414-8.025-16.252-4.887l-135.065,72.625 c-2.073,1.115-3.773,2.814-4.887,4.888L93.398,305.945c-2.568,4.777-1.568,10.518,2.08,14.166c0.809,0.81,1.748,1.516,2.809,2.085 c3.608,1.94,7.766,1.84,11.156,0.105l0.002,0.003l0.051-0.027c0.049-0.025,0.097-0.052,0.145-0.078l135.131-72.572 c2.074-1.114,3.773-2.813,4.889-4.887l72.305-134.701c0.158-0.272,0.309-0.547,0.445-0.83l0.098-0.181l-0.012-0.004 C324.034,105.711,324.059,101.747,322.198,98.284z M133.371,282.278l46.131-85.808l39.67,39.671L133.371,282.278z M236.153,219.179 l-39.672-39.672l85.801-46.136L236.153,219.179z"
                                    />{" "}
                                </g>{" "}
                            </g>
                        </svg>
                        <p>Trending</p>


                </Link>

                {isAuthenticated ? (
                    <>
                        <Link to='/message' className='hover:cursor-pointer flex justify-start gap-2'>

                            <svg
                                height="25px"
                                width="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                </g>
                            </svg>
                            <p>Message</p>
                        </Link>
                        <Link to='/profile/edit' className='hover:cursor-pointer flex justify-start gap-2'>

                            <svg
                                height="25px"
                                width="25px"
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>profile_round [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
                                    <defs> </defs>{" "}
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        {" "}
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-140.000000, -2159.000000)"
                                            fill="#ffffff"
                                        >
                                            {" "}
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                {" "}
                                                <path
                                                    d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                                                    id="profile_round-[#ffffff]"
                                                >
                                                    {" "}
                                                </path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                            <p>Profile</p>
                        </Link>
                        <div className="flex justify-start gap-2">
                            
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                height="25px"
                                width="25px">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M21 12L13 12"
                                        stroke="#DC2626"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                                        stroke="#af1d1d"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                                        stroke="#DC2626"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                </g>
                            </svg>
                            <p className="text-[#DC2626] opacity-70 hover:cursor-pointer" onClick={handleLogout} >Log Out</p>
                        </div>
                    </>
                ) : (
                    <Link
                        to='/login'
                        className='hover:cursor-pointer'>
                        <p className="hover:cursor-pointer">Login</p>
                    </Link>
                )}
            </div>
        </>
    )
}