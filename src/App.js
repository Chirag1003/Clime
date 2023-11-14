import { Box, Container, Grid, Link, Typography, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Search from "./Components/Search/Search";
import useStyles from "./Components/Styles/styles";
import CurrentWeather from "./Components/Current_Weather/CurrentWeather";
import WeekWeather from "./Components/Week_Weather/WeekWeather";
import { currentDateTime } from "./Components/Constants/Time";
import { fetchWeatherData, getTodayForecastWeather } from './Components/API/Api';
import { transformDateFormat } from "./Components/Constants/Time";
import { ReactComponent as SplashIcon } from './Components/Styles/moonIcon.svg';
import Logo from "./Components/Styles/logo.png"
import React, { useState } from 'react';


function App() {
  const classes = useStyles();

  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]); 
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const currentDate = transformDateFormat();
    const date = new Date();
    const dt_now = Math.floor(date.getTime() / 1000);
    setIsLoading(true);
    try {
      const [todayWeatherResponse, weekForecastResponse] = await fetchWeatherData(lat, lon);
      const today_forecasts_list = getTodayForecastWeather(weekForecastResponse, currentDate, dt_now);

      setTodayWeather({ city: searchData.label, ...todayWeatherResponse });
      setTodayForecast([...today_forecasts_list]);
      setWeekForecast({ city: searchData.label, ...weekForecastResponse });
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  let weatherContent = (
    <Box xs={12} className={classes.emptyContainer}>
      <SvgIcon component={SplashIcon} inheritViewBox className={classes.emptyContainerImg} />
      <Typography variant="h4" component="h4" className={classes.emptyContainerText}>Explore current weather data and 6-day forecast of your city.</Typography>
    </Box>
  );

  if (isLoading) {
    weatherContent = (
      <Box className={classes.loadingContainer}>
        <Box className={classes.loadingContainerBox}>
          <CircularProgress className={classes.loadingContainerImg} />
          <Typography variant="h3" component="h3" className={classes.loadingContainerText}>Loading...</Typography>
        </Box>
      </Box>
    );
  }

  if (todayWeather  && weekForecast) {
    weatherContent = (
      <React.Fragment>
        <Grid item xs={12} md={6}>
          <CurrentWeather data={todayWeather} forecastList={todayForecast}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeekWeather/>
        </Grid>
      </React.Fragment>
    );
  }

  if (error) {
    weatherContent = (
      <Box className={classes.errorContainer}>
        <ErrorOutlineIcon className={classes.errorContainerImg} />
        <Typography variant="h2" component="h2" className={classes.errorContainerText}>Internal Server Error</Typography>
      </Box>
    );
  }

  const dateTime = currentDateTime();
  return (
    <>
      <Container className={classes.container}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <Box className={classes.topBox}>
              <Box component="img" alt="Website Logo" src={Logo} className={classes.appLogo}/>
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
            {weatherContent} 
        </Grid>
      </Container>
    </>
  );
}

export default App;
