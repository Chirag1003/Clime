const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_GEO_API_HOST,
  },
};

const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Fetch cities based on input using the Geo API
export async function fetchCities(input) {
  try {
    const response = await fetch( `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`, GEO_API_OPTIONS );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch weather data for a location using the Weather API
export async function fetchWeatherData(lat, lon) {
  try {
    let [weatherPromise, forcastPromise] = await Promise.all([
      fetch( `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric` ),
      fetch( `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric` ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forcastResponse = await forcastPromise.json();
    return [weatherResponse, forcastResponse];
  } catch (error) {
    console.log(error);
  }
}

// Return Today's forecast weather details by filtering for upcoming hours
export const getTodayForecastWeather = (response, currentDate) => {
  let allTodayForecasts = [];

  if (!response || Object.keys(response).length === 0 || response.cod === "404") {
    return [];
  }
  else {
    response?.list.slice().map((item) => {
      if (item.dt_txt.startsWith(currentDate.substring(0, 10))) {
        if (item.dt_txt > currentDate) {
          allTodayForecasts.push({
            time: item.dt_txt.split(" ")[1].substring(0, 5),
            icon: item.weather[0].icon,
            temperature: Math.round(item.main.temp) + " °C",
          });
        }
      }
      return allTodayForecasts;
    });
  }

  return [...allTodayForecasts];
};

// Return the Week's forecast weather details by filtering the forecastResponse for next available dates and time at 12 noon
export const getWeekForecastWeather = (response, currentDate) => {
  let allWeekForecasts = [];

  if (!response || Object.keys(response).length === 0 || response.cod === "404") {
    return [];
  }
  else {
    allWeekForecasts = response.list.filter((item) => {
      return ( item.dt_txt.substring(0, 10) > currentDate.substring(0, 10) && item.dt_txt.substring(11, 13) === "12" );
    });
  }

  return allWeekForecasts;
};
