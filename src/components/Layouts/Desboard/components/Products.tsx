import React, { useState } from 'react';
import { Bike, Edit, Trash2, Save, X } from 'lucide-react';
import { useGetAllProductsQuery } from '../../../../redux/features/products/productApi';

interface BiCycle {
    id: string;
    name: string;
    brand: string;
    price: number;
    type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";
    description: string;
    quantity: number;
    inStock: boolean;
}

const Products = () => {
    const { data: products, error, isLoading } = useGetAllProductsQuery();
    console.log(products);
    const [editId, setEditId] = useState<string | null>(null);
    const [editData, setEditData] = useState<Partial<BiCycle>>({});

    const handleEditClick = (biCycle: BiCycle) => {
        setEditId(biCycle.id);
        setEditData({ ...biCycle });
    };

    const handleInputChange = (field: keyof BiCycle, value: string | number | boolean) => {
        setEditData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (editId) {
            // Handle updating the product list here if you need to persist the changes
            console.log("Updated Product:", editData);
            setEditId(null);
        }
    };

    const handleCancel = () => {
        setEditId(null);
        setEditData({});
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Bike className="w-6 h-6" />
                Manage Products
            </h1>

            {/* Products Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Brand</th>
                            <th className="px-4 py-2 text-left">Type</th>
                            <th className="px-4 py-2 text-left">Price ($)</th>
                            <th className="px-4 py-2 text-left">Stock</th>
                            <th className="px-4 py-2 text-left">In Stock</th>
                            <th className="px-4 py-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products?.data.map((Cycle,index) => (
                            <tr key={Cycle.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-900">{index +1}</td>

                                {editId === Cycle.id ? (
                                    <>
                                        <td className="px-4 py-3">
                                            <input type="text" value={editData.name as string} onChange={(e) => handleInputChange("name", e.target.value)}
                                                className="border p-1 rounded w-full" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <input type="text" value={editData.brand as string} onChange={(e) => handleInputChange("brand", e.target.value)}
                                                className="border p-1 rounded w-full" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <select value={editData.type as string} onChange={(e) => handleInputChange("type", e.target.value)}
                                                className="border p-1 rounded w-full">
                                                <option value="Mountain">Mountain</option>
                                                <option value="Road">Road</option>
                                                <option value="Hybrid">Hybrid</option>
                                                <option value="BMX">BMX</option>
                                                <option value="Electric">Electric</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3">
                                            <input type="number" value={editData.price as number} onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
                                                className="border p-1 rounded w-full" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <input type="number" value={editData.quantity as number} onChange={(e) => handleInputChange("quantity", parseInt(e.target.value))}
                                                className="border p-1 rounded w-full" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <select value={editData.inStock ? "true" : "false"} onChange={(e) => handleInputChange("inStock", e.target.value === "true")}
                                                className="border p-1 rounded w-full">
                                                <option value="true">Yes</option>
                                                <option value="false">No</option>
                                            </select>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-4 py-3 text-sm">{Cycle.name}</td>
                                        <td className="px-4 py-3 text-sm">{Cycle.brand}</td>
                                        <td className="px-4 py-3 text-sm">{Cycle.type}</td>
                                        <td className="px-4 py-3 text-sm">${Cycle.price.toFixed(2)}</td>
                                        <td className="px-4 py-3 text-sm">{Cycle.quantity}</td>
                                        <td className="px-4 py-3 text-sm">{Cycle.inStock ? "✔️ Yes" : "❌ No"}</td>
                                    </>
                                )}

                                <td className="px-4 py-3 text-right">
                                    {editId === Cycle.id ? (
                                        <div className="flex gap-2">
                                            <button onClick={handleSave} className="text-green-600 hover:text-green-900">
                                                <Save className="w-5 h-5" />
                                            </button>
                                            <button onClick={handleCancel} className="text-gray-600 hover:text-gray-900">
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button onClick={() => handleEditClick(Cycle)} className="text-blue-600 hover:text-blue-900">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
