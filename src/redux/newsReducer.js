import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    fav: []
}

export const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        addToFavList: (state, action) => {
            const item = state.fav.find(item => item?.title === action.payload.title);
            if (item) {
                toast.error("AllReady added", {autoClose : 1000}) ;
                return;
            } else {
                toast.success("Added Successfully", {autoClose : 1000}) ;
                state.fav.push(action.payload);
            }
        },
        removeFavItem: (state, action) => {
            state.fav = state.fav.filter(item => item.title !== action.payload.title);
            toast.success("Removed Successfully", {autoClose : 1000}) ;
        },
        resetFav: (state) => {
            state.fav = [];
        }
    }
})
export const { addToFavList, removeFavItem, resetFav } = favSlice.actions;
export default favSlice.reducer