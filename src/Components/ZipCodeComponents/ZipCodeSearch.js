import React, { useState } from 'react';
import axios from 'axios';

const ZipcodeSearch = () => {
  const [zipcode, setZipcode] = useState('');
  const [location, setLocation] = useState(null);

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=YOUR_API_KEY`)
      .then((response) => {
        const { results } = response.data;
        if (results.length > 0) {
          const { formatted_address, geometry } = results[0];
          setLocation({
            address: formatted_address,
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input type="text" value={zipcode} onChange={handleZipcodeChange} placeholder="Enter a zipcode" />
      <button onClick={handleSearch}>Search</button>
      {location && (
        <div>
          <h3>Location:</h3>
          <p>Address: {location.address}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default ZipcodeSearch;
