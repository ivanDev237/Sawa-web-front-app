import React, { useState } from "react";
import { Search, ChevronDown, MenuIcon } from "lucide-react";
import woman from "../../Assets/imgs/SellerImgs/woman.jpeg"
import LanguageDropdown from "../LanguageDropdown";
import SearchModal from "../../Modals/SearchModal";

const PartnerHeader: React.FC = () => { // Plus besoin de la prop `username`
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const toggleSearchModal = () => {
        setIsSearchModalOpen(!isSearchModalOpen);
    };

    return (
        <div className="z-10 top-0 sticky w-full flex items-center justify-between p-2 md:p-3 lg:p-4 bg-white text-black border-b-2 border-black">
            {/* Menu Icon */}
            <div className="cursor-pointer min-[500px]:-ml-2 min-[640px]:ml-2">
                <MenuIcon />
            </div>

            {/* Search Bar */}
            <div className="flex items-center flex-1 mx-2 relative">
                <button
                    className="min-[500px]:hidden bg-gray-200 p-3 rounded-full translate-x-5"
                    onClick={toggleSearchModal}
                >
                    <Search />
                </button>
                <div className="hidden min-[500px]:flex items-center flex-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-200 text-black p-4 rounded-tl-full rounded-bl-full focus:outline-none"
                    />
                    <button className="bg-gray-200 p-4 rounded-tr-full rounded-br-full duration-200 hover:bg-gray-300">
                        <Search />
                    </button>
                </div>
            </div>

            {/* Language Dropdown */}
            <div className="ml-10 hidden min-[638px]:block">
                <LanguageDropdown />
            </div>

            {/* User Icon */}
            <div className="flex items-center">
                <img src={woman} alt="" className="w-14 h-14 rounded-full" />
                <div className="ml-2 flex flex-col">
                    <span className="font-semibold">Username</span>
                    <span className="font-bold text-xl">Seller</span>
                </div>
            </div>

            {/* Search Modal */}
            {isSearchModalOpen && <SearchModal onClose={toggleSearchModal} />}
        </div>
    );
};

export default PartnerHeader;
