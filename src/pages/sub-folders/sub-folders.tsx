import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Box, Divider, Typography } from '@mui/material';

import CreateFolderModal from '../../components/modals/create-folder-modal';
import { getAllFiles, getAllFolders } from '../../services/api-folders';
import ShowItems from '../../components/show-items/show-items';
import CreateFileModal from '../../components/modals/create-file-modal';

const SubFolders = () => {
  const params = useParams();
  const location = useLocation();

  const [lastItem] = location.pathname.split('/').slice(-1);

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
    selectFolders(lastItem);
    selectFiles(lastItem);
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
      <CreateFolderModal parent={params.id!} path={location.pathname} />
      <CreateFileModal parent={params.id!} path={location.pathname} />
    </Box>
  );
};

export default SubFolders;
