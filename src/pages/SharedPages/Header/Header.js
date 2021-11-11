import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { cyan, purple } from '@mui/material/colors';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Sidebar from './Sidebar/Sidebar';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const { user, admin } = useAuth();
  const user = { email: true };
  const admin = true;

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

  return (
    <Box>
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
              </>
            )}
          </Box>

          {/* <Button variant="outlined" color="error">
            Logout
          </Button> */}
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Sidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
    </Box>
  );
};

export default Header;
