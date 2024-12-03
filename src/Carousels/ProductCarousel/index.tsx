import { useState, useEffect } from 'react';
import Samsung from '../../Assets/imgs/Samsung S21.png';
import TV from '../../Assets/imgs/TV OLED.png';
import Apple from '../../Assets/imgs/Apple watch.png';
import Tablet from '../../Assets/imgs/Drawing tablet.png';
import Macbook from '../../Assets/imgs/Macbook pro.png';
import Casque from '../../Assets/imgs/Casque sans fil.png';
import PS5 from '../../Assets/imgs/PS5.png';

const ProductCarousel = () => {
    const products = [
        { src: Samsung, name: "Samsung Galaxy", rating: 5 },
        { src: TV, name: "Smart TV", rating: 4 },
        { src: Apple, name: "iPhone 14", rating: 5 },
        { src: Tablet, name: "iPad Pro", rating: 4 },
        { src: Macbook, name: "MacBook Air", rating: 5 },
        { src: Casque, name: "Headphone", rating: 5 },
        { src: PS5, name: "Playstation 5", rating: 4 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    const updateItemsToShow = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setItemsToShow(1);
        } else if (width < 1024) {
            setItemsToShow(2);
        } else if (width < 1280) {
            setItemsToShow(3);
        } else {
            setItemsToShow(4);
        }
    };

    useEffect(() => {
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);

        // Gestionnaire d'événements pour les touches directionnelles
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                nextSlide();
            } else if (event.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown); // Écouter les pressions sur les touches

        return () => {
            window.removeEventListener('resize', updateItemsToShow);
            window.removeEventListener('keydown', handleKeyDown); // Nettoyer l'écouteur d'événements
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - itemsToShow + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (products.length - itemsToShow + 1)) % (products.length - itemsToShow + 1));
    };

    return (
        <div className='space-y-8 mt-12'>
            <div className='flex gap-2'>
                <div className='bg-primary_Green w-3'></div>
                <h2 className="text-xl font-bold">Best Selling Products</h2>
            </div>
            <div className="relative p-2 ">
                <div className="flex overflow-hidden justify-center items-center">
                    <button onClick={prevSlide} className="absolute left-4 z-10 bg-black p-2 rounded-full text-white">❮</button>
                    <div className="flex justify-center space-x-4">
                        {products.slice(currentIndex, currentIndex + itemsToShow).map((product, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-md flex flex-col items-center">
                                <img src={product.src} alt={product.name} className="h-52 w-52 object-cover mx-auto" />
                                <span className="mt-2 font-bold text-center">{product.name}</span>
                                <div className="flex mt-1">
                                    {Array(product.rating).fill(0).map((_, starIndex) => (
                                        <svg key={starIndex} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.121-6.532L0 7.618l6.545-.954L10 1l2.455 5.664L19 7.618l-5.243 3.94 1.121 6.532z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="absolute right-4 z-10 bg-black p-2 rounded-full text-white">❯</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
