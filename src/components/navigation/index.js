import { useState } from "react";
import {
	Drawer,
	Box,
	AppBar, 
	Toolbar, 
	IconButton,
   Typography, 
	List,
	ListItem,
   Button,
	ListItemText,
	Hidden,
	ListItemButton,
	ListItemIcon
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SettingsIcon from '@mui/icons-material/Settings';


const Navigation = () =>  {
const [isDraweOpen, setDrawerOpen] = useState(false);
const list = () => (
	<Box
	  sx={{ width:  250 }}
	  role="presentation"
	>
	  <List>
			<ListItem >
				 <ListItemIcon>
					 <SettingsIcon />
				 </ListItemIcon>
				 <ListItemText primary="Settings" />
			</ListItem>
	  </List>		
	</Box>
 );	
  return (
	<Box sx={{flexGrow:1}}>
      <AppBar position="static">
        <Toolbar>
			<Hidden only={['lg', 'xl']}>
          <IconButton
		 	   onClick={() => setDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
			 </Hidden>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies recommendation
          </Typography>
		    <Box sx={{  display: { xs: 'none', lg: 'flex' } }}>
         
              <Button
              
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Settings
              </Button>
           
          </Box>
        </Toolbar>
      </AppBar>
		<Drawer
            anchor="left"
            open={isDraweOpen}
            onClose={() => setDrawerOpen(false)}
          >
           {list()}
          </Drawer>
</Box>
 
  );
}

export default Navigation;

