import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/FilterDrama';
import HumidityIcon from '@mui/icons-material/Opacity';
import useStyles from "../Styles/styles";
import { getWeekDays } from '../Constants/Time';

const WeekWeather = ({data}) => {
    const classes = useStyles();

    const forecastDays = getWeekDays();

  return (
    <>
      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.weekSectionHeader} >Weekly Forecast</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.weeksWeatherContainer} >
            {data.list.slice(0,6).map((item, idx) => (
                <Grid item key={idx} xs={12} className={classes.weeksWeatherBox}>
                    <Grid container className={classes.weeksWeatherBox1}>
                        <Typography xs={12} className={classes.weeksWeatherDay}>{forecastDays[idx]}</Typography>
                        <Box xs={12} className={classes.weeksWeatherDescription}>
                            <Box component="img" alt="Weather Icon" className={classes.weeksWeatherImg} src={`assets/weather_icons/${item.weather[0].icon}.png`} />
                            <Typography variant="h4" component="h4" className={classes.weeksWeatherDescriptionDetail} >{item.weather[0].description}</Typography>
                        </Box>
                    </Grid>
                    <Grid container className={classes.weeksWeatherBox2}>
                        <Box className={classes.weeksWeatherCondition}>
                            <ThermostatIcon className={classes.weeksWeatherConditionImg}/>
                            <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>{Math.round(item.main.temp)} °C</Typography>
                        </Box>
                        <Box className={classes.weeksWeatherCondition}>
                            <AirIcon className={classes.weeksWeatherConditionImg}/>
                            <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>{Math.round(item.wind.speed)} m/s</Typography>
                        </Box>
                    </Grid>
                    <Grid container className={classes.weeksWeatherBox2}>
                        <Box className={classes.weeksWeatherCondition}>
                            <HumidityIcon className={classes.weeksWeatherConditionImg}/>
                            <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>{Math.round(item.main.humidity)}%</Typography>
                        </Box>
                        <Box className={classes.weeksWeatherCondition}>
                            <CloudIcon className={classes.weeksWeatherConditionImg}/>
                            <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>{item.clouds.all}%</Typography>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Grid>
        
      </Grid>
    </>
  )
}

export default WeekWeather
