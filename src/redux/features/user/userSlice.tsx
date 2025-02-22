import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    userStatus: string; // Consistent with the table component
}

interface UsersState {
    users: IUser[];
}

const initialState: UsersState = {
    users: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAllUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        updateUser: (state, action: PayloadAction<IUser>) => {
            const index = state.users.findIndex((p) => p._id === action.payload._id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
    },
});

export const { getAllUsers, updateUser } = authSlice.actions;

export default authSlice.reducer;
