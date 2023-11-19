import { useLocation, useParams } from 'react-router-dom';
import CreateFolderModal from '../../components/modals/create-folder-modal';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getAllFiles, getAllFolders } from '../../services/api-folders';
import { Box, Divider, Typography } from '@mui/material';
import ShowItems from '../../components/show-items/show-items';

const SubFolders = () => {
  const params = useParams();
  // console.log('🚀 ~ file: sub-folders.tsx:11 ~ SubFolders ~ params:', params);

  const location = useLocation();

  const [lastItem] = location.pathname.split('/').slice(-1);
  console.log(
    '🚀 ~ file: sub-folders.tsx:16 ~ SubFolders ~ lastItem:',
    lastItem
  );

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
    </Box>
  );
};

export default SubFolders;
