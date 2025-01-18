import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import wishSlice from "./Slices/wishSlice";
import compareSlice from "./Slices/compareSlice";
import globalSlice from "./Slices/globalSlice";



export const store = configureStore({
    reducer: {
        cart: cartSlice,
        wish: wishSlice,
        compare: compareSlice,
        global: globalSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch