import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ModalType =
  | 'CreateFolder'
  | 'CreateFile'
  | 'DeleteFolder'
  | 'DeleteFile';

export interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
}

interface ModalAction {
  type: ModalType | null;
}

const initialState: ModalState = {
  type: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<ModalAction>) => {
      state.isOpen = true;
      state.type = action.payload.type;
    },
    onClose: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpen, onClose } = modalSlice.actions;

export default modalSlice.reducer;
