//user redusers, user slice
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  //all informations about reducers, actions, name of the state
  name: "theme", //name of the slice = name of the state
  initialState: { value: initialStateValue }, //initial state
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    }, //function that change the state, state= holds the information about previous and current value of state (keeping track)
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer; // export reducer
