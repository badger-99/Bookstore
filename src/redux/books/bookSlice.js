import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook, thunkAPI) => {
    try {
      const response = await axios.post(url, newBook);
      return response;
    } catch (error) {
      const errorMsg = `${error.code}: ${error.message}`;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  },
);

const initialState = {
  bookArray: [],
  isLoading: false,
  error: null,
  resp: null,
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
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
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookArray = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.resp = 'sending...';
        console.log(state.resp);
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.resp = action.payload.data;
        console.log(state.resp);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.resp = action.payload.data;
        console.log(state.resp);
      });
  },
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
