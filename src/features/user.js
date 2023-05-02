//user redusers, user slice
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  //all informations about reducers, actions, name of the state
  name: "user", //name of the slice = name of the state
  initialState: { value: initialStateValue }, //initial state
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    }, //function that change the state, state= holds the information about previous and current value of state (keeping track)
    logOut: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logOut } = userSlice.actions;

export default userSlice.reducer; // export reducer
