import { Box, Container, Grid, Link, Typography, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Search from "./Components/Search/Search";
import useStyles from "./Components/Styles/styles";
import CurrentWeather from "./Components/Current_Weather/CurrentWeather";
import WeekWeather from "./Components/Week_Weather/WeekWeather";
import { currentDateTime } from "./Components/Constants/Time";
import { fetchWeatherData, getTodayForecastWeather, getWeekForecastWeather } from './Components/API/Api';
import { transformDateFormat } from "./Components/Constants/Time";
import { ReactComponent as SplashIcon } from './Components/Styles/moonIcon.svg';
import Logo from "./Components/Styles/logo.png"
import React, { useEffect, useState } from 'react';


function App() {
  const classes = useStyles();

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState(null); 
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    if (lat&&lon) {
      setIsLoading(true);
      try {
          const currentDate = transformDateFormat();
          const [todayWeatherResponse, weekForecastResponse] = await fetchWeatherData(lat, lon);
          const today_forecasts_list = getTodayForecastWeather(weekForecastResponse, currentDate);
          const week_forecasts_list = getWeekForecastWeather(weekForecastResponse, currentDate);
          const city = todayWeatherResponse.name + ", " + todayWeatherResponse.sys.country;
          
          setTodayWeather({ city, ...todayWeatherResponse });
          setTodayForecast([...today_forecasts_list]);
          setWeekForecast([...week_forecasts_list]);

          document.title = `Clime - ${city}`;

          setIsLoading(false);
        }
      catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser. Please use latest browser.");
    }
  }, []);

  useEffect(() => {
    const fetchDataAndHandleError = async () => {
      try {
        await fetchData();
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
  
    fetchDataAndHandleError();
    // eslint-disable-next-line
  }, [lat,lon]); 
  
  
  const handleOnSearchChange = (searchData) => {
    setLat(searchData.value.split(' ')[0]);
    setLon(searchData.value.split(' ')[1]);
  };

  let weatherContent = (
    <Box xs={12} className={classes.emptyContainer}>
      <SvgIcon component={SplashIcon} inheritViewBox className={classes.emptyContainerImg} />
      <Typography variant="h4" component="h4" className={classes.emptyContainerText}>Enable location services or manually search for your city to discover current weather conditions and a 4-5 day forecast for your city.</Typography>
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
          <WeekWeather data={weekForecast}/>
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
