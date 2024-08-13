import React from 'react';

const LocationForm = ({ location, onDelete }) => {
  return (
    <div className="card mt-4" style={{ borderRadius: '15px', position: 'relative' }}>
      <div className="card-body">
        <h3>Location Created:</h3>
        <p><strong>Street:</strong> {location.street}</p>
        <p><strong>№:</strong> {location.number}</p>
        <p><strong>City:</strong> {location.city}</p>
        <p><strong>Country:</strong> {location.country}</p>
        
        {/* Добавяне на бутон за изтриване */}
        <button 
          className="btn btn-danger" 
          style={{ position: 'absolute', bottom: '10px', right: '10px' }} 
          onClick={() => onDelete(location.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default LocationForm;
