import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import GeneralUserSidebar from './GeneralUserSidebar/GeneralUserSidebar';

const GeneralUserHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const history = useHistory();

  const { logout } = useAuth();

  let { url } = useRouteMatch();

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
    history.push('/login');
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
                <NavLink
                  to={`${url}`}
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
                  to={`${url}/pay`}
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
                  to={`${url}/myorders`}
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
                  to={`${url}/addreview`}
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

          <Button variant="outlined" color="error" onClick={handleLogOut}>
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
