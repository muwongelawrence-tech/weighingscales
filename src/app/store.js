import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import menuReducer from "../slices/menuSlice";
import userReducer from "../slices/userSlice";
import nameReducer from "../slices/nameSlice";
import adminReducer from "../slices/adminSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    menu: menuReducer,
    user: userReducer,
    name: nameReducer,
    admin: adminReducer
  },
});
