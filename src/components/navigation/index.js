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
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";


const Navigation = () =>  {
const [isDraweOpen, setDrawerOpen] = useState(false);
const list = () => (
	<Box
	  sx={{ width:  250 }}
	  role="presentation"
	>
		<List>
		<Link to="settings">
	  
			<ListItem >
				 <ListItemIcon>
					 <SettingsIcon />
				 </ListItemIcon>
				 <ListItemText primary="Settings" />
			</ListItem>
	  </Link>		
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
			 <Link to='/'>
            Movies recommendation
				</Link>
          </Typography>
			
		    <Box sx={{  display: { xs: 'none', lg: 'flex' } }}>
         <Link to="settings">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Settings
              </Button>
		   </Link>
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

