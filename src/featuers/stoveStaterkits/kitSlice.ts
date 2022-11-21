import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { kits } from "../../utils/data";
import { IKits } from "../../utils/types";

interface kitState {
  kits: IKits[];
  activeKit: IKits;
}

const defaultKit = kits.find((kit) => kit.kitName === "Counter Top Kit")!;

const initialState: kitState = {
  kits: kits,
  activeKit: defaultKit,
};

const kitSlice = createSlice({
  name: "kitStater",
  initialState,
  reducers: {
    selectKit: (state, { payload }: PayloadAction<string>) => {
      state.kits.forEach((kit) => (kit.active = false));
      const selectedKit = state.kits.find((kit) => kit.kitName === payload);
      if (selectedKit) {
        selectedKit.active = true;
        state.activeKit = selectedKit;
      }
    },
  },
});

export const { selectKit } = kitSlice.actions;

export default kitSlice.reducer;
