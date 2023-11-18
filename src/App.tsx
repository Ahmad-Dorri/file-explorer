import { Box } from '@mui/material';
import supabase from './lib/config/supabase';
import HomePage from './pages/home/home-page';
function App() {
  return (
    <Box className="App">
      <HomePage />
    </Box>
  );
}

export default App;
