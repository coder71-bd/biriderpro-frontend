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
import { cyan, purple } from '@mui/material/colors';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Sidebar from './Sidebar/Sidebar';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { user, admin, logout } = useAuth();

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
  };

  return (
    <Box>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully logged out
        </Alert>
      </Snackbar>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{ backgroundColor: cyan['A100'] }}
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
            <NavLink
              to="/"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: purple[500] }}
              >
                BIRIDERPRO
              </Typography>
            </NavLink>
            {width > 980 && (
              <>
                {user.email && (
                  <>
                    {admin ? (
                      <NavLink
                        to="/admin"
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          marginTop: 4,
                        }}
                      >
                        <Button color="inherit" sx={{ ml: 3 }}>
                          Admin Dashboard
                        </Button>
                      </NavLink>
                    ) : (
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
                  </>
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
            <Button variant="outlined" color="error" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="primary">
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
