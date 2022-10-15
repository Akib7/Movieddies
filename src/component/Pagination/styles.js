import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "230px",

    [theme.breakpoints.down("sm")]: {
      paddingRight: "230px",
    },
  },
  button: {
    margin: "30px 0",
  },
  pageNumber: {
    margin: "0 20px !important",
    color: theme.palette.text.primary,
  },
}));
