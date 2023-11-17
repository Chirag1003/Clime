import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import SplashIcon from "./scales.svg";

const useStyles = makeStyles((muiTheme) => ({
  container: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "95%",
      borderRadius: "0.5rem",
      boxShadow:
        "rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "95%",
      borderRadius: "1rem 1rem 1rem 1rem",
      boxShadow:
        "rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "900px",
    },
    backgroundImage: `url(${SplashIcon})`,
    width: "100%",
    height: "100%",
    margin: "2.5% auto",
    padding: "1rem 0 3rem",
  },

  emptyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "500px",
  },

  emptyContainerText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },
    color: "rgba(255,255,255, .85)",
    fontFamily: "Poppins",
    textAlign: "center",
    margin: "2rem 0 !important",
    maxWidth: "80%",
    lineHeight: "22px",
  },

  emptyContainerImg: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "100px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "120px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "140px !important",
    },
  },

  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "500px",
  },

  loadingContainerBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },

  loadingContainerImg: {
    color: "rgba(255,255,255, .8)",
  },

  loadingContainerText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px !important",
    },
    color: "rgba(255, 255, 255, .8)",
    lineHeight: 1,
    fontFamily: "Poppins",
  },

  errorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem auto",
    gap: "8px",
    flex: "inherit",
    width: "auto",
    padding: "1rem",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column !important",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row !important",
    },
    color: "#DC2941",
    border: "1px solid #DC2941",
    borderRadius: "8px",
    background: "rgba(220, 41, 65, .25)",
  },

  errorContainerImg: {
    fontSize: "24px",
  },

  errorContainerText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },
    fontFamily: "Poppins",
    textAlign: "center",
  },

  topBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "1rem",
  },

  appLogo: {
    [theme.breakpoints.up("xs")]: {
      height: "26px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "30px",
    },
    [theme.breakpoints.up("md")]: {
      height: "32px",
    },
    width: "auto",
  },

  topTime: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px !important",
    },
    color: "rgba(255,255,255,.7)",
  },

  git_icon: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "26px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "32px !important",
    },
    color: "white",
    "&:hover": { color: "#2d95bd" },
  },

  section: {
    padding: "2.5rem 0rem 0rem",
  },

  top: {
    height: "80px",
  },

  top2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
  },

  sectionHeader: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
    },
    color: "rgba(255,255,255,.7)",
    fontWeight: "600 !important",
    lineHeight: 1,
    textAlign: "center",
    fontFamily: "Roboto Condensed",
  },

  sectionHeader2: {
    paddingBottom: "0.8rem !important",
  },

  todayForecast: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "8px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "10px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
    color: "rgb(4, 196, 224)",
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Roboto Condensed",
  },

  city: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
  },

  cityName: {
    fontFamily: "Poppins !important",
    fontWeight: "600 !important",
    color: "white",
    textTransform: "uppercase",
    lineHeight: 1,
    marginBottom: "8px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "15px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "17px !important",
    },
  },

  cityDate: {
    color: "rgba(255,255,255, .7)",
    lineHeight: 1,
    fontFamily: "Roboto Condensed",
    [theme.breakpoints.up("xs")]: {
      fontSize: "10px !important",
      letterSpacing: "1px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px !important",
      letterSpacing: "0 !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
  },

  weatherIcon: {
    [theme.breakpoints.up("xs")]: {
      width: "50px !important",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60px !important",
    },
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: "0 auto",
    padding: "0",
  },

  conditionBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40px",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column !important",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row !important",
    },
  },

  conditionIconBox: {
    display: "flex",
    alignItems: "center",
    color: "rgba(255, 255, 255, .7)",
    padding: 0,
  },

  conditionTitle: {
    color: "rgba(255, 255, 255, .7)",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      fontSize: "10px !important",
      paddingLeft: "0px !important",
      paddingTop: "2px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px !important",
      paddingLeft: "4px !important",
      paddingTop: "0px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
      paddingLeft: "6px !important",
    },
  },

  conditionDes: {
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "white",
    lineHeight: 1,
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px !important",
    },
  },

  hourForecast: {
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    marginTop: "0.8rem !important",
  },

  hourForecastGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      marginBottom: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0rem",
    },
  },

  hourForecastBox: {
    background:
      "linear-gradient(0deg, rgba(255, 255, 255, 10%) 0%, rgba(171, 203, 222, 50%) 100%) 0% 0%",
    borderRadius: "8px",
    boxShadow:
      "rgba(0, 0, 0, 50%) 0px 10px 15px -3px, rgba(0, 0, 0, 10%) 0px 4px 6px -2px",
    textAlign: "center",
    padding: "4px 0",
    width: "100%",
  },

  hourForecastTime: {
    fontWeight: "400",
    color: "rgba(255, 255, 255, .7)",
    lineHeight: 1,
    padding: "4px",
    fontFamily: "Poppins",
    [theme.breakpoints.up("xs")]: {
      fontSize: "10px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px !important",
    },
  },

  hourForecastImgBox: {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "4px",
  },

  hourForecastImg: {
    [theme.breakpoints.up("xs")]: {
      width: "36px !important",
    },
    [theme.breakpoints.up("sm")]: {
      width: "42px !important",
    },
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: "0 auto",
  },

  hourForecastTemp: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
      marginBottom: "8px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px !important",
      marginBottom: "0",
    },
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
    lineHeight: 1,
    fontFamily: "Poppins",
  },

  weekSectionHeader: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
    },
    color: "rgba(255,255,255,.7)",
    fontWeight: "600 !important",
    lineHeight: 1,
    textAlign: "center",
    fontFamily: "Roboto Condensed",
    margin: "0 0 0.8rem !important",
  },

  weeksWeatherContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  weeksWeatherBox: {
    display: "flex",
    alignItems: "center",
    padding: "2px 0 2px",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 10%) 0%, rgba(171, 203, 222, 50%) 100%) 0% 0%",
    borderRadius: "8px",
    boxShadow:
      "rgba(0, 0, 0, 40%) 0px 10px 15px -3px, rgba(0, 0, 0, 10%) 0px 4px 6px -2px",
  },

  weeksWeatherBox1: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "flex-start",
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20px !important",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "32px !important",
    },
  },

  weeksWeatherDay: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "13px !important",
      fontWeight: "400 !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px !important",
      fontWeight: "600 !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "15px !important",
    },
    fontFamily: "Poppins",
    color: "white",
    lineHeight: 1,
    height: "31px",
    alignItems: "center",
    display: "flex",
  },

  weeksWeatherDescription: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "31px",
  },

  weeksWeatherImg: {
    [theme.breakpoints.up("xs")]: {
      width: "24px !important",
    },
    [theme.breakpoints.up("sm")]: {
      width: "28px !important",
    },
    [theme.breakpoints.up("md")]: {
      width: "31px !important",
    },
    height: "auto",
    marginRight: "4px",
  },

  weeksWeatherDescriptionDetail: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
    color: "rgba(255,255,255, .8)",
    lineHeight: 1,
    fontFamily: "Roboto Condensed",
  },

  weeksWeatherBox2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  weeksWeatherCondition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "31px",
    color: "rgba(255, 255, 255, .7)",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      gap: "3px !important",
    },
    [theme.breakpoints.up("sm")]: {
      gap: "4px !important",
    },
    [theme.breakpoints.up("md")]: {
      gap: "6px !important",
    },
  },

  weeksWeatherConditionImg: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px !important",
    },
  },

  weeksWeatherConditionDetail: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
      fontWeight: "400",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "13px !important",
      fontWeight: "600",
    },
    color: "white",
    fontFamily: "Poppins",
    lineHeight: 1,
  },
}));

export default useStyles;
