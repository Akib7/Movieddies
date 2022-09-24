import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "224px",
    [theme.breakpoints.down("sm")]: {
      // mobile devices
      marginLeft: 0,
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      //not mobile devices
      display: "none",
    },
  },
}));
