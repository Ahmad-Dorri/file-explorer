import { Box, Divider, Typography } from '@mui/material';
import ShowItems from '../../components/show-items/show-items';
import { useMutation } from '@tanstack/react-query';
import { getAllFiles, getAllFolders } from '../../services/api-folders';
import CreateFolderModal from '../../components/modals/create-folder-modal';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const location = useLocation();
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const { mutate: selectFolders } = useMutation({
    mutationKey: ['folders'],
    mutationFn: getAllFolders,
    onSuccess: (res) => {
      setFolders(res);
    },
  });
  const { mutate: selectFiles } = useMutation({
    mutationKey: ['files'],
    mutationFn: getAllFiles,
    onSuccess: (res) => {
      setFiles(res);
    },
  });

  useEffect(() => {
    selectFolders(location.pathname.substring(1));
    selectFiles(location.pathname.substring(1));
  }, []);

  return (
    <Box padding={4}>
      <Divider color="red" sx={{ width: '100%' }} variant="middle">
        <Typography variant="h4" textAlign="center">
          CreatedFolders
        </Typography>
      </Divider>

      <ShowItems items={folders} />
      <Divider color="red" sx={{ width: '100%' }} variant="middle">
        <Typography variant="h4" textAlign="center">
          createdFiles
        </Typography>
      </Divider>
      <ShowItems items={files} />
      <CreateFolderModal parent="root" path="root" />
    </Box>
  );
};

export default HomePage;
