// src/components/Loader.tsx
import React from 'react';
import '../Loader/index.css'

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
