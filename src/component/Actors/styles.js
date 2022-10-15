import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  // containerSpaceAround: {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   margin: "10px 0 !important",

  //   // [theme.breakpoints.up("lg")]: {
  //   //   flexDirection: "column",
  //   //   flexWrap: "wrap",
  //   //   paddingLeft: "230px",
  //   // },

  //   // [theme.breakpoints.up("md")]: {
  //   //   paddingLeft: "230px",
  //   // },

  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column",
  //     flexWrap: "wrap",
  //   },
  // },
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
    // [theme.breakpoints.down("sm")]: {
    //   // flexDirection: "column",
    //   // flexWrap: "wrap",
    //   paddingLeft: "230px",
    // },
  },
  image: {
    maxWidth: "90%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0.5em 0.5em 1em rgb(64, 64, 70)",
    marginLeft: "230px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingRight: "230px",
      alignItems: "center",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
  },
}));
