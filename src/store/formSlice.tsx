import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface FormData {
  id: string;
  title: string;
  content: string;
}

export interface FormDataState {
  data: FormData[];
}

const initialState: FormDataState = {
  data: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCreateFormData: {
      reducer: (state, action: PayloadAction<FormData>) => {
        state.data.push(action.payload);
      },
      prepare: (payload: FormData) => {
        return {
          payload: {
            id: payload.id,
            title: payload.title,
            content: payload.content,
          },
        };
      },
    },
    deleteBlogPost: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    updateBlogPost: (state, action) => {
      const ids = state.data.findIndex(item => item.id === action.payload.id);
      if (ids !== -1) {
        state.data[ids] = action.payload;
      }
    },
  },
});

export const addCreateFormDataAsync = (formData: FormData) => {
  return async (dispatch: any) => {
    try {
      dispatch(addCreateFormData(formData));
      return Promise.resolve(formData);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const {addCreateFormData, deleteBlogPost, updateBlogPost} =
  formSlice.actions;
export default formSlice.reducer;
