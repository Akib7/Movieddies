import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "490px",
    textDecoration: "none",
    paddingLeft: "230px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingLeft: "10px",
      width: "410px",
    },
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  cardRoot: {
    position: "relative",
  },
  media: {
    position: "absolute",
    top: 0,
    rigth: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.575)",
    backgroundBlendMode: "darken",
  },
  cardContent: {
    color: "#fff",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContentRoot: {
    position: "relative",
    backgroundColor: "transparent",
  },
}));
