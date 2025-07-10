"use client";
import React, { useContext } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Home as HomeIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/ThemeProvider";
import { CartContext } from "@/context/CountProvider";

const drawerWidth = 280;

const NavbarDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openAssignments, setOpenAssignments] = React.useState(false);
  const [activeAssignment, setActiveAssignment] = React.useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { productCount } = useContext(CartContext);
  const router = useRouter();
  
  const assignments = [1, 2, 3, 4, 5, 6];

  const assignmentQuestionCounts = {
    1: 6,
    2: 19,
    3: 6,
    4: 14,
    5: 11,
  };

  const handleAssignmentClick = (assignmentNo) => {
    setActiveAssignment(
      assignmentNo === activeAssignment ? null : assignmentNo
    );
  };

  const handleQuestionClick = (assignmentNo, questionNo) => {
    router.push(`/assignment-${assignmentNo}/question-${questionNo}`);
    setOpenDrawer(false);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ position: "relative", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
            }}
          >
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setOpenDrawer(true)}
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Assignments
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "auto",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push("/assessment")}
              sx={{ fontWeight: "bold" }}
            >
              Assessment
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => router.push("/assignment-2/question-11/cart")}
              sx={{ position: "relative", mr: 1 }}
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{
                  fontSize: "20px",
                  color: theme === "light" ? "#f0f0f0" : "#ffffff",
                }}
              />
              {productCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -4,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    userSelect: "none",
                  }}
                >
                  {productCount}
                </span>
              )}
            </IconButton>

            <IconButton onClick={toggleTheme}>
              <i
                className={
                  theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
                }
                style={{ fontSize: "20px", color: "#ffffff" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme === "light" ? "#fff" : "#121212",
            color: theme === "light" ? "#000" : "#fff",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setOpenAssignments(!openAssignments)}
              >
                <HomeIcon sx={{ mr: 2 }} />
                <ListItemText primary="Assignments" />
                {openAssignments ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openAssignments} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {assignments.map((assignmentNo) => (
                  <React.Fragment key={assignmentNo}>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => handleAssignmentClick(assignmentNo)}
                    >
                      <ListItemText primary={`Assignment ${assignmentNo}`} />
                      {activeAssignment === assignmentNo ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>

                    <Collapse
                      in={activeAssignment === assignmentNo}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {[...Array(assignmentQuestionCounts[assignmentNo])].map(
                          (_, i) => (
                            <ListItemButton
                              sx={{ pl: 6 }}
                              key={i}
                              onClick={() =>
                                handleQuestionClick(assignmentNo, i + 1)
                              }
                            >
                              <ListItemText primary={`Question ${i + 1}`} />
                            </ListItemButton>
                          )
                        )}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default NavbarDrawer;
