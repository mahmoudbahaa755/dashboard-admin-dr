import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: ThemeState;
};
type ThemeState = {
    name: string,
    img: boolean,
    src: string,
    background: string,
};
const initialState = {
  value: {
    name: "bg2",
    img: true,
    src: "/background/2.png",
    background: "url(/background/2.png)",
  } as ThemeState,
} as InitialState;
export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTeheme: (state, action: PayloadAction<string>) => {
      
      state.value = {
        name:action.payload.name,
        img: true,
        src: action.payload.src,
        background: action.payload.name.background,
        

      };

    },
  },
});

export const { changeTeheme } = theme.actions;
export default theme.reducer;
