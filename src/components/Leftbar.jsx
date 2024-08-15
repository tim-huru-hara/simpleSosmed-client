import { useState, useEffect } from 'react';

export default () => {
    const people = [
        {
            name: 'Taylor Swift',
            imageUrl: 'https://pbs.twimg.com/profile_images/1766836345450672128/HpuBz514_400x400.jpg'
        },
        {
            name: 'Vortex',
            imageUrl: 'https://pbs.twimg.com/profile_images/1781372223619788804/oB2mSlHw_400x400.jpg'
        },
        {
            name: 'Honor of Kings',
            imageUrl: 'https://pbs.twimg.com/profile_images/1742930712075153408/YSypJESY_400x400.jpg'
        }
    ]

    const handleSearch = (event) => {
        event.preventDefault();
        nav("/?search=" + search);
    };

    const [search, setSearch] = useState("");

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if the Command (Mac) or Ctrl (Windows/Linux) key and K key are pressed
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault(); // Prevent the default browser action
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="p-3 flex flex-col gap-3">
            {/* Search  */}
            <div className='flex justify-start w-2/3'>
                <form className="w-full" onSubmit={handleSearch}>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            name='search'
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            id="default-search"
                            className="block w-full p-1 ps-10 text-sm rounded-lg bg-[#1D1F25] autofill:bg-[#1D1F25] outline-none border text-white border-transparent focus:border-[#383D48]"
                            placeholder="Search Something"
                        />
                    </div>
                </form>
            </div>

            <div className="border border-gray-700 w-2/3 rounded-xl py-2 px-4">
                <p className="text-white font-bold text-2xl">Who to follow</p>
                {people.map((e, i) => {
                    return (
                        <div key={i} className="flex my-4 items-center hover:cursor-pointer justify-between">
                            <div className="flex items-center gap-2">

                                <img className="h-[50px] rounded-xl" src={e.imageUrl} alt="" />
                                <p className="text-white hover:underline">{e.name}</p>
                            </div>
                            <p className="bg-[#D7DBDC] px-4 py-1 rounded-xl font-medium">Follow</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}