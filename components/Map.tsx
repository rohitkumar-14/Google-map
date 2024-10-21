// components/Map.tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};


interface MapProps {
  location: { lat: number; lng: number };
}

const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
