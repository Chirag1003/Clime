import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HumidityIcon from '@mui/icons-material/Opacity';
import useStyles from "../Styles/styles";

const WeekWeather = () => {
    const classes = useStyles();

  return (
    <>
      <Grid container className={classes.section} >
        <Grid item xs={12}>
            <Typography variant="h5" component="h5" className={classes.weekSectionHeader} >Weekly Forecast</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.weeksWeatherContainer} >
            <Grid item xs={12} className={classes.weeksWeatherBox}>
                <Grid container className={classes.weeksWeatherBox1}>
                    <Typography xs={12} className={classes.weeksWeatherDay}>Sunday</Typography>
                    <Box xs={12} className={classes.weeksWeatherDescription}>
                        <Box component="img" alt="Weather Icon" className={classes.weeksWeatherImg} src={`assets/weather_icons/01d.png`} />
                        <Typography variant="h4" component="h4" className={classes.weeksWeatherDescriptionDetail} >Description</Typography>
                    </Box>
                </Grid>
                <Grid container className={classes.weeksWeatherBox2}>
                    <Box className={classes.weeksWeatherCondition}>
                        <ThermostatIcon className={classes.weeksWeatherConditionImg}/>
                        <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>15 °C</Typography>
                    </Box>
                    <Box className={classes.weeksWeatherCondition}>
                        <AirIcon className={classes.weeksWeatherConditionImg}/>
                        <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>5 m/s</Typography>
                    </Box>
                </Grid>
                <Grid container className={classes.weeksWeatherBox2}>
                    <Box className={classes.weeksWeatherCondition}>
                        <HumidityIcon className={classes.weeksWeatherConditionImg}/>
                        <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>50 %</Typography>
                    </Box>
                    <Box className={classes.weeksWeatherCondition}>
                        <VisibilityIcon className={classes.weeksWeatherConditionImg}/>
                        <Typography variant="p" component="p" className={classes.weeksWeatherConditionDetail}>8 Km</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        
      </Grid>
    </>
  )
}

export default WeekWeather
