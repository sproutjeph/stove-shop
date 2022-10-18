import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../featuers/cart/cartSlice";
import authReducer from "../featuers/auth/authSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;