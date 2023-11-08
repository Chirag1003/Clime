import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HumidityIcon from '@mui/icons-material/Opacity';
import useStyles from "../Styles/styles";
import { getDayMonth } from "../Constants/Time";


const CurrentWeather = ({data, forecastList}) => {
  const classes = useStyles();

  const dayMonth = getDayMonth();

  return (
    <>
      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.sectionHeader} >Current Weather</Typography>
        </Grid>
        <Grid item xs={4} className={classes.top}>
          <Box className={classes.city}>
            <Typography variant="h3" component="h3" className={classes.cityName} >{data.city}</Typography>
            <Typography variant="h4" component="h4" className={classes.cityDate} >Today {dayMonth}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.top} >
          <Box className={classes.city}>
            <Typography variant="h3" component="h3" className={classes.cityName} >{Math.round(data.main.temp)}°C</Typography>
            <Typography variant="h4" component="h4" className={classes.cityDate} >{data.weather[0].description}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.top2}>
            <Box component="img" alt="weather" className={classes.weatherIcon} src={`assets/weather_icons/${data.weather[0].icon}.png`}></Box>
        </Grid>
      </Grid>

      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={`${classes.sectionHeader} ${classes.sectionHeader2}`} >Weather Conditions</Typography>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><ThermostatIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Real Feel</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>{Math.round(data.main.feels_like)}°C</Box>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><AirIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Wind</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>{Math.round(data.wind.speed)} m/s</Box>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><HumidityIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Humidity</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>{Math.round(data.main.humidity)}%</Box>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><VisibilityIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Visibility</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>{data.visibility/1000} Km</Box>
          </Grid>
        </Grid>
        
      </Grid>

      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.sectionHeader} >Today's Forecast</Typography>
            <Typography variant="subtitle2" className={classes.todayForecast} >{`${forecastList.length} available forecasts`}</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.hourForecast} spacing={2}>
          {forecastList.map((item, idx) => (
            <Grid key={idx} item xs={4} sm={2} className={classes.hourForecastGrid}>
              <Box className={classes.hourForecastBox}>
                <Typography variant="h3" component="h3" className={classes.hourForecastTime}>{item.time}</Typography>
                <Box className={classes.hourForecastImgBox}>
                  <Box component="img" alt="weather" className={classes.hourForecastImg} src={`assets/weather_icons/${item.icon}.png`} />
                </Box>
                <Typography variant="h3" component="h3" className={classes.hourForecastTemp}>{item.temperature}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CurrentWeather;
