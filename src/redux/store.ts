import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter-slice';
import modalSlice from './slices/modal-slice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
