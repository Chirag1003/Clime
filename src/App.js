import { Box, Container, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Search from "./Components/Search/Search";
import useStyles from "./Components/Styles/styles";
import CurrentWeather from "./Components/Current_Weather/CurrentWeather";
import { transformDateFormat } from "./Components/Constants/Time";

function App() {
  const classes = useStyles();

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  const dateTime = transformDateFormat();
  return (
    <>
      <Container className={classes.container}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <Box className={classes.topBox}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Clime
              </Typography>
              <Typography variant="body2" className={classes.topTime}>
                {dateTime}
              </Typography>
              <Link
                href="https://github.com/nikhilyadvv"
                target="_blank"
                underline="none"
                sx={{ display: "flex" }}
              >
                <GitHubIcon className={classes.git_icon} />
              </Link>
            </Box>
            <Search onSearchChange={handleOnSearchChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CurrentWeather />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
