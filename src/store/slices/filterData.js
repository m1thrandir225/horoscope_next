import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: '',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        clearData: (state) => {
            state.data = [];
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    } 

})

export const { setData, clearData, setLoading, setError } = dataSlice.actions 

export default dataSlice.reducer;