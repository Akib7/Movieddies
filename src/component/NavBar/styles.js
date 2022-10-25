import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      // mobile devices
      marginLeft: 0,
      flexWrap: "wrap",
    },
    backgroundColor: "#e50914",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      //not mobile devices
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      //not mobile devices
      display: drawerWidth, //css in js
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));
