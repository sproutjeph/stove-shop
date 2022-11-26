import axios from "axios";
import { createSlice, PayloadAction, AsyncThunk } from "@reduxjs/toolkit";
import { products } from "../../utils/data";
import { IProduct } from "../../utils/types";
// const url = "";

export interface ProductsState {
  products: IProduct[];
  activeKitName: string;
}

// export const getProducts = createAsyncThunk("cart/getProducts", async () => {
//   try {
//     const response = await axios(url);

//     return response.data;
//   } catch (error) {}
// });

const initialState: ProductsState = {
  products,
  activeKitName: "Counter Top Kit",
};

const productSlice = createSlice({
  name: "produts",
  initialState,
  reducers: {
    setIncludedItemsToSubscriptionPlane: (
      state,
      { payload }: PayloadAction<{ subscriptionId: string; subFee: number }>
    ) => {
      const starterId = "24f40c0f-e70e-7d6c-fef2-623c6f1376b6";
      const ultimateId = "f3d5ac84-5450-0369-ec55-6314e4b9373d";
      const proId = "9bd90acd-bbe9-f8f0-c2d9-6314e4090f92";

      if (payload.subscriptionId === ultimateId) {
        const isInCluded = state.products.find(
          (product) => product.name === "E-Mail - Monthly License"
        );
        isInCluded!.includedInPlane = true;
      } else {
        const isInCluded = state.products.find(
          (product) => product.name === "E-Mail - Monthly License"
        );
        isInCluded!.includedInPlane = false;
      }

      if (payload.subscriptionId === proId) {
      }
    },

    selectKit: (state, { payload }: PayloadAction<string>) => {
      state.products
        .filter((product) => product.category === "kit")
        .forEach((kit) => (kit.isActive = false));
      const selectedKit = state.products.find((kit) => kit.name === payload);
      if (selectedKit) {
        selectedKit.isActive = true;
        state.activeKitName = selectKit.name;
      }

      if (selectKit.name === "Custom") {
        const newProducts = state.products.reduce(
          (acc: IProduct[], product: IProduct) => {
            product.includedInPlane = false;
            acc.push(product);

            return acc;
          },
          []
        );

        state.products = newProducts;
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

export const { setIncludedItemsToSubscriptionPlane, selectKit } =
  productSlice.actions;

export default productSlice.reducer;
