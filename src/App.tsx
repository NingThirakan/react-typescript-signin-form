import { Box } from '@mui/material';
import { ColorModeToggle } from './components/colorModeToggle';
import { SigninForm } from './components/signinForm';

function App() {
  return (
    <>
      <Box display='flex' justifyContent='flex-end' pt={2} pr={2}>
        <ColorModeToggle />
      </Box>
      <SigninForm />
    </>
  );
}

export default App;
