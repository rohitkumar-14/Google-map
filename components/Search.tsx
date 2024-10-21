// components/Search.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Search: React.FC<{ onLocationChange: (lat: number, lng: number) => void }> = ({ onLocationChange }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    // Replace this with your LLM endpoint and extraction logic
    const llmResponse = await axios.post('/api/extract-address', { query });
    // const llmResponse = await axios.post('/api/extract-address', { query });

    const address = llmResponse.data.address;

    // Use Google Geocoding API to get the coordinates from the address
    const geocodeResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`);
    
    if (geocodeResponse.data.results.length > 0) {
      const location = geocodeResponse.data.results[0].geometry.location;
      onLocationChange(location.lat, location.lng);
    } else {
      alert('Location not found');
    }
  };

  return (
    <div style={{ position: 'absolute', top: 60, left: 10, zIndex: 1000 }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{padding: "6px 10px"}}
        placeholder="Search for a location..."
      />
      <button onClick={handleSearch} style={{backgroundColor: "black",color:'white',padding: "6px 16px",borderRadius: "1.25rem"}}>Search</button>
    </div>
  );
};

export default Search;
