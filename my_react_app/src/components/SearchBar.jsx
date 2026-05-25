import { useState } from "react"

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("")

  const handleClick = () => {
    if (city.trim()) {
      onSearch(city)
      setCity("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick()
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-btn" onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar
