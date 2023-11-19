import { Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { onClose } from '../../redux/slices/modal-slice';

interface ModalComponentProps {
  children: React.ReactElement;
}

const ModalComponent = ({ children }: ModalComponentProps) => {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal
      open={modal.isOpen}
      onClose={() => dispatch(onClose())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      {children}
    </Modal>
  );
};

export default ModalComponent;
