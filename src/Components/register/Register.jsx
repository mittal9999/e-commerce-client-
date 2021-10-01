import {createTheme,ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography  from '@mui/material/Typography'; 
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';




const theme = createTheme();
  
export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

   return (
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.chooseyourmobile.com/wp-content/uploads/2020/09/OnePlus-8T-Green-Silver-Colors-Image.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon/>
            </Avatar>
      <Typography component="h1" variant="h5">
      Sign Up
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      
    <TextField
        margin="normal"
        required
        fullWidth
        id="fname"
        label=" Enter FirstName"
        name="First Name"
        autoComplete="Fname"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="lname"
        label=" Enter LastName"
        name=" last Name"
        autoComplete="lname"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label=" Enter UserName"
        name="User name"
        autoComplete="uname"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label=" Enter Email ID"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="number"
        label=" Enter MobileNo"
        name="mobileno"
        autoComplete="number"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="pass"
        label=" Enter Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      
      {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="http://localhost:3000/login" variant="body2">
                  {"You have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
   );
}


