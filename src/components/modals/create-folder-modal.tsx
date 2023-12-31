import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ModalComponent from '../ui/modal';
import { useMutation } from '@tanstack/react-query';
import { insertFolder } from '../../services/api-folders';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CreateFolderModalProps {
  parent: string;
  path: string;
}

const CreateFolderModal = ({ parent }: CreateFolderModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const modal = useSelector((state: RootState) => state.modal);
  const isModalOpen = modal.isOpen && modal.type === 'CreateFolder';
  const { mutate: createFolder } = useMutation({
    mutationFn: insertFolder,
    onSuccess: () => {
      toast.success('folder created successfully.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <ModalComponent isOpen={isModalOpen}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          createFolder({
            name: inputValue,
            parent,
            path: inputValue,
          });
        }}
        sx={{
          background: '#fff',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 1,
          padding: 4,
        }}>
        <Typography variant="h4">Create New Folder</Typography>
        <TextField
          onChange={(e) => setInputValue(e.target.value)}
          label="Folder Name"
          variant="outlined"
        />
        <Button variant="outlined" type="submit">
          Create Folder
        </Button>
      </Box>
    </ModalComponent>
  );
};

export default CreateFolderModal;
