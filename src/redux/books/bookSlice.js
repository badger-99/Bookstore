import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// const appId = mqojsesd5RNXmiD5UXBK
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mqojsesd5RNXmiD5UXBK/books';
export const getBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      const errorMsg = `${error.code}: ${error.message}`;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  },
);

// const array = [
//   {
//     id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//   },
//   {
//     id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//   },
//   {
//     id: 'item3',
//     title: 'Signature In The Cell',
//     author: 'Stephen C. Meyer',
//     category: 'Nonfiction',
//   },
// ];
const initialState = {
  bookArray: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (store, { payload }) => {
      const newBook = {
        title: payload.title,
        author: payload.author,
        id: uuidv4(),
      };
      store.bookArray.push(newBook);
    },
    removeBook: (store, action) => {
      const bookId = action.payload;
      const newBookArray = store.bookArray.filter((book) => book.id !== bookId);
      store.bookArray = newBookArray;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        console.log(state.isLoading);
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookArray = action.payload;
        console.log(state.bookArray);
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
