import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Star, Phone, Users } from "lucide-react"; 
import woman from "../../../Assets/imgs/SellerImgs/woman.jpeg";
import { PATH_PARTNERS } from "../../../constants/paths"; // Import des chemins

const MyShop: React.FC = () => {
    const followersCount = 150; 
    const rating = 4.5; 

    return (
        <div className="w-4xl mx-auto">
            {/* Bannière */}
            <div className="relative h-72 bg-primary_Green mb-4 w-full">
                <div className="absolute -bottom-14 left-4">
                    <img 
                        src={woman} 
                        alt="Profile" 
                        className="w-40 h-40 rounded-full border-4 border-white" 
                    />
                </div>
            </div>

            {/* Informations sur le vendeur */}
            <div className="mt-16 p-2 space-y-3">
                <h2 className="text-2xl font-bold">Nom de la Boutique</h2>
                <div className="flex items-center mt-2">
                    <Phone className="mr-1 text-green-600" />
                    <p className="text-gray-600 font-semibold">+237 12-34-57-89</p>
                </div>
                <div className="flex items-center mt-2">
                    <Users className="mr-1 text-blue-600" />
                    <p className="text-gray-600 font-semibold">{followersCount} Followers</p>
                </div>
                <div className="flex items-center mt-2">
                    {/* Étoiles de notation */}
                    {[...Array(5)].map((_, index) => {
                        if (index < Math.floor(rating)) {
                            return <Star key={index} className="text-yellow-500" />; // Étoile pleine
                        } else if (index === Math.floor(rating)) {
                            return <Star key={index} className="text-yellow-500 opacity-50" />; // Étoile à moitié pleine
                        } else {
                            return <Star key={index} className="text-gray-300" />; // Étoile vide
                        }
                    })}
                    <span className="ml-2 text-gray-600">{rating} / 5</span>
                </div>
            </div>

            {/* Onglets pour naviguer entre les sous-pages */}
            <div className="flex justify-between items-center mt-6 min-[400px]:p-2">
                <NavLink
                    to={PATH_PARTNERS.MY_SHOP[0].PRODUCT_LIST} // Chemin dynamique
                    className={({ isActive }) =>
                        isActive
                            ? "px-4 py-2 border-2 border-teal-500 text-white bg-teal-500 font-medium rounded-full"
                            : "px-4 py-2 border-2 border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 transition font-medium rounded-full"
                    }
                >
                    Products
                </NavLink>
                <NavLink
                    to={PATH_PARTNERS.MY_SHOP[0].PUBLICATIONS} // Chemin dynamique
                    className={({ isActive }) =>
                        isActive
                            ? "px-4 py-2 border-2 border-teal-500 text-white bg-teal-500 font-medium rounded-full"
                            : "px-4 py-2 border-2 border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 transition font-medium rounded-full"
                    }
                >
                    Publications
                </NavLink>
                <NavLink
                    to={PATH_PARTNERS.MY_SHOP[0].PRODUCT_PROMOTION} // Chemin dynamique
                    className={({ isActive }) =>
                        isActive
                            ? "px-4 py-2 border-2 border-teal-500 text-white bg-teal-500 font-medium rounded-full"
                            : "px-4 py-2 border-2 border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 transition font-medium rounded-full"
                    }
                >
                    Promotions
                </NavLink>
            </div>

            {/* Contenu principal selon les sous-pages */}
            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MyShop;
