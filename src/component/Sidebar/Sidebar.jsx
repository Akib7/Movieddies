import React, { useEffect } from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

// import useStyles from "./styles";
import "./sidebar.styles.scss";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  // const classes = useStyles();

  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
  return (
    <>
      <Link to="/" className="imageLink">
        <img
          className="image"
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Moviddies Logo"
        />
      </Link>
    </>
  );
};

export default Sidebar;