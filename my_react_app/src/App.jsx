import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import useWeather from "./hooks/useWeather"

function App() {
  const { weather, loading, error, fetchWeather } = useWeather()

  return (
    <div>
      <h1>My Weather App</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
