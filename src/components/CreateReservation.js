import React, { useState, useEffect } from 'react';
import './HomeHolidayComponent.css'; // Не забравяй да създадеш този CSS файл

const CreateReservationComponent = () => {
  const [holidays, setHolidays] = useState([]);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [contactName, setContactName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/holidays')
      .then(response => response.json())
      .then(data => setHolidays(data))
      .catch(error => console.error('Error fetching holidays:', error));
  }, []);

  const handleCreateReservationClick = (holiday) => {
    // Затваряме предишно отворената резервация, ако има такава
    setSelectedHoliday(selectedHoliday?.id === holiday.id ? null : holiday);
  };

  const handleFinishClick = () => {
    if (selectedHoliday) {
      const reservation = {
        phoneNumber,
        contactName,
        holiday: selectedHoliday,
      };

      fetch('http://localhost:8080/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Reservation created:', data);
          setSelectedHoliday(null);
          setContactName('');
          setPhoneNumber('');
        })
        .catch(error => console.error('Error creating reservation:', error));
    }
  };

  return (
    <div className="holiday-container">
      {holidays.map(holiday => (
        <div 
          key={holiday.id} 
          className={`holiday-card ${selectedHoliday?.id === holiday.id ? 'expanded' : ''}`}
        >
          <h3 className="holiday-title">{holiday.title}</h3>
          <p className="holiday-location">
            {holiday.location.city}, {holiday.location.country}
          </p>
          <p className="holiday-dates">
            {new Date(holiday.startDate).toLocaleDateString()} - {holiday.duration} days
          </p>
          <p className="holiday-price">{holiday.price}</p>
          <p className="holiday-slots">{holiday.freeSlots} slots available</p>
          <button 
            className="button"
            onClick={() => handleCreateReservationClick(holiday)}
          >
            {selectedHoliday?.id === holiday.id ? 'Close' : 'Create Reservation'}
          </button>
          {selectedHoliday?.id === holiday.id && (
            <div className="reservation-form">
              <h4>Reservation Form</h4>
              <input 
                type="text"
                placeholder="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              <input 
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button 
                className="button"
                onClick={handleFinishClick}
              >
                Finish
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreateReservationComponent;
