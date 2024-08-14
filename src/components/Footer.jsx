import { Link } from "react-router-dom"

export default () => {
    return (
        <div className="flex justify-center gap-3 font-light text-xs">
            <p className="text-[#A8B3CF] text-center">@ 2024 Dev Place Ltd.</p>
            <p className="text-[#A8B3CF] text-center">Guidelines</p>
            <Link to='/'>
                <p className="text-[#A8B3CF] text-center hover:cursor-pointer hover:text-white">Explore</p>
            </Link>
            <p className="text-[#A8B3CF] text-center">Tags</p>
            <p className="text-[#A8B3CF] text-center">Sources</p>
            <p className="text-[#A8B3CF] text-center">Squads</p>
            <p className="text-[#A8B3CF] text-center">Leaderboard</p>
        </div>
    )
}