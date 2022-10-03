import { createSlice } from "@reduxjs/toolkit";

export const genreCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreCategory.actions;

export default genreCategory.reducer;
