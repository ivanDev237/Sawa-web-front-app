import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react'; // Importing the three-dots icon
import Casque from '../../../../Assets/imgs/SellerImgs/Casque sans fil.png';
import PS5 from '../../../../Assets/imgs/SellerImgs/PS5.png';

const ProductPromotion = () => {
    const [products, setProducts] = useState([
        { id: "1", src: Casque, name: "Headphone", rating: 5, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", oldPrice: "100XAF", newPrice: "50XAF" },
        { id: "2", src: PS5, name: "Playstation 5", rating: 4, desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", oldPrice: "100XAF", newPrice: "50XAF" }
    ]);
    
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const [showModal, setShowModal] = useState(false);
    
    const handleEdit = (product: any) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleSave = (updatedProduct: any) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
        setShowModal(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        const updatedData = { ...selectedProduct, [field]: e.target.value };
        setSelectedProduct(updatedData);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                if (event.target && event.target.result) {
                    setSelectedProduct({ ...selectedProduct, src: event.target.result as string });
                }
            };
            fileReader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className='bg-gray-300 p-7 min-[400px]:p-3 grid grid-cols-1 min-[640px]:grid-cols-2 md:grid-cols-3 min-[1150px]:grid-cols-4 gap-4'>
            {products.map((product, index) => (
                <div key={index} className="bg-gray-200 gap-2 p-4 rounded-md flex flex-col relative">
                    {/* Three dots icon */}
                    <button onClick={() => handleEdit(product)} className="absolute top-2 right-2 text-black">
                        <MoreVertical size={20} />
                    </button>
                    
                    {/* Product Image */}
                    <img src={product.src} alt={product.name} className="h-52 w-52 object-cover mx-auto" />

                    {/* Product Name */}
                    <span className="font-bold">{product.name}</span>

                    {/* Product Description */}
                    <p className="text-gray-500">{product.desc}</p>

                    {/* Product Rating */}
                    <div className="flex">
                        {Array(product.rating).fill(0).map((_, starIndex) => (
                            <svg key={starIndex} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.121-6.532L0 7.618l6.545-.954L10 1l2.455 5.664L19 7.618l-5.243 3.94 1.121 6.532z" />
                            </svg>
                        ))}
                    </div>

                    {/* Product Price */}
                    <p className="font-bold text-xl text-gray-700">
                        <span className="line-through text-gray-500 mr-2">{product.oldPrice}</span>
                        <span className="text-green-600">{product.newPrice}</span>
                    </p>
                </div>
            ))}
            
            {/* Edit Product Modal */}
            {showModal && selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Product</h2>

                        {/* Name Input */}
                        <input
                            type="text"
                            value={selectedProduct.name}
                            onChange={(e) => handleInputChange(e, "name")}
                            placeholder="Product Name"
                            className="w-full mb-3 p-2 border rounded"
                        />

                        {/* Description Input */}
                        <textarea
                            value={selectedProduct.desc}
                            onChange={(e) => handleInputChange(e, "desc")}
                            placeholder="Product Description"
                            className="w-full mb-3 p-2 border rounded"
                        />

                        {/* Price is not editable */}
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={selectedProduct.newPrice}
                                disabled
                                className="border rounded px-2 bg-gray-200"
                            />
                            <span className="ml-2">XAF</span>
                        </div>

                        {/* Image Input */}
                        <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700">Product Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border rounded px-2 py-1"
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded">
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    handleSave(selectedProduct);
                                }}
                                className="px-4 py-2 bg-green-500 text-white rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPromotion;
