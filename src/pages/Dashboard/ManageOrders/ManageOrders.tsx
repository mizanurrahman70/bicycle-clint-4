
import { useGetAllOrdersQuery } from '../../../redux/features/orders/orderApi';
import { ClipLoader } from 'react-spinners';
import { FaBoxOpen } from 'react-icons/fa'; 
import { useAppSelector } from '../../../redux/hooks';
import { useCurrentUser } from '../../../redux/features/auth/authSlice';

const ManageOrders = () => {
  //@ts-ignore
    const { data: orders, isLoading } = useGetAllOrdersQuery();
    const user = useAppSelector(useCurrentUser) as { _id: string; role: string };
//@ts-ignore
    const filteredOrders = user?.role === 'admin' 
        ? orders?.data
        : orders?.data?.filter((order: any) => order.user === user?._id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Orders</h2>
            {filteredOrders?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Product ID</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Total Price</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Transaction Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order: any) => (
                                <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    <td className="p-3 text-sm text-gray-700">{order._id}</td>
                                    <td className="p-3 text-sm text-gray-700">{order.products[0]?.product}</td>
                                    <td className="p-3 text-sm text-gray-700">{order.products[0]?.quantity}</td>
                                    <td className="p-3 text-sm text-gray-700">{order.status}</td>
                                    <td className="p-3 text-sm text-gray-700">${order.totalPrice.toFixed(2)}</td>
                                    <td className="p-3 text-sm text-gray-700">{order?.transaction?.method || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-lg">
                    <FaBoxOpen className="text-6xl text-gray-400 mb-4" />
                    <p className="text-gray-600 text-lg">No Orders Found</p>
                </div>
            )}
        </div>
    );
};

export default ManageOrders;
