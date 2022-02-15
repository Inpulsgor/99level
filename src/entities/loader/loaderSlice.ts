import { createSlice } from '@reduxjs/toolkit';
import { LoaderState } from 'models/loader';
import { LOADER_STATUS } from 'types/enum';

const initialState: LoaderState = {
  isLoading: false,
  status: LOADER_STATUS.IDLE,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loaderActive: state => {
      state.isLoading = true;
      state.status = LOADER_STATUS.LOADING;
    },
    loaderDisabled: state => {
      state.isLoading = false;
      state.status = LOADER_STATUS.IDLE;
    },
  },
});

export const { loaderActive, loaderDisabled } = loaderSlice.actions;

export default loaderSlice;
