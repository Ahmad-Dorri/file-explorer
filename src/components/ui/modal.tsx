import { Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { onClose } from '../../redux/slices/modal-slice';

interface ModalComponentProps {
  children: React.ReactElement;
  isOpen: boolean;
}

const ModalComponent = ({ children, isOpen }: ModalComponentProps) => {
  const dispatch = useDispatch();
  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(onClose())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      {children}
    </Modal>
  );
};

export default ModalComponent;
