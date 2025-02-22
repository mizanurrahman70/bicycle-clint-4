import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  getAllUser: builder.query<any[], void>({  
    query: () => '/user'
  }),
  updateUser: builder.mutation({
    query: ({ UserId, updatedUser }) => ({
        url: `/user/${UserId}`,
        method: "PUT",
        body: updatedUser,
    }),
}),
  }),
});

export const { useGetAllUserQuery ,useUpdateUserMutation} = authApi;