import WeatherIcon from "./WeatherIcon"

function WeatherCard({ weather }) {
  const getWeatherEmoji = (main) => {
    const weatherMap = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Fog': '🌫️'
    }
    return weatherMap[main] || '🌤️'
  }

  const pressure = weather.main.pressure || 'N/A'
  const visibility = weather.visibility ? (weather.visibility / 1000).toFixed(1) : 'N/A'
  const feelsLike = Math.round(weather.main.feels_like)
  const temp = Math.round(weather.main.temp)

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="weather-description">{weather.weather[0].description}</p>
        </div>
        <WeatherIcon weatherMain={weather.weather[0].main} size={60} />
      </div>

      <div className="temperature">{temp}°C</div>

      <div className="details-grid">
        <div className="detail-item">
          <div className="detail-label"><span className="detail-icon">🤔</span>Feels Like</div>
          <div className="detail-value">{feelsLike}°C</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label"><span className="detail-icon">💧</span>Humidity</div>
          <div className="detail-value">{weather.main.humidity}%</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label"><span className="detail-icon">💨</span>Wind Speed</div>
          <div className="detail-value">{weather.wind.speed} km/h</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label"><span className="detail-icon">🎯</span>Pressure</div>
          <div className="detail-value">{pressure} mb</div>
        </div>

        <div className="detail-item">
          <div className="detail-label"><span className="detail-icon">👁️</span>Visibility</div>
          <div className="detail-value">{visibility} km</div>
        </div>
        
        <div className="detail-item">
          <div className="detail-label"><span className="detail-icon">☁️</span>Cloudiness</div>
          <div className="detail-value">{weather.clouds?.all || 0}%</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
