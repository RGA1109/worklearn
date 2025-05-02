import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemText, Box, CssBaseline, Toolbar, Collapse } from "@mui/material";
import { useState } from "react";
import Home from "./assets/pages/home";
import About from "./assets/pages/about";
import Dialog from "./assets/pages/dialogs";
import FormikForms from "./assets/pages/formik-forms";
import ReactHookForms from "./assets/pages/react-hook-forms";

const drawerWidth = 240;

const App = () => {
  const [formsOpen, setFormsOpen] = useState(false);

  const handleFormsClick = () => {
    setFormsOpen(!formsOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/about">
                  <ListItemText primary="Buttons" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/dialogs">
                  <ListItemText primary="Dialogs" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleFormsClick}>
                  <ListItemText primary="Forms" />
                </ListItemButton>
              </ListItem>
              <Collapse in={formsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/react-hook-forms">
                    <ListItemText primary="UseForm" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/formik-forms">
                    <ListItemText primary="Formik" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/modals">
                  <ListItemText primary="Modals" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/popovers">
                  <ListItemText primary="Popovers" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dialogs" element={<Dialog />} />
            <Route path="/formik-forms" element={<FormikForms />} />
            <Route path="/react-hook-forms" element={<ReactHookForms />} />
            <Route path="/modals" element={<About />} />
            <Route path="/popovers" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
