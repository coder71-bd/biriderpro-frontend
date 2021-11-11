import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminSidebar = ({ toggleDrawer, isDrawerOpen }) => {
  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawer()}>
      <Box
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          <ListItem button sx={{ px: 7 }}></ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to="/explore"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>explore</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default AdminSidebar;
