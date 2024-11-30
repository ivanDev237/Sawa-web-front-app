import React from 'react';
import { Search, X } from 'lucide-react'; // Importation de l'icône X

interface SearchModalProps {
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-white p-4 rounded shadow-lg" onClick={e => e.stopPropagation()}>
                <button className="absolute top-2 right-2" onClick={onClose}>
                    <X className="h-8 w-8 font-bold text-red-600" /> {/* Icône X rouge, plus grande et plus épaisse */}
                </button>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-200 text-black p-3 rounded-tl-full rounded-bl-full focus:outline-none flex-1"
                    />
                    <button className="bg-gray-200 p-3 rounded-tr-full rounded-br-full duration-200 hover:bg-gray-300">
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
