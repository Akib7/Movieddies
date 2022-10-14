import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    // margin: "5px 0 !important",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
      flexWrap: "wrap",
      paddingLeft: "150px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 0 5px 30px !important",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 0.5em 1em",
    // width: "80%",
    maxWidth: "90%",
    objectFit: "cover",

    [theme.breakpoints.up("lg")]: {
      borderRadius: "20px",
      width: "80%",
    },

    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "100%",
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
  },
}));
