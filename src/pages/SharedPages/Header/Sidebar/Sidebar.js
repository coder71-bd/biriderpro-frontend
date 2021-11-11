import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleDrawer, isDrawerOpen }) => {
  // const { user, admin } = useAuth();
  const user = { email: true };
  const admin = false;

  return (
    <Drawer open={isDrawerOpen} onClose={toggleDrawer()}>
      <Box
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          <ListItem button sx={{ px: 7 }}>
            {user.email && (
              <>
                {admin ? (
                  <Link
                    to="/admin"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ListItemText>Dashboard</ListItemText>
                  </Link>
                ) : (
                  <Link
                    to="/user"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ListItemText>Dashboard</ListItemText>
                  </Link>
                )}
              </>
            )}
          </ListItem>
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

export default Sidebar;
