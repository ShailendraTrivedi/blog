const { createSlice } = require("@reduxjs/toolkit");

const themesSlice = createSlice({
  name: "themes",
  initialState: {
    darkMode: null,
  },
  reducers: {
    setTheme: (state, actions) => {
      state.darkMode = actions.payload;
    },
  },
});

export const { setTheme } = themesSlice.actions;
const themesReducer = themesSlice.reducer;
export default themesReducer;

export const ThemeAction = (darkMode) => {
  return (dispatch) => {
    darkMode = darkMode === "light" ? "dark" : "light";
    console.log(darkMode);
    window.localStorage.setItem("darkMode", darkMode);
    dispatch(setTheme(darkMode));
  };
};
