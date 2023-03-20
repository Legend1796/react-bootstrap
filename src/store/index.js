import { configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";

export const store = configureStore(cashReducer);
