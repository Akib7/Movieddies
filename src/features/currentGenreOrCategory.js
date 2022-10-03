import { createSlice } from "@reduxjs/toolkit";

export const genreCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { selectGenreOrCategory } = genreCategory.actions;

export default genreCategory.reducer;
