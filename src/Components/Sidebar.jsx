import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { navRoutes } from './Routes';

function Sidebar() {
    const [active, setActive] = useState(false);
    const menuItems = ['Mission', 'Launches', 'Careers', 'Updates', 'Shop'];

    return (
        <>
            {/* Sidebar Toggle Button */}
            <button onClick={() => setActive(true)} className="text-sm hover:scale-110 transition-transform">
                ☰
            </button>

        
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 w-96 rounded-xl min-h-screen bg-black z-50 p-5 transition-transform duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end">
                    <RxCrossCircled className="text-3xl cursor-pointer" onClick={() => setActive(false)} />
                </div>

                <div className="mt-5 space-y-4 ">
                    {menuItems.map((item) => (
                        <Link to={`/${item.toLowerCase()}`} key={item} className="block p-2 text-lg font-semibold border-b border-gray-600 hover:bg-gray-800">
                            {item}
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Sidebar;
