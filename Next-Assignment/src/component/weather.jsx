import React from 'react';

const Weather = ({ temperature }) => {
  if (temperature === null || temperature === undefined || temperature === '') {
    return <h2>Please enter a temperature.</h2>;
  }

  let message = '';

  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature < 10) {
    message = "It's cold today!";
  } else {
    message = "No weather data to show.";
  }

  return <h2>{message}</h2>;
};

export default Weather;
