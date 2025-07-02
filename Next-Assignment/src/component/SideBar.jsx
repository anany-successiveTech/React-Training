"use client";

import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// If you have ThemeContext and CartContext, import here; else remove
import { ThemeContext } from "@/context/ThemeProvider";
import { CartContext } from "@/context/CountProvider";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const assignmentQuestionCounts = {
  1: 6,
  2: 19,
  3: 6,
  4: 14,
  // add your other assignments here
};

const SidebarDrawer = ({ assignmentNo, children }) => {
  const theme = useContext(ThemeContext) || { theme: "light" }; // fallback
  const { productCount } = useContext(CartContext) || { productCount: 0 }; // fallback
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [activeQuest, setActiveQuestion] = useState(null);

  // Make sure assignmentNo is a number
  const numAssignmentNo = Number(assignmentNo);
  // Get question count for assignment or fallback to 5
  const questionCount = assignmentQuestionCounts[numAssignmentNo] || 5;
  // Generate array [1..questionCount]
  const countArray = Array.from({ length: questionCount }, (_, i) => i + 1);

  useEffect(() => {
    // Reset active question on assignment change (optional)
    setActiveQuestion(null);
  }, [assignmentNo]);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const handleOnclick = (fileNo) => {
    setActiveQuestion(fileNo);
    router.push(`/assignment-${assignmentNo}/question-${fileNo}`);
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: theme.theme === "light" ? "#1976d2" : "#333",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Assignment {assignmentNo}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.theme === "light" ? "#fff" : "#121212",
            color: theme.theme === "light" ? "#000" : "#fff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: theme.theme === "light" ? "#000" : "#fff" }}
          >
            {theme.theme === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {countArray.map((num) => (
            <ListItem key={num} disablePadding>
              <ListItemButton
                selected={activeQuest === num}
                onClick={() => handleOnclick(num)}
              >
                <ListItemText primary={`Question ${num}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default SidebarDrawer;
