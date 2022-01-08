import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const GeneralUserSidebar = ({ toggleDrawer, isDrawerOpen }) => {
  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawer()}>
      <Box
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          <ListItem button sx={{ px: 7 }}>
            <Link to="/user" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to="/user/pay"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Pay</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to="/user/myorders"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>My Orders</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to="/user/addreview"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Add Review</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default GeneralUserSidebar;
