import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../stores/store";
import { IProduct } from "../../utils/types";

export interface CartState {
  cartItems: IProduct[];
  totalPrice: number;
  totalCartItems: number;
  subscriptionFee: number;
  monthlyFee: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
  totalCartItems: 0,
  subscriptionFee: 59,
  monthlyFee: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      cartState,
      { payload }: PayloadAction<{ cartItem: IProduct; qty: number }>
    ) => {
      const existingCartItem = cartState.cartItems.find(
        (item) => item.id === payload.cartItem.id
      );
      if (existingCartItem) {
        return;
      }
      cartState.cartItems = [
        ...cartState.cartItems,
        {
          ...payload.cartItem,
          amount: payload.cartItem.amount + payload.qty,
        },
      ];
    },

    calculateTotals: (cartState) => {
      let sumItems = 0;
      let sumEachItemPrice = 0;
      let monthlyPrice = 0;
      cartState.cartItems.forEach((item) => {
        sumItems += item.amount;
        if (item.category !== "software") {
          sumEachItemPrice += item.amount * Number(item.price);
        }
        if (item.category === "software") {
          monthlyPrice += item.amount * Number(item.price);
        }
      });
      cartState.totalCartItems = sumItems;
      cartState.totalPrice = sumEachItemPrice;
      cartState.monthlyFee = monthlyPrice;
    },
    increaseItem: (cartState, { payload }: PayloadAction<{ id: string }>) => {
      const cartItem = cartState.cartItems.find(
        (item) => item.id === payload.id
      );
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }

      cartState.totalCartItems += 1;
    },
    decreaseItem: (cartState, { payload }: PayloadAction<{ id: string }>) => {
      const cartItem = cartState.cartItems.find(
        (item) => item.id === payload.id
      );
      if (cartItem && cartItem?.amount > 0) {
        cartItem.amount = cartItem.amount - 1;
      }

      cartState.totalCartItems -= 1;
    },

    removeItem: (cartState, { payload }: PayloadAction<{ id: string }>) => {
      cartState.cartItems = cartState.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },

    clearCart: (cartState) => {
      cartState.cartItems = [];
    },

    selectSubscriptionPrice: (
      cartState,
      { payload }: PayloadAction<number>
    ) => {
      cartState.subscriptionFee = payload;
    },

    addSubscriptionToCart: (
      state,
      { payload }: PayloadAction<{ subscription: IProduct; subFee: number }>
    ) => {
      if (state.subscriptionFee === payload.subFee) {
        addToCart({ cartItem: payload.subscription, qty: 1 });
      }
    },
  },
});

export const {
  addToCart,
  increaseItem,
  decreaseItem,
  calculateTotals,
  clearCart,
  removeItem,
  selectSubscriptionPrice,
} = cartSlice.actions;
export const selectCartState = (state: RootState) => state.cart;
// export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
