// "use client";
// import React, { useContext, useState } from "react";
// import Button from "./Button";
// import { useRouter } from "next/navigation";
// import { ThemeContext } from "@/context/ThemeProvider";
// import { CartContext } from "@/context/CountProvider";
// import "@/app/styles/navBar.css";

// const Navbar = () => {
//   const router = useRouter();
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { productCount } = useContext(CartContext);
//   const [activeQuestion, setActiveQuestion] = useState(null);

//   const handleOnclick = (assignmentNo) => {
//     setActiveQuestion(assignmentNo);
//     router.push(`/assignment-${assignmentNo}`);
//   };

//   return (
//     <div className="btn-container nav-style">
//       {[1, 2, 3, 4].map((num) => (
//         <Button
//           key={num}
//           name={`assignment.${num}`}
//           value={num}
//           onclick={() => handleOnclick(num)}
//           active={activeQuestion === num}
//         />
//       ))}

//       <div className="icon-container">
//         <div className="theme-toggle">
//           <button className="theme-button" onClick={toggleTheme}>
//             {theme === "light" ? (
//               <i
//                 className="fa-solid fa-moon fa-2xl"
//                 style={{ color: "#000000" }}
//               ></i>
//             ) : (
//               <i
//                 className="fa-solid fa-sun fa-2xl"
//                 style={{ color: "#ffffff" }}
//               ></i>
//             )}
//           </button>
//         </div>

//         <div className="navbar-cart">
//           <button
//             className="navbar-cart-button"
//             onClick={() => router.push("/assignment-2/question-11/cart")}
//           >
//             <i
//               className="fa-solid fa-cart-shopping fa-xl"
//               style={{ color: theme === "light" ? "#1f1f1f" : "#f0f0f0" }}
//             ></i>
//             <span className="cart-count">{productCount}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

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

  const assignments = [1, 2, 3, 4, 5];

  const assignmentQuestionCounts = {
    1: 6,
    2: 19,
    3: 6,
    4: 14,
    5: 12
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
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => {
              setOpenDrawer(true);
            }}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Assignments <span></span>
          </Typography>
        </Toolbar>
      </AppBar>

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
            {/* Assignments with Home Icon */}
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

            {/* Cart button */}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <ListItemButton
                onClick={() => {
                  router.push("/assignment-2/question-11/cart");
                  setOpenDrawer(false);
                }}
              >
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{
                    fontSize: "20px",
                    color: theme === "light" ? "#1f1f1f" : "#f0f0f0",
                    marginRight: "16px",
                    position: "relative",
                  }}
                ></i>
                <ListItemText primary="Cart" />
                {productCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 28,
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
              </ListItemButton>
            </ListItem>

            {/* Theme toggle button */}
            <ListItem disablePadding>
              <ListItemButton onClick={toggleTheme}>
                <span
                  style={{
                    fontSize: "20px",
                    color: theme === "light" ? "#000000" : "#ffffff",
                    marginRight: "16px",
                  }}
                >
                  {theme === "light" ? (
                    <i className="fa-solid fa-moon"></i>
                  ) : (
                    <i className="fa-solid fa-sun"></i>
                  )}
                </span>
                <ListItemText primary="Theme" />
              </ListItemButton>
            </ListItem>
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
