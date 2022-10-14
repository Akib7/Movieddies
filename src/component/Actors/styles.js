import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    // margin: "5px 0 !important",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
      flexWrap: "wrap",
      paddingLeft: "180px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 0 15px 30px !important",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  image: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64 64 70)",
    width: "80%",
    maxWidth: "90%",
    objectFit: "cover",

    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "100%",
      maxWidth: "100%",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
  },
}));
