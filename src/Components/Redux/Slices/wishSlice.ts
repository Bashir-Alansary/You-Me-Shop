import {createSlice } from "@reduxjs/toolkit";
import products from "../../Assets/globalData/products";
import { ProductType } from "../../Assets/types";

interface WishState {
    wishItems: ProductType[],
}
const initialState: WishState = {
    wishItems: [],
}


export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, action) => {
            const theItem:ProductType | undefined = state.wishItems.find((item:ProductType) => item.id === action.payload);
            if (theItem === undefined) {
                const item:ProductType | undefined = products.find((item) => item.id === action.payload)
                if (item !== undefined) {
                    state.wishItems = [...state.wishItems, item];
                }
            }
            
        },

        removeFromWish: (state, action) => {
            state.wishItems = state.wishItems.filter(item => item.id !== action.payload);
        },

    }

})

export const {
    addToWish,
    removeFromWish,
} = wishSlice.actions;
export default wishSlice.reducer;