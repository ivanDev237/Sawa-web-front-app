import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const LanguageDropdown: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClose = () => {
        setIsDropdownOpen(false);
    };


    return (
        <div className="relative">
                <button onClick={toggleDropdown} className="font-medium flex items-center -translate-x-5">
                Français <ChevronDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-50">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-medium" onClick={handleDropdownClose}>English</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-medium" onClick={handleDropdownClose}>Français</li>
                        </ul>
                    </div>
                )}
            </div>
    );
};

export default LanguageDropdown;
