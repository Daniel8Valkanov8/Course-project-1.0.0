import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Locations.css';
import LocationForm from './LocationForm';

axios.defaults.baseURL = 'http://localhost:8081';

const Locations = () => {
  const [formData, setFormData] = useState({
    street: '',
    number: '',
    city: '',
    country: ''
  });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);

  const createLocation = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/locations', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 201) {
        console.log('Location created successfully:', response.data);
        setLocations([response.data, ...locations]);
      }
    } catch (error) {
      console.error('Error creating location:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <div className="content mt-4">
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card">
              <div className="card-body">
                <h1>Locations</h1>
                <p>All available locations for holidays.</p>
              </div>
            </div>
            {locations.map((location) => (
              <LocationForm key={location.id} location={location} />
            ))}
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h1>Create A New Location</h1>
                <form onSubmit={createLocation} className="mt-4">
                  <div className="form-group">
                    <label htmlFor="street" className="form-label">Street</label>
                    <input
                      type="text"
                      className="form-control"
                      id="street"
                      placeholder="Street"
                      value={formData.street}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number" className="form-label">Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Number"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Create Location
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
