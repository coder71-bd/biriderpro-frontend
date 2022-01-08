import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { deepOrange, purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import GeneralUserSidebar from './GeneralUserSidebar/GeneralUserSidebar';

const GeneralUserHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const { logout } = useAuth();

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

  const handleLogOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{ backgroundColor: deepOrange[200] }}
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
                <NavLink
                  to="/user/pay"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    marginTop: 4,
                  }}
                >
                  <Button color="inherit" sx={{ ml: 3 }}>
                    Pay
                  </Button>
                </NavLink>
                <NavLink
                  to="/user/myorders"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    marginTop: 4,
                  }}
                >
                  <Button color="inherit" sx={{ ml: 3 }}>
                    My Orders
                  </Button>
                </NavLink>
                <NavLink
                  to="/user/addreview"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    marginTop: 4,
                  }}
                >
                  <Button color="inherit" sx={{ ml: 3 }}>
                    Add Review
                  </Button>
                </NavLink>
              </>
            )}
          </Box>

          <Button
            variant="contained"
            color="logoutBtn"
            onClick={handleLogOut}
            sx={{ px: 3, borderRadius: 5, color: '#fff' }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <GeneralUserSidebar
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
      />
    </Box>
  );
};

export default GeneralUserHeader;
