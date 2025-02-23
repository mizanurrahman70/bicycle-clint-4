import { baseApi } from "../../api/baseApi";

const ordersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query<any[], void>({  
            query: () => '/orders'
        }),
       
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: "/create-order",
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
        verifyOrder: builder.query({
            query: (order_id) => ({
              url: "/order/verify",
              params: { order_id },
              method: "GET",
            }),
          }),
        getTotalRevenue: builder.query({
            query: () => "/orders/revenue",
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useVerifyOrderQuery,
    useGetTotalRevenueQuery,
    useGetAllOrderQuery,
   
} = ordersApi;
export default ordersApi;