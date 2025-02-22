import { baseApi } from "../../api/baseApi";

const ordersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query<any[], void>({  
            query: () => '/orders'
        }),
       
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: "/orders",
                method: "POST",
                body: orderData,
            }),
        }),
        updateOrder: builder.mutation({
            query: ({ orderId, updatedData }) => ({
                url: `/orders/${orderId}`,
                method: "PUT",
                body: updatedData,
            }),
        }),
        deleteOrder: builder.mutation({
            query: (orderId) => ({
                url: `/orders/${orderId}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
   
} = ordersApi;
export default ordersApi;