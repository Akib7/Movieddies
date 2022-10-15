import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "auto",
    flexWrap: "wrap",
    paddingLeft: "230px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingRight: "230px",
    },
  },
}));
