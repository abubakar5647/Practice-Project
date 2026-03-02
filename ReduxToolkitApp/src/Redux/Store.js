import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './Slice'

const Store = configureStore({
    reducer: {
        order: orderReducer
    }
})

export default Store;