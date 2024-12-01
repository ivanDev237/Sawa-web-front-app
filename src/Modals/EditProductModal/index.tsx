import React, { useState } from 'react';

interface Product {
    id: string;
    src: string;
    name: string;
    desc: string;
    price: string;
    rating: number;
}

interface EditProductModalProps {
    product: Product;
    onClose: () => void;
    onSave: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose, onSave }) => {
    const [updatedProduct, setUpdatedProduct] = useState<Product>(product);
    const [priceWithoutCurrency, setPriceWithoutCurrency] = useState(
        product.price.replace(" XAF", "") // Supprime " XAF" pour l'éditer facilement
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                if (event.target && event.target.result) {
                    setUpdatedProduct({ ...updatedProduct, src: event.target.result as string });
                }
            };
            fileReader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSave = () => {
        // Ajoute "XAF" au prix avant de sauvegarder
        const finalProduct = {
            ...updatedProduct,
            price: `${priceWithoutCurrency} XAF`,
        };
        onSave(finalProduct); // Appelle la fonction onSave avec le produit mis à jour
        onClose(); // Ferme le modal
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                {/* Champ de nom */}
                <input
                    type="text"
                    name="name"
                    value={updatedProduct.name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="w-full mb-3 p-2 border rounded"
                />
                {/* Champ de description */}
                <textarea
                    name="desc"
                    value={updatedProduct.desc}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                    className="w-full mb-3 p-2 border rounded"
                />
                {/* Champ de prix */}
                <div className="flex items-center mb-3">
                    <input
                        type="number"
                        value={priceWithoutCurrency}
                        onChange={(e) => setPriceWithoutCurrency(e.target.value)}
                        className="border rounded px-2 flex-grow"
                    />
                    <span className="ml-2">XAF</span>
                </div>
                {/* Upload de fichier */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full mb-3 p-2 border rounded"
                />
                {/* Boutons */}
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
                        Cancel
                    </button>
                    <button
                        onClick={handleSave} // Utilise la fonction handleSave
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProductModal;
