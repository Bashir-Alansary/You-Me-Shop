import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "../../Assets/globalData/products";
import { ProductType, SmallImgType, IDColor, IDSizeColor, CartItemsType } from "../../Assets/types";

interface CartState {
    cartItems: CartItemsType[],
    total: number,
    amount: number,
}

const initialState: CartState = {
    cartItems: [],
    total: 0,
    amount: 0,
}

interface AddAmount extends IDSizeColor {
    amount: number,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<IDColor>) => {
            const {id, color} = action.payload;
            console.log(color);
            
            const theItem =
            state.cartItems.find(item =>
                item.id === id
                && item.chosenSize === item.sizes[0]
                && item.chosenColor.id === color.id
            );

            if (theItem !== undefined) {
                state.cartItems.map(item => {
                    if (item.id === id) {
                        item.amount += 1;
                    }
                })
            } else {
                const product:ProductType | undefined = products.find((item) => item.id === id);
                if (product !== undefined) {
                    const finalItem = {
                        ...product, amount: 1,
                        total: product?.newPrice,
                        chosenSize: product?.sizes[0],
                        chosenColor: color
                    }
                    state.cartItems = [...state.cartItems, finalItem];
                }
            }
        },

        removeFromCart: (state, action:PayloadAction<IDSizeColor>) => {
            const {id, size, color} = action.payload;
            state.cartItems = 
            state.cartItems.filter((item) => 
                (item.id !== id)
                || (item.id === id && item.chosenColor.id !== color.id)
                || (item.id === id && item.chosenSize !== size)
            );
            
        },

        increaseAmount: (state, action:PayloadAction<IDSizeColor>) => {
            const {id, size, color} = action.payload;
            state.cartItems.map(item => {
                if (item.id === id && item.chosenSize === size && item.chosenColor.id === color.id) {
                    item.amount += 1;
                }
            })
        },

        decreaseAmount: (state, action:PayloadAction<IDSizeColor>) => {
            const {id, size, color} = action.payload;
            state.cartItems.map((item, index) => {
                if (item.id === id && item.chosenSize === size && item.chosenColor.id === color.id) {
                    if (item.amount > 1) {
                        item.amount -= 1;
                    } else {
                        state.cartItems.splice(index, 1);
                    }
                }
            })
        },

        getItemTotals: (state) => {
            state.cartItems.map(item => {
                item.total = item.newPrice * item.amount;
            })
            if (state.cartItems.length) {
                const itemsTotal = state.cartItems.map(item => item.total);
                const itemsAmount = state.cartItems.map(item => item.amount);
                
                state.total = itemsTotal.reduce((a, b) => a + b);
                state.amount = itemsAmount.reduce((a, b) => a + b);
            } else {
                state.total = 0
                state.amount = 0
            }
        },

        addAmountToItem: (state, action:PayloadAction<AddAmount>) => {
            const {id, size, color, amount} = action.payload;
            const theItem =
                state.cartItems.find(item =>
                    item.id === id
                    && item.chosenSize === size
                    && item.chosenColor.id === color.id
                );
                
            if (theItem === undefined) {
                const product:ProductType | undefined = products.find((item) => item.id === id);
                if (product !== undefined) {
                    const finalItem = {
                        ...product,
                        amount,
                        total: product.newPrice,
                        chosenSize: size,
                        chosenColor: color
                    };
                    state.cartItems = [...state.cartItems, finalItem];
                }
            } else {
                state.cartItems.map(item => {
                    if (item.id === id && item.chosenSize === size && item.chosenColor.id === color.id) {
                        item.amount = item.amount + amount;
                        item.chosenSize = size;
                        item.chosenColor = color;
                    }
                })
            }
        }

    }

})

export const {
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    getItemTotals,
    addAmountToItem,
} = cartSlice.actions;
export default cartSlice.reducer;