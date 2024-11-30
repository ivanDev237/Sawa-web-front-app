import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import sawa_logo from "../../Assets/imgs/sawa_logo.jpg";
import { useNavigate } from "react-router-dom";
import PartnerMenuListes from "../../constants/sideBarPartnerLinks";
import "./style.css";

interface SidebarProps {
    active: string;
    onSelect: (option: string) => void;
    className?: string;
}

const PartnerSidebar: React.FC<SidebarProps> = ({ active, onSelect, className }) => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
    const navigate = useNavigate();

    const handleToggle = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleSelect = (option: string) => {
        onSelect(option);
        navigate(option);
    };

    return (
        <div className={`sidebar bg-white text-black w-72 p-4 transition-transform duration-300 border-r-2 z-10 border-gray-400 ${className}`}>
            <div className="flex items-center mb-8">
                <img src={sawa_logo} alt="sawa_logo" />
            </div>
            <div className="space-y-10 mt-16">
                {PartnerMenuListes.map((menu) => {
                    const sectionKey = menu.title || menu.label; // Ensure a string key is always used
                    return (
                        <div key={sectionKey}>
                            {/* Section Header */}
                            <div
                                onClick={() => handleToggle(sectionKey)}
                                className="cursor-pointer flex justify-between items-center mt-4"
                            >
                                <span>{menu.title || menu.label}</span>
                                <ChevronDown
                                    className={`transform transition-transform ${
                                        expandedSections[sectionKey] ? "rotate-180" : ""
                                    }`}
                                />
                            </div>

                            {/* Submenu */}
                            {expandedSections[sectionKey] && (
                                <div className="pl-4 mt-4 space-y-4">
                                    {menu.subMenu
                                        ? menu.subMenu?.map((sub) => (
                                            <div
                                                key={sub.link}
                                                onClick={() => handleSelect(sub.link)}
                                                className={`cursor-pointer font-bold text-md duration-100 ease-in-out hover:bg-green-300 hover:text-green-600 hover:border-2 border-green-800 hover:p-2 rounded-md ${
                                                    active === sub.link
                                                        ? "bg-green-300 text-green-600 border-2 border-green-800 p-2 rounded-md"
                                                        : ""
                                                }`}
                                            >
                                                {menu.icon && <menu.icon className="inline mr-2" />} {sub.label}
                                            </div>
                                        ))
                                        
                                        : menu.link && (
                                            <div
                                                onClick={() => handleSelect(menu.link || "")} // Ensure menu.link is defined
                                                className={`cursor-pointer font-bold text-md duration-100 ease-in-out hover:bg-green-300 hover:text-green-600 hover:border-2 border-green-800 hover:p-2 rounded-md ${
                                                    active === menu.link
                                                        ? "bg-green-300 text-green-600 border-2 border-green-800 p-2 rounded-md"
                                                        : ""
                                                }`}
                                            >
                                                {menu.icon && <menu.icon className="inline mr-2" />} {menu.label}
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PartnerSidebar;
