import React, { useState } from 'react';
import axios from 'axios';
const UpdateForm = ({ onUpdate, onClose,id,challenges }) => {
  
  const [month, setMonth] = useState(challenges.month);
  const [description, setDescription] = useState(challenges.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(month, description,id);
    // Optionally, reset input fields after submission
    
    setMonth('');
    setDescription('');
    onClose();
  
  };

  return (
    
       
        <>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="month" className="form-label">Update Month</label>
        <input
            type="text"
            id="month"
            name="month"
            className='form-control text-bg-dark'
            placeholder='e.g. January'
            value={month}
            onChange={
                (e)=>setMonth(e.target.value)
            }
            
          />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
            id="description"
            name="description"
            className='form-control text-bg-dark '
            placeholder='Describe the Challenge'
            value={description}
            onChange={
                (e)=>setDescription(e.target.value)
            }
            
          />
      </div>
      <button type="submit" className="btn btn-dark btn-outline-light">Submit</button>
    </form>
     </>
  );
};

export default UpdateForm;
