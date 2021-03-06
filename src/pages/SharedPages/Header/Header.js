import MenuIcon from '@mui/icons-material/Menu';
import {
  Alert,
  AppBar,
  Box,
  Button,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
} from '@mui/material';
import { indigo } from '@mui/material/colors';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Sidebar from './Sidebar/Sidebar';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const { width } = useWindowDimensions();

  const toggleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully logged out
        </Alert>
      </Snackbar>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{ backgroundColor: indigo[500], color: 'white' }}
      >
        <Toolbar>
          {width < 980 && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'center',
            }}
          >
            <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant="h6" component="div">
                BIRIDERPRO
              </Typography>
            </NavLink>
            {width > 980 && (
              <>
                {user.email && (
                  <NavLink
                    to="/user"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      marginTop: 4,
                    }}
                  >
                    <Button color="inherit" sx={{ ml: 3 }}>
                      Dashboard
                    </Button>
                  </NavLink>
                )}
                <NavLink
                  to="/explore"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    marginTop: 4,
                  }}
                >
                  <Button color="inherit" sx={{ ml: 3 }}>
                    Explore
                  </Button>
                </NavLink>
              </>
            )}
          </Box>

          {user.email ? (
            <Button
              variant="contained"
              onClick={handleLogOut}
              sx={{ px: 3, color: '#fff' }}
            >
              Logout
            </Button>
          ) : (
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="success"
                sx={{ px: { xs: 1, md: 3 }, color: '#fff' }}
              >
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
      <Sidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
    </Box>
  );
};

export default Header;
