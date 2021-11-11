import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useRouteMatch } from 'react-router-dom';

const AdminSidebar = ({ toggleDrawer, isDrawerOpen }) => {
  let { url } = useRouteMatch();

  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawer()}>
      <Box
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}/makeadmin`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Make Admin</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}/addproduct`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Add Product</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}/manageallorders`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Manage All Orders</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}/manageallproducts`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Manage All Products</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default AdminSidebar;