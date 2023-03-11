import { useState } from 'react';

export default function DVLAForm() {
  const [registration, setRegistration] = useState('');
  const [data, setData] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/dvla?registration=${registration}`);
    const jsonData = await response.json();
    setData(jsonData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="registration">Enter Vehicle Registration:</label>
        <input
          id="registration"
          type="text"
          value={registration}
          onChange={(event) => setRegistration(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {data && (
        <div>
          <h2>{data.registrationNumber}</h2>
          <p>{data.make}</p>
          <p>{data.colour}</p>
          {/* render additional properties from the response object as needed */}
        </div>
      )}
    </div>
  );
}
