// pages/index.tsx
"use client"
import { useState } from 'react';
import Map from '../components/Map';
import Search from '../components/Search';

const Home: React.FC = () => {
  const [location, setLocation] = useState({ lat: 20.5937, lng: 78.9629 }); // Default location

  const handleLocationChange = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  return (
    <div>
      <Search onLocationChange={handleLocationChange} />
      <Map location={location} />
    </div>
  );
};

export default Home;
