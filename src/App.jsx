//import area 

import {
  Box, CssBaseline, AppBar, Toolbar,
  Typography, Drawer, List, ListItem, ListItemText,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Button, TextField } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MessageIcon from '@mui/icons-material/Message';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 200;

// functioin defination area 

export default function App() {

 //2.1  hook variable / state variable 

 //2.2 function defination area 

 //2.3 return statement area 


  return (
    <>
      <CssBaseline />

     <Box className="a_tbdr" component="header" variant="permanent" sx={{ height: "50px", display: "flex", alignItems: "center"}}>
                <Box component="img" src="justdial-logo-png_seeklogo-324435.png" alt="Logo" sx={{ height: '90px' }} />
                <TextField variant="outlined" placeholder="Select Location" size="small" InputProps={{
                    sx: {
                        height: 30,
                        fontSize: '14px',
                        ml: 10,
                        mr: 2
                    }
                }}
                />
                <TextField variant="outlined" placeholder="Search in Mumbai" size="small" InputProps={{
                    sx: {
                        height: 30,
                        fontSize: '14px',
                        mr: 5
                    }
                }} />
                <Button variant="Text" sx={{ color: "blue", fontSize: "10px", }}>EN<KeyboardArrowDownIcon /></Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}>We Are Hiring</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}>Investor Relations</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}><MessageIcon />Leads</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}><CampaignIcon />Advertise</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}><TrendingUpIcon />Free Listing</Button>
                <Button variant="Text" sx={{ color: "white", fontSize: "8px", background: "blue" }}>Login/SignUp</Button>
            </Box>


      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            top: "64px",
          },
        }}
      >
        <List>
          {["Home", "Restaurant", "Hotel"].map((text) => (
            <ListItem button component="a" href={`/${text.toLowerCase()}`} key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Outlet Container */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          mt: "64px",
          minHeight: "calc(100vh - 64px - 50px)",
          background: "#f0f2f5",
          p: 3,
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          p: 2,
          bgcolor: "#090b0cff",
          mt: "auto",
          position: "fixed",
          bottom: 0,
          left: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          color: "white"
        }}
      >
        <Typography variant="body2" >
         Copyrights 2008-25.  All Rights Reserved. Privacy | Terms | Infringement
        </Typography>
      </Box>
    </>
  );
}