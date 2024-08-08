import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Holidays.css';
import DatePicker from 'react-datepicker';

import HolidayForm from './HolidayAdminForm';




axios.defaults.baseURL = 'http://localhost:8081';

const Holidays = () => {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    locationId: '',
    date: new Date(),
    duration: 1,
    freeSlots: 0,
  });
  const [errors, setErrors] = useState({});
  const [createdHolidays, setCreatedHolidays] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    const fetchHolidays = async () => {
      try {
        const response = await axios.get('/holidays');
        setCreatedHolidays(response.data);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchLocations();
    fetchHolidays();
  }, []);

  const createHoliday = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('/holidays', {
          location: parseInt(formData.locationId, 10),
          title: formData.title,
          startDate: formData.date.toISOString(),
          duration: formData.duration,
          price: formData.price,
          freeSlots: formData.freeSlots,
        }, {
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.status === 201) {
          console.log('Holiday created successfully:', response.data);
          setCreatedHolidays([response.data, ...createdHolidays]);
        }
      } catch (error) {
        console.error('Error creating holiday:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const validateForm = () => {
    const newErrors = {};
    if (isNaN(formData.duration) || formData.duration < 1) {
      newErrors.duration = 'Duration must be a valid number greater than 0.';
    }
    if (isNaN(formData.freeSlots) || formData.freeSlots < 0) {
      newErrors.freeSlots = 'Free slots must be a valid non-negative number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="container">
      <div className="content mt-4">
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card">
              <div className="card-body">
                <h1>Holidays</h1>
                <p>All created holidays and details</p>
                {createdHolidays.map(holiday => (
                  <HolidayForm key={holiday.id} holiday={holiday} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h1>Create A Holiday</h1>
                <form onSubmit={createHoliday} className="mt-4">
                  <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Holiday Title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      placeholder="Holiday Price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="locationId" className="form-label">Location</label>
                    <select
                      className="form-control"
                      id="locationId"
                      name="locationId"
                      value={formData.locationId}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Location</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.street} {location.number} {location.city} {location.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">Date</label>
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="duration" className="form-label">Duration</label>
                    <input
                      type="number"
                      className="form-control"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      min="1"
                      required
                    />
                    {errors.duration && <small className="text-danger">{errors.duration}</small>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="freeSlots" className="form-label">Free Slots</label>
                    <input
                      type="number"
                      className="form-control"
                      id="freeSlots"
                      name="freeSlots"
                      value={formData.freeSlots}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                    {errors.freeSlots && <small className="text-danger">{errors.freeSlots}</small>}
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Create Holiday
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

export default Holidays;
