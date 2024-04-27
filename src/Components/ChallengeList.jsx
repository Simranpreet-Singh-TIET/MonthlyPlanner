import React,{useState} from 'react'
import UpdateForm from './Update'
import axios from 'axios';

function ChallengeList({challenge,onfetch}) {
  const handledelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/challenges/${id}`)
      onfetch();
    }
    catch(error)
    {
      console.error("Error Deleting Challenges",error)
    }
  
  };
  
  const [showModal, setShowModal] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [count,setcount]=useState(0);
  const handleUpdateClick = (id) => {
      setItemId(id);
      if(count%2==0)
      setShowModal(true);
      else
      setShowModal(false);
      setcount(prev=>prev+1)
  };

  const handleUpdate = async(month, description,itemId) => {
    // Logic to handle update with new month, description, and item ID
    // console.log('Updated month:', month);
    // console.log('Updated description:', description);
    // console.log('Item ID:', itemId);
    await axios.put(`http://localhost:8080/challenges/${itemId}`,{month,description})
    onfetch();
    // Close the modal after submission
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    
      <div className='card my-5'>
        
    <div className="card-header text-bg-dark ">Challenges</div>
        {challenge.map(challenges =>(
            <div key={challenges.id}>
            
            <div className="list-group">
    <a className="list-group-item list-group-item-action text-bg-dark" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{challenges.month}</h5>
    </div>
    <p className="mb-1">{challenges.description}</p>
    <button onClick={()=>{handleUpdateClick(challenges.id)}} className='btn btn-dark btn-outline-light '>Update</button>
    <button onClick={()=>handledelete(challenges.id)} className='btn btn-dark btn-outline-light mx-2'>Delete</button>
   
    {
          showModal&&itemId===challenges.id?
          <UpdateForm
          onUpdate={handleUpdate}
          onClose={handleCloseModal}
          id={challenges.id}
          challenges={challenges}/>: null 
    }

    </a>
    </div>
    
    </div>
        ))}
    </div>

  )
}

export default ChallengeList