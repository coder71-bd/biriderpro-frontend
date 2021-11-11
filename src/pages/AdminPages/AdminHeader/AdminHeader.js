import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
              to="/home"
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
                  to={`${url}/makeAdmin`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    marginTop: 4,
                  }}
                >
                  make admin
                </NavLink>
              </>
            )}
          </Box>

          <Button variant="outlined" color="error">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <AdminSidebar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
    </Box>
  );
};

export default AdminHeader;
