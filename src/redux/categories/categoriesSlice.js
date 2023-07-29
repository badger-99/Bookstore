import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryArray: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (store) => {
      return store.status;
    },
  },
});
