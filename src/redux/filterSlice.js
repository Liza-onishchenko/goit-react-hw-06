import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

//слайс фабрика(чорнетка)
const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
//Згенерували фабрику reducer(цех)
export const filterReducer = filterSlice.reducer;
//Згенерували ф-цію команди
export const { setFilter } = filterSlice.actions;

// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "filter/setFilter": {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
