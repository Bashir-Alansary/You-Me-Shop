import { createSlice } from "@reduxjs/toolkit";
import products from "../../Assets/globalData/products";
import { ProductType } from "../../Assets/types";

interface CompareState {
    compareItems: ProductType[],
}
const initialState: CompareState = {
    compareItems: [],
}


export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addToCompare: (state, action) => {
            const theItem:ProductType | undefined = state.compareItems.find((item:ProductType) => item.id === action.payload);
            if (theItem === undefined) {
                const item:ProductType | undefined = products.find((item) => item.id === action.payload)
                if (item !== undefined) {
                    state.compareItems = [...state.compareItems, item];
                }
            }
            
        },

        removeFromCompare: (state, action) => {
            state.compareItems = state.compareItems.filter(item => item.id !== action.payload);
        },

    }

})

export const {
    addToCompare,
    removeFromCompare,
} = compareSlice.actions;
export default compareSlice.reducer;