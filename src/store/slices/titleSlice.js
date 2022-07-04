import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'Select a sign to continue',
}

export const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        }
    }
})

export const { setTitle } = titleSlice.actions
export default titleSlice.reducer