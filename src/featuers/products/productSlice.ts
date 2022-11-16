import axios from "axios";
import { createSlice, PayloadAction, AsyncThunk } from "@reduxjs/toolkit";
import { products } from "../../utils/data";
import { IProduct } from "../../utils/types";
// const url = "";

export interface ProductsState {
  products: IProduct[];
}

// export const getProducts = createAsyncThunk("cart/getProducts", async () => {
//   try {
//     const response = await axios(url);

//     return response.data;
//   } catch (error) {}
// });

const initialState: ProductsState = {
  products,
};

const productSlice = createSlice({
  name: "produts",
  initialState,
  reducers: {
    setIncludedItemsToSubscriptionPlane: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      const item = state.products.find(
        (includedItem) => includedItem.name === "E-Mail - Monthly License"
      );

      if (payload === "STOVE ULTIMATE Monthly Subscription") {
        item!.includedInPlane = true;
      }
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getProducts.fulfilled, (state, { payload }) => {
  //     console.log(payload);
  //     state.products = payload;
  //   });
  //   builder.addCase(getProducts.pending, (state, action) => {});
  //   builder.addCase(getProducts.rejected, (state, action) => {});
  // },
});

export const { setIncludedItemsToSubscriptionPlane } = productSlice.actions;

export default productSlice.reducer;
