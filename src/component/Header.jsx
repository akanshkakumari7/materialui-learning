import {
  Badge,
  Divider,
  IconButton,
  Toolbar,
  styled, // Import styled from @mui/system
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Function to create styles object
const createStyles = () => ({
  title: {
    flexGrow: 1,
    marginLeft: 2,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
});

const Header = () => {
  // Call the function to get the styles object
  const styles = createStyles();

  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        {/* Apply styles from the object */}
        <Typography variant="h6" style={styles.title}>
          Blogging website
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {/* Apply styles from the object */}
      <Toolbar style={styles.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
