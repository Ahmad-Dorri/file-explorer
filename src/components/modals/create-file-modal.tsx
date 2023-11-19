import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ModalComponent from '../ui/modal';
import { useMutation } from '@tanstack/react-query';
import { insertFile } from '../../services/api-folders';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CreateFileModalProps {
  parent: string;
  path: string;
}

const CreateFileModal = ({ parent }: CreateFileModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const modal = useSelector((state: RootState) => state.modal);
  const isModalOpen = modal.isOpen && modal.type === 'CreateFile';
  const { mutate: createFile } = useMutation({
    mutationFn: insertFile,
    onSuccess: () => {
      toast.success('file created successfully.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const fileExtension = inputValue.split('.').pop();
  return (
    <ModalComponent isOpen={isModalOpen}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          createFile({
            name: inputValue,
            parent,
            path: inputValue,
            extension: fileExtension,
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
        <Typography variant="h4">Create New File</Typography>
        <TextField
          onChange={(e) => setInputValue(e.target.value)}
          label="File Name"
          variant="outlined"
        />
        <Button variant="outlined" type="submit">
          Create File
        </Button>
      </Box>
    </ModalComponent>
  );
};

export default CreateFileModal;
