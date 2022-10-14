import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",

    // [theme.breakpoints.up("lg")]: {
    //   flexDirection: "column",
    //   flexWrap: "wrap",
    //   paddingLeft: "230px",
    // },

    // [theme.breakpoints.up("md")]: {
    //   paddingLeft: "230px",
    // },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  containerAround: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      paddingLeft: "230px",
      justifyContent: "space-around",
      margin: "10px 0 !important",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "230px",
    },
  },
  image: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
    width: "80%",
    maxWidth: "90%",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "50%",
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
  },
}));
