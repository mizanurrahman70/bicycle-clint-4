import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Order = {
    _id?: string;  
    email: string;
    product: string;
    quantity: number;
    totalPrice: number;
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
        addOrder: (state, action: PayloadAction<Order>) => {
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

export const { getAllOrders, addOrder, updateOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
