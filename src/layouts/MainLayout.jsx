import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';

export default () => {
    return (
        <>
            <div className="flex bg-[#000000] flex-wrap">
                <div className='w-1/3'>
                    <Navbar />
                </div>
                <div className="w-1/3 h-screen overflow-scroll no-scrollbar scroll-m-10 border border-l-gray-700 border-r-gray-700 border-t-black border-b-black">
                    <Outlet />
                </div>
                <div className='w-1/3'>
                    <Leftbar />
                </div>
            </div>
        </>
    )
}