import React, { useState } from 'react'; // Import CSS file for styling
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form({onChallengeAdded}) {
  
  const [month,setmonth]=useState('')
  const [description,setdescription]=useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8080/challenges',{month,description})
        setdescription('')
        setmonth('')
        onChallengeAdded();
    } catch (error) {
        console.error("Error adding Challenges",error)
        
    }
    // console.log('Form submitted:', formData);
    // Add logic for form submission here
  };

  return (
    <div className="card my-5">
        <div className="card-header text-bg-dark border border-white">Add New Challenge</div>
        <div className="card-body text-bg-dark">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="month" className='form-label'>Month:</label>
          <input
            type="text"
            id="month"
            name="month"
            className='form-control text-bg-dark'
            placeholder='e.g. January'
            value={month}
            onChange={
                (e)=>setmonth(e.target.value)
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className='form-label '>Description:</label>
          <textarea
            id="description"
            name="description"
            className='form-control text-bg-dark '
            placeholder='Describe the Challenge'
            value={description}
            onChange={
                (e)=>setdescription(e.target.value)
            }
            required
          />
        </div>
        <button type="submit" className='btn btn-dark btn-outline-light'>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Form;
