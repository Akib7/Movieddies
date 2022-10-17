import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  // containerSpaceAround: {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   margin: "10px 0 !important",
  //   paddingLeft: "230px",
  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column",
  //     flexWrap: "wrap",
  //   },
  // },
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",

    // [theme.breakpoints.up("lg")]: {
    //   flexDirection: "column",
    //   flexWrap: "wrap",
    //   paddingLeft: "230px",
    // },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
      // paddingLeft: "230px",
    },
  },

  // display: "flex",
  //   justifyContent: "space-between",
  //   overflow: "auto",
  //   flexWrap: "wrap",
  //   paddingLeft: "230px",
  //   [theme.breakpoints.down("sm")]: {
  //     justifyContent: "center",
  //     paddingRight: "230px",
  //   },

  containeAround: {
    // paddingLeft: "230px",
    overflow: "auto",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up("lg")]: {
      display: "flex",
      paddingLeft: "230px",
      justifyContent: "space-around",
      margin: "10px 0 !important",
      overflow: "auto",
      flexWrap: "wrap",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "230px",
      overflow: "auto",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "50%",
      // height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
  },
  genresContainer: {
    marign: "10px 0 !important",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
    marginRight: "10px",
  },
  image: {
    width: "100%",
    maxWidth: "7em",
    height: "8em",
    objectFit: "cover",
    borderRadius: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videos: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
}));
