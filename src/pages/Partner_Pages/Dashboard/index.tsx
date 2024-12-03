import React, { useEffect, useState } from 'react';
import { Eye, DollarSign, ShoppingCart, Package, User, Clock, XCircle, CheckCircle } from 'lucide-react'; 
import ProductCarousel from '../../../Carousels/ProductCarousel';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const Dashboard: React.FC = () => {
    const navigate = useNavigate(); // Initialiser useNavigate
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [pendingOrders, setPendingOrders] = useState(0);
    const [completedOrders, setCompletedOrders] = useState(0);
    const [cancelledOrders, setCancelledOrders] = useState(0);

    const targetRevenue = 500; 
    const targetOrders = 50; 
    const targetProducts = 45; 
    const targetCustomers = 125;
    const targetCompleted = 30;
    const targetPending = 10;
    const targetCancelled = 10;

    useEffect(() => {
        const incrementValue = (target: number, setValue: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                if (start < target) {
                    start++;
                    setValue(start);
                } else {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        incrementValue(targetRevenue, setTotalRevenue, 500); 
        incrementValue(targetOrders, setTotalOrders, 2000);   
        incrementValue(targetProducts, setTotalProducts, 2000); 
        incrementValue(targetCustomers, setTotalCustomers, 2000); 
        incrementValue(targetCompleted, setCompletedOrders, 2000); 
        incrementValue(targetPending, setPendingOrders, 2000); 
        incrementValue(targetCancelled, setCancelledOrders, 2000); 
    }, []);

    return (
        <div className="bg-gray-100 flex-1 p-3 min-[500px]:p-4 min-[768px]:p-5">
            {/* Summary section */}
            <div className='space-y-5'>
                <div className='flex gap-3'>
                    <div className="bg-primary_Green w-3"></div>
                    <h2 className="text-2xl font-bold">Summary</h2>
                </div>

                <div className='grid min-[500px]:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-teal-600 shadow-teal-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <DollarSign className='inline text-teal-600'/> Total Revenue
                        </h3>
                        <p className="font-bold text-2xl">{totalRevenue} XAF</p>
                    </div>

                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-yellow-600 shadow-yellow-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <Package className='inline text-yellow-600'/> Total Products
                        </h3>
                        <p className="font-bold text-2xl">{totalProducts}</p>
                    </div>

                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-pink-600 shadow-pink-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <ShoppingCart className='inline text-pink-600'/> Total Orders
                        </h3>
                        <p className="font-bold text-2xl">{totalOrders}</p>
                    </div>

                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-blue-600 shadow-blue-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <User className='inline text-blue-600'/> Total Customers
                        </h3>
                        <p className="font-bold text-2xl">{totalCustomers}</p>
                    </div>
                </div>
            </div>

            {/* Order Status section */}
            <div className='space-y-5 mt-14'>
                <div className='flex gap-3 justify-between items-center'>
                    <div className="flex items-center">
                        <div className="bg-primary_Green w-3"></div>
                        <h2 className="text-2xl font-bold">Order Status</h2>
                    </div>

                </div>

                <div className='grid min-[500px]:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-purple-600 shadow-purple-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <ShoppingCart className='inline text-purple-600'/> Total Orders
                        </h3>
                        <p className="font-bold text-2xl">{totalOrders}</p>
                    </div>

                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-green-600 shadow-green-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <CheckCircle className='inline text-green-600'/> Completed Orders
                        </h3>
                        <p className="font-bold text-2xl">{completedOrders}</p>
                    </div>

                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-orange-600 shadow-orange-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <Clock className='inline text-orange-600'/> Pending Orders
                        </h3>
                        <p className="font-bold text-2xl">{pendingOrders}</p>
                    </div>

                    <div className="bg-white p-3 rounded-md h-36 border-b-8 border-red-600 shadow-red-600 shadow-lg space-y-6">
                        <h3 className="font-medium text-xl text-gray-500">
                            <XCircle className='inline text-red-600'/> Cancelled Orders
                        </h3>
                        <p className="font-bold text-2xl">{cancelledOrders}</p>
                    </div>
                </div>
            </div>

            {/* Recent Status */}
            <div className='mt-14 space-y-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <div className="bg-primary_Green w-3"></div>
                        <h2 className="text-2xl font-bold">Recent Orders</h2>
                    </div>
                    <button 
                        onClick={() => navigate('/Orders')} // Redirection vers la page des commandes
                        className="border-teal-700 border-2 rounded-2xl font-medium text-teal-700 px-4 py-2  hover:bg-teal-700 hover:text-white transition"
                    >
                        View All
                    </button>
                </div>

                <div className="">
                <table className="min-w-full place-items-center bg-white shadow-xl border-2 border-gray-300 ">
                    <thead>
                        <tr className="text-center border-b">
                            <th className="py-4 px-2 max-[530px]:hidden">ID</th>
                            <th className="py-4 px-2">Client Name</th>
                            <th className="py-4 px-2">Product Name</th>
                            <th className="py-4 px-2 max-[400px]:hidden">Price</th>
                            <th className="py-4 px-2">Status</th>
                            <th className="py-4 px-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Données dynamiques */}
                        {[
                            { id: 1, client: 'John Doe', product: 'Product A', price: '100 XAF', status: 'Cancelled' },
                            { id: 2, client: 'John Doe', product: 'Product B', price: '100 XAF', status: 'Completed' },
                            { id: 3, client: 'John Doe', product: 'Product C', price: '100 XAF', status: 'Completed' },
                            { id: 4, client: 'John Doe', product: 'Product D', price: '100 XAF', status: 'Pending' },
                            { id: 5, client: 'John Doe', product: 'Product E', price: '100 XAF', status: 'Pending' },
                        ].map((order) => (
                            <tr key={order.id} className="text-center border-b">
                                <td className="py-4 px-2 max-[530px]:hidden">{order.id}</td>
                                <td className="py-4 px-2">{order.client}</td>
                                <td className="py-4 px-2">{order.product}</td>
                                <td className="py-4 px-2 max-[400px]:hidden">{order.price}</td>
                                <td className="py-4 px-2">
                                    <span className={`py-1 px-2 rounded ${order.status === 'Cancelled' ? 'bg-red-200 text-red-800' : order.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-4 px-2 flex justify-center">
                                    <Eye className="text-blue-500 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>

            {/* Slider Produit */}
            <ProductCarousel/>
        </div>
    );
};

export default Dashboard;
