import { CreateNewFolder, Delete, TextSnippet } from '@mui/icons-material';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { insertFolder } from '../services/api-folders';
import { toast } from 'react-hot-toast';

const SubNavigation = () => {
  const location = useLocation();

  const { mutate: createFolder } = useMutation({
    mutationFn: insertFolder,
    onSuccess: () => {
      toast.success('folder added');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <AppBar
      sx={{
        backgroundColor: '#ccc',
        color: '#000',
      }}
      position="static">
      <Container
        component="ul"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Toolbar component="li">
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            {/* //! change to the folder name */}

            {location.pathname}
          </Typography>
        </Toolbar>
        <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() =>
              createFolder({
                name: 'ahmad',
                parent: 'ahmad',
                path: 'root',
              })
            }
            aria-label="create a new folder"
            aria-controls="create-folder"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: 'flex', gap: 1 }}>
            <CreateNewFolder />
            <Typography
              component="li"
              variant="h6"
              sx={{
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Create folder
            </Typography>
          </IconButton>

          <IconButton
            sx={{ display: 'flex', gap: 1 }}
            size="large"
            aria-label="create a new file"
            aria-controls="create-file"
            aria-haspopup="true"
            color="inherit">
            <TextSnippet />
            <Typography
              component="li"
              variant="h6"
              sx={{
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Create file
            </Typography>
          </IconButton>

          <IconButton
            sx={{ display: 'flex', gap: 1 }}
            size="large"
            aria-label="delete a folder"
            aria-controls="delete-folder"
            aria-haspopup="true"
            color="inherit">
            <Delete />
            <Typography
              component="li"
              variant="h6"
              sx={{
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              delete folder
            </Typography>
          </IconButton>
        </Container>
      </Container>
    </AppBar>
  );
};

export default SubNavigation;
