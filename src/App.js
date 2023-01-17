import {Box, AppBar, Toolbar, Button, IconButton,Typography, CssBaseline} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
	<>
	<CssBaseline />
	<div className="App">
	<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News 
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
	</>
  );
}

export default App;
