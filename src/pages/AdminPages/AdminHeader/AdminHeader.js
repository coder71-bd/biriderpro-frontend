import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { deepOrange, purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const history = useHistory();

  const { logout, admin } = useAuth();

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
    <>
      {admin && (
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
                      to="/makeadmin"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        marginTop: 4,
                      }}
                    >
                      <Button color="inherit" sx={{ ml: 3 }}>
                        Make Admin
                      </Button>
                    </NavLink>
                    <NavLink
                      to="/addproduct"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        marginTop: 4,
                      }}
                    >
                      <Button color="inherit" sx={{ ml: 3 }}>
                        Add Product
                      </Button>
                    </NavLink>
                    <NavLink
                      to="/manageallorders"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        marginTop: 4,
                      }}
                    >
                      <Button color="inherit" sx={{ ml: 3 }}>
                        Manage All Orders
                      </Button>
                    </NavLink>
                    <NavLink
                      to="/manageallproducts"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        marginTop: 4,
                      }}
                    >
                      <Button color="inherit" sx={{ ml: 3 }}>
                        Manage All Products
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
          <AdminSidebar
            toggleDrawer={toggleDrawer}
            isDrawerOpen={isDrawerOpen}
          />
        </Box>
      )}
    </>
  );
};

export default AdminHeader;
