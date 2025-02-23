import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Order = {
    _id: string;
    user: string;
    products: { 
        product: string; 
        quantity: number; 
    }[];
    totalPrice: number;
    status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
    transaction?: {
        id: string;
        transactionStatus: string;
        bank_status: string;
        sp_code: string;
        sp_message: string;
        method: string;
        date_time: string;
    };
    createdAt?: string;
    updatedAt?: string;
};

// Define the initial state type
type OrdersState = {
    orders: Order[];
    loading: boolean;
    error: string | null;
};

// Initial state
const initialState: OrdersState = {
    orders: [],
    loading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        getAllOrders: (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
        },
        createOrder: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload);
        },
        updateOrder: (state, action: PayloadAction<Order>) => {
            const index = state.orders.findIndex((o) => o._id === action.payload._id);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
        },
        deleteOrder: (state, action: PayloadAction<string>) => {
            state.orders = state.orders.filter((order) => order._id !== action.payload);
        },
    },
});

export const { getAllOrders, createOrder, updateOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
