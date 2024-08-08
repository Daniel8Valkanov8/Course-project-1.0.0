const HolidayForm = ({ holiday }) => {
  return (
    <div className="card mt-4" style={{ borderRadius: '15px' }}>
      <div className="card-body">
        <h3>Holiday Created:</h3>
        <p><strong>ID:</strong> {holiday.id}</p>
        <p><strong>Title:</strong> {holiday.title}</p>
        <p><strong>Location:</strong> {holiday.location.name}</p>
        <p><strong>Start Date:</strong> {new Date(holiday.startDate).toLocaleDateString()}</p>
        <p><strong>Duration:</strong> {holiday.duration} days</p>
        <p><strong>Price:</strong> {holiday.price}</p>
        <p><strong>Free Slots:</strong> {holiday.freeSlots}</p>
      </div>
    </div>
  );
};

export default HolidayForm;
