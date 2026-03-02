import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const response = await fetch("https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/todo")

    const data = await response.json()

    return data

})

const MySlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true
            state.error = null
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
        });
        builder.addCase(fetchTodo.rejected, (state) => {
            state.error = true
        });
    }
})

export default MySlice.reducer;