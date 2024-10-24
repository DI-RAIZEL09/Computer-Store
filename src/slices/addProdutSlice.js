import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOption: {
    cpu: {},
    cooling: {},
    motherboard: {},
    ram: {},
    gpu: {},
    hdd: {},
    ssd1: {},
    ssd2: {},
    dvdDrive: {},
    case: {},
    psu: {},
    wifiAdapter: {},
    soundCard: {},
    powerSupply: {},
    mouse: {},
    keyboard: {},
  }
};

const addProduct = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = addProduct.actions;
export default addProduct.reducer;