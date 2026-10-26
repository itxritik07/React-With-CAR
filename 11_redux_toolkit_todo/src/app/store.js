import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// mostly it takes Object
export const store = configureStore({
    reducer: todoReducer
});