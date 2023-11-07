import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HumidityIcon from '@mui/icons-material/Opacity';
import useStyles from "../Styles/styles";
import {getDayMonthFromDate} from "../Constants/Time";

const dayMonth = getDayMonthFromDate();

const CurrentWeather = ({data, forecastList}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.sectionHeader} >Current Weather</Typography>
        </Grid>
        <Grid item xs={4} className={classes.top}>
          <Box className={classes.city}>
            <Typography variant="h3" component="h3" className={classes.cityName} >City Name</Typography>
            <Typography variant="h4" component="h4" className={classes.cityDate} >Today {dayMonth}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.top} >
          <Box className={classes.city}>
            <Typography variant="h3" component="h3" className={classes.cityName} >15 °C</Typography>
            <Typography variant="h4" component="h4" className={classes.cityDate} >Description</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.top2}>
            <Box component="img" alt="weather" className={classes.weatherIcon} src={`assets/weather_icons/01d.png`}></Box>
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
            <Box className={classes.conditionDes}>15 °C</Box>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><AirIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Wind</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>2 m/s</Box>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><HumidityIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Humidity</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>80%</Box>
          </Grid>
        </Grid>
        <Grid item xs={3} >
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionIconBox}><VisibilityIcon sx={{ fontSize: '18px' }}/></Box>
            <Box className={classes.conditionTitle}>Visibility</Box>
          </Grid>
          <Grid item xs={12} className={classes.conditionBox}>
            <Box className={classes.conditionDes}>5 Km</Box>
          </Grid>
        </Grid>
        
      </Grid>

      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.sectionHeader} >Today's Forecast</Typography>
            <Typography variant="subtitle2" className={classes.todayForecast} >5 Available Forecast</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.hourForecast} spacing="4px">
            <Grid item xs={4} sm={2} className={classes.hourForecastGrid}>
              <Box className={classes.hourForecastBox}>
                <Typography variant="h3" component="h3" className={classes.hourForecastTime}>Time</Typography>
                <Box className={classes.hourForecastImgBox}>
                  <Box component="img" alt="weather" className={classes.hourForecastImg} src={`assets/weather_icons/01d.png`} />
                </Box>
                <Typography variant="h3" component="h3" className={classes.hourForecastTemp}>15 °C</Typography>
              </Box>
            </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CurrentWeather;
