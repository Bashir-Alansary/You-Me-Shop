import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartNewKeys} from "../../Assets/types";

interface StateType {
    showSubcart: boolean,
    searchInputVal: string,
    checkoutPath: string,
    checkoutItem: CartNewKeys,
}

const initialState: StateType = {
    showSubcart: false,
    searchInputVal: "",
    checkoutPath: "/checkout",
    checkoutItem: {chosenSize: "", chosenColor: {id: 1, name: "", img: "", color: ""} , amount: 1, total: 1},
}


export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        
        setShowSubcart: (state, action:PayloadAction<boolean>) => {
            state.showSubcart = action.payload;
        },
        
        setSearchInputVal: (state, action:PayloadAction<string>) => {
             state.searchInputVal = action.payload; 
        },

        // to close subcart and scroll up after click on link
        closeAndGoUp: (state) => {
            state.showSubcart = false;
            window.scroll(0, 0);
        },

        setCheckouItem: (state, action:PayloadAction<CartNewKeys>) => {
            const {chosenSize, chosenColor, amount, total} = action.payload;
            state.checkoutItem = {chosenSize, chosenColor, amount, total};
        }

    }

})

export const {
    setShowSubcart,
   setSearchInputVal,
   closeAndGoUp,
   setCheckouItem,
} = globalSlice.actions;

export default globalSlice.reducer;