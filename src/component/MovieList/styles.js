import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "auto",
    paddingLeft: "230px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingRight: "230px",
    },
  },
}));
