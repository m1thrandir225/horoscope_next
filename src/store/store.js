import { configureStore } from "@reduxjs/toolkit";
import titleReducer from './slices/titleSlice';
import dataReducer from './slices/filterData';

export const store = configureStore({
    reducer: {
        title: titleReducer,
        data: dataReducer
    }
})