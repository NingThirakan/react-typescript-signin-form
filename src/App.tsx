import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import FacebookIcon from './assets/icons/facebookIcon';
import GoogleIcon from './assets/icons/googleIcon';

function App() {
  return (
    <Box
      sx={{
        p: '2rem',
        maxWidth: '400px',
        margin: 'auto',
        marginTop: '10vh',
        border: '1px solid #eee',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
        backgroundColor: 'white',
      }}>
      <Stack spacing={2} useFlexGap>
        <CssBaseline />
        <Typography
          variant='h1'
        >
          Sign in
        </Typography>

        <TextField
          variant='outlined'
          label='Email'
          id='email'
          type='email'
          name='email'
          placeholder='your@email.com'
          autoComplete='email'
          autoFocus
          required
          fullWidth
        />
        <TextField
          variant='outlined'
          label='Password'
          id='password'
          type='password'
          name='password'
          placeholder='********'
          autoComplete='currentPassword'
          autoFocus
          required
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox value='remember' color='primary' />
          }
          label="Remember me"
          sx={{
            '&.MuiFormControlLabel-label': {
              userSelect: 'none'
            }
          }}
        />
        <Button
          type='submit'
          variant='contained'
        >
          Sign in
        </Button>
        <Typography
          component='div'
          variant='body2'
          sx={{ textAlign: 'center' }}
        >
          Don&apos;t have an account?{' '}
          <span>
            <Link
              href='#'
              variant='body2'
            >
              Sign up
            </Link>
          </span>
        </Typography>

        <Divider sx={{ fontSize: '0.785rem' }}>Or</Divider>
        <Button
          startIcon={<GoogleIcon />}
          variant='outlined'
          fullWidth
          sx={{}}
        >
          Sign in with  Google
        </Button>
        <Button
          startIcon={<FacebookIcon />}
          variant='outlined'
          fullWidth
          sx={{}}
        >
          Sign in with  Facebook
        </Button>
      </Stack>
    </Box>
  );
}

export default App;
