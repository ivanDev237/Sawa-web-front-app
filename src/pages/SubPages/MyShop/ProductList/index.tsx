import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import EditProductModal from '../../../../Modals/EditProductModal';
import Samsung from '../../../../Assets/imgs/Samsung S21.png';
import TV from '../../../../Assets/imgs/TV OLED.png';
import Apple from '../../../../Assets/imgs/Apple watch.png';
import Tablet from '../../../../Assets/imgs/Drawing tablet.png';
import Macbook from '../../../../Assets/imgs/Drawing tablet.png'

// Define the Product type
interface Product {
    id:string;
    src: string;
    name: string;
    rating: number;
    desc: string;
    price: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: "1", src: Samsung, name: "Samsung Galaxy", rating: 5, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", price: "100XAF" },
        { id: "2", src: TV, name: "Smart TV", rating: 4, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", price: "100XAF" },
        { id: "3", src: Apple, name: "iPhone 14", rating: 5, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", price: "100XAF" },
        { id: "4", src: Tablet, name: "iPad Pro", rating: 4, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", price: "100XAF" },
        { id: "5", src: Macbook, name: "MacBook Air", rating: 5, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", price: "100XAF" },
    ]);
    

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleSave = (updatedProduct: Product) => {
        // Assurez-vous que le prix contient toujours "XAF"
        const normalizedProduct = {
            ...updatedProduct,
            price: updatedProduct.price.endsWith("XAF")
                ? updatedProduct.price
                : `${updatedProduct.price} XAF`,
        };
    
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === normalizedProduct.id ? normalizedProduct : product
            )
        );
        setShowModal(false);
    };
    
    

    return (
        <div className='bg-gray-300 p-7 min-[400px]:p-3 grid grid-cols-1 min-[640px]:grid-cols-2 md:grid-cols-3 min-[1150px]:grid-cols-4 gap-4'>
            {products.map((product, index) => (
                <div key={index} className="bg-gray-200 gap-2 p-4 rounded-md flex flex-col relative">
                    {/* Three dots icon */}
                    <button
                        onClick={() => handleEdit(product)}
                        className="absolute top-2 right-2 text-black"
                    >
                        <MoreVertical size={20} />
                    </button>

                    {/* Product Content */}
                    <img src={product.src} alt={product.name} className="h-52 w-52 object-cover mx-auto" />
                    <span className="font-bold">{product.name}</span>
                    <p className="text-gray-500">{product.desc}</p>
                    <div className="flex">
                        {Array(product.rating).fill(0).map((_, starIndex) => (
                            <svg key={starIndex} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.121-6.532L0 7.618l6.545-.954L10 1l2.455 5.664L19 7.618l-5.243 3.94 1.121 6.532z" />
                            </svg>
                        ))}
                    </div>
                    <p className="font-bold text-xl text-green-600">{product.price}</p>
                </div>
            ))}

            {/* Edit Product Modal */}
            {showModal && selectedProduct && (
                <EditProductModal
                    product={selectedProduct}
                    onClose={() => setShowModal(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default ProductList;
