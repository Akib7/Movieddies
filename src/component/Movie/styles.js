import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    // zIndex: "100",
    marginBottom: 0,
    textAlign: "center",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "300px",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

// what Ellipsis does is cut the title to half
//e.g. "A really ////long title" to -> "A really ..."
