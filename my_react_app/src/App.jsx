import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import useWeather from "./hooks/useWeather"
import "./App.css"

function App() {
  const { weather, loading, error, fetchWeather } = useWeather()

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Weather</h1>
      </div>

      <SearchBar onSearch={fetchWeather} />

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Finding weather...</p>
        </div>
      )}
      
      {error && <div className="error-container"><p>{error}</p></div>}
      
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
