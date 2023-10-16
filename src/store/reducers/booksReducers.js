import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    filteredBooks: [],
    isEdit: false,
    item: {},
  },
  reducers: {
    getAllBooks(state, action) {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },
    handleAddItem(state, action) {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },
    handleDeleteItem(state, action) {
      const deletedItemId = action.payload;
      state.bookList = state.bookList.filter(
        (item) => item._id !== deletedItemId
      );
    },
    searchFilter(state, action) {
      const { searchTerm } = action.payload;
      const searchTermLow = searchTerm.toLowerCase();
      state.filteredBooks = state.books.filter((book) =>
        book.title.toLowerCase().includes(searchTermLow)
      );
    },
    sortingItem(state, action) {
      const { val } = action.payload;
      state.filteredBooks = [...state.filteredBooks];
      state.filteredBooks.sort((a, b) => {
        if (val === "asc") {
          return a.id - b.id;
        } else if (val === "desc") {
          return b.id - a.id;
        }
      });
      console.log(state.filteredBooks);
    },

    handleEdit(state, action) {
      const { val, item } = action.payload;
      console.log("from redux edit", item.id, val, item);
      state.isEdit = val;
      state.item = state.filteredBooks.find((itm) => itm.id === item.id);
    },
  },
});

export const {
  getAllBooks,
  handleAddItem,
  handleEdit,
  handleDeleteItem,
  sortingItem,
  searchFilter,
} = bookSlice.actions;
export default bookSlice.reducer;
