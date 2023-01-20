import { useState } from "react";
import {
	CssBaseline,
} from "@mui/material";
import { Navigation } from "./components";
import { 
 BrowserRouter,
 Routes,
 Route
 } from "react-router-dom";


function App() {
  return (
	<BrowserRouter>
	<CssBaseline />
	<Navigation />
	</BrowserRouter>
  );
}

export default App;
