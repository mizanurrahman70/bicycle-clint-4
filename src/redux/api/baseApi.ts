import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://bi-cycle-server-five.vercel.app/api',
        credentials : 'include'
         }),

    endpoints: () => ({}),
})