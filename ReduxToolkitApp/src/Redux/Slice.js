import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "order",
    initialState: [],
    reducers: {
        orderNow(state, action) {
            state.push(action.payload);
        },
        rejectOrder(state, action) {
            return state.filter((item, index) => index !== action.payload);
        }
    }
})

export const { orderNow, rejectOrder } = Slice.actions;
export default Slice.reducer;