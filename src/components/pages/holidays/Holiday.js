import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Holidays.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import HolidayForm from './HolidayAdminForm';

axios.defaults.baseURL = 'http://localhost:8080';

const Holidays = () => {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: null,  // Changed from locationId to full location object
    duration: 0,
    freeSlots: 0,
    date: new Date(),  // Ensure the date is initialized
  });
  const [errors, setErrors] = useState({});
  const [createdHolidays, setCreatedHolidays] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user?.accessToken;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('/locations', config);

        setLocations(response.data);

      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []); 


  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user?.accessToken;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('/holidays', config);
        setCreatedHolidays(response.data);

      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []); 


  const createHoliday = async (event) => {
    event.preventDefault();
  
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user?.accessToken;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const formattedStartDate = formData.date.toISOString().split('T')[0];
  
      // Създаване на обекта с необходимите полета за заявката
      const holidayData = {
        duration: formData.duration,
        freeSlots: formData.freeSlots,
        price: parseFloat(formData.price),
        location: {
          number: formData.location.number,
          country: formData.location.country,
          city: formData.location.city,
          street: formData.location.street,
          imageUrl: formData.location.imageUrl,
          id: formData.location.id,
        },
        id: formData.location.id, // Тук се предполага, че id-то на holiday ще е същото като на локацията.
        title: formData.title,
        startDate: formattedStartDate,
      };
  
      const response = await axios.post('/holidays', holidayData, config);
  
      if (response.status === 201) {
        console.log('Holiday created successfully:', response.data);
        setCreatedHolidays([response.data, ...createdHolidays]);
      }
    } catch (error) {
      console.error('Error creating holiday:', error);
    }
  };
  
  



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'location') {
      const selectedLocation = locations.find(location => location.id === parseInt(value, 10));
      setFormData({ ...formData, location: selectedLocation });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
              </div>
            </div>
            {createdHolidays.map(holiday => (
                  <HolidayForm key={holiday.id} holiday={holiday} />
                ))}
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
                      placeholder="Title"
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
                      placeholder="Price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location" className="form-label">Location</label>
                    <select
                      className="form-control"
                      id="location"
                      name="location"
                      value={formData.location?.id || ""}
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
                      calendarClassName="calendar" // Add custom class for the calendar
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
                  <button type="submit" className="btn btn-outline-primary mt-3">
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
