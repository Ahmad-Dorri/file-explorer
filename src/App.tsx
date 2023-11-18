import { Box } from '@mui/material';

import HomePage from './pages/home/home-page';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { useEffect } from 'react';
import SubFolders from './pages/sub-folders/sub-folders';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/root');
  }, []);

  return (
    <Box className="App">
      <Routes>
        <Route path="/root" element={<Navigation />}>
          <Route path="/root" element={<HomePage />} />
          {/* dynamic routes */}
          <Route path="/root/:id" element={<SubFolders />} />
        </Route>
        <Route />
      </Routes>
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '1.6rem',
            userSelect: 'none',
            maxWidth: '500px',
            border: '2px solid gray',
            padding: '16px 24px',
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      />
    </Box>
  );
}

export default App;
