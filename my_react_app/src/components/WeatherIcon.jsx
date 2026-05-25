function WeatherIcon({ weatherMain, size = 60 }) {
  const getWeatherEmoji = (main) => {
    const weatherMap = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Smoke': '🌫️',
      'Haze': '🌫️',
      'Dust': '🌪️',
      'Fog': '🌫️',
      'Sand': '🌪️',
      'Ash': '🌫️',
      'Squall': '🌪️',
      'Tornado': '🌪️'
    }
    return weatherMap[main] || '🌤️'
  }

  return (
    <div style={{ fontSize: `${size}px` }}>
      {getWeatherEmoji(weatherMain)}
    </div>
  )
}

export default WeatherIcon
