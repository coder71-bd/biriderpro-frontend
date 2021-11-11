import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useRouteMatch } from 'react-router-dom';

const GeneralUserSidebar = ({ toggleDrawer, isDrawerOpen }) => {
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
              to={`${url}/pay`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>Pay</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}/myorders`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemText>My Orders</ListItemText>
            </Link>
          </ListItem>
          <ListItem button sx={{ px: 7 }}>
            <Link
              to={`${url}/addreview`}
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
