import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ArrowBack } from '@mui/icons-material';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

import { Link, Outlet } from 'react-router-dom';
import SubNavigation from './sub-navigation';
import { useNavigateBack } from '../hooks/use-navigate-back';

function Navigation() {
  const navigateBack = useNavigateBack();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              {/* //todo: adding navigate back function to this icon  */}
              <IconButton
                onClick={() => navigateBack()}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <ArrowBack />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link to="/root">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                FILE MANAGMENT SYSTEM
              </Typography>
            </Link>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/root"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              FILE MANAGMENT SYSTEM
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <SubNavigation />
      <Outlet />
    </>
  );
}
export { Navigation };
