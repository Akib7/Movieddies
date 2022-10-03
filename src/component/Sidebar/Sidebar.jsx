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

import useStyles from "./styles";
import { useGetGenreQuery } from "../../services/TMDB";
// import "./sidebar.styles.scss";

const Sidebar = ({ setMobileOpen }) => {
  const { data, isFetching } = useGetGenreQuery();
  const theme = useTheme();
  const classes = useStyles();

  console.log(data);

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const demoCategories = [
    { label: "Comedy", value: "comedy" },
    { label: "Action", value: "action" },
    { label: "Horror", value: "horror" },
    { label: "Animation", value: "animation" },
  ];

  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Moviddies Logo"
        />
      </Link>

      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ id, name }) => (
            <Link key={id} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} height={30} />
              </ListItemIcon> */}
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
