import { Box, Divider, Typography } from '@mui/material';
import ShowItems from '../../components/show-items/show-items';
import { useQuery } from '@tanstack/react-query';
import { getAllFolders } from '../../services/api-folders';
import Spinner from '../../components/ui/spinner';

const HomePage = () => {
  const {
    data: folders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['folders'],
    queryFn: getAllFolders,
  });

  if (isError) {
    return <div>we are sorry, cannot get the data !</div>;
  }

  return (
    <Box padding={4}>
      <Divider color="red" sx={{ width: '100%' }} variant="middle">
        <Typography variant="h4" textAlign="center">
          CreatedFolders
        </Typography>
      </Divider>
      {isLoading ? <Spinner /> : <ShowItems items={folders} />}
      {/* <ShowItems title="created files" items={files} /> */}
    </Box>
  );
};

export default HomePage;
