import React from 'react';

const LocationForm = ({ location }) => {
  return (
    <div className="card mt-4" style={{ borderRadius: '15px' }}>
      <div className="card-body">
        <h3>Location Created:</h3>
        <p><strong>ID:</strong> {location.id}</p>
        <p><strong>Street:</strong> {location.street}</p>
        <p><strong>№:</strong> {location.number}</p>
        <p><strong>City:</strong> {location.city}</p>
        <p><strong>Country:</strong> {location.country}</p>
      </div>
    </div>
  );
};

export default LocationForm;
