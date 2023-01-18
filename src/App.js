import { useState } from "react";
import {
	Drawer,
	Box,
	AppBar, 
	Toolbar, 
	Button,
	IconButton,
   Typography, 
	CssBaseline,
	List,
	ListItem,
   Divider,
	ListItemText,
	Hidden,
	ListItemButton,
	ListItemIcon
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Navigation } from "./components";


function App() {
const [isDraweOpen, setDrawerOpen] = useState(false);
const list = () => (
	<Box
	  sx={{ width:  250 }}
	  role="presentation"
	>
	  <List>
		 {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
			<ListItem key={text} disablePadding>
			  <ListItemButton>
				 <ListItemIcon>
					{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
				 </ListItemIcon>
				 <ListItemText primary={text} />
			  </ListItemButton>
			</ListItem>
		 ))}
	  </List>		
	  <Divider />
	  <List>
		 {['All mail', 'Trash', 'Spam'].map((text, index) => (
			<ListItem key={text} disablePadding>
			  <ListItemButton>
				 <ListItemIcon>
					{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
				 </ListItemIcon>
				 <ListItemText primary={text} />
			  </ListItemButton>
			</ListItem>
		 ))}
	  </List>
	</Box>
 );
  return (
	<>
	<CssBaseline />
	<Navigation />
	</>
  );
}

export default App;
