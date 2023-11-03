import { makeStyles } from "@mui/styles";
import theme from "./theme";

const useStyles = makeStyles((muiTheme) => ({
  container: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "95%",
      borderRadius: '0',
      boxShadow: 'none',
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "80%",
      borderRadius: '0 0 1rem 1rem',
      boxShadow: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "1100px",
    },
    width: "100%",
    height: "100%",
    margin: "0 auto",
    padding: "1rem 0 3rem",
    marginBottom: "1rem",
  },

  top_box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "1rem",
  },

  git_icon: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px !important",
    },
    color: "white",
    "&:hover": { color: "#2d95bd" },
  },
}));

export default useStyles;
