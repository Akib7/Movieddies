import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "490px",
    textDecoration: "none",
    paddingLeft: "230px",
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
}));
