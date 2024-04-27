import { useEffect, useState } from 'react'
import './App.css'
import ChallengeList from './Components/ChallengeList'
import FormChallenge from './Components/FormChallenge'
import axios from 'axios'
function App() {

  const [challenges,setchallenges]=useState([]);

useEffect(()=>{
  fetchChallenges();
},[]);

const fetchChallenges=async()=>{
  try {
    const response=await axios.get('http://localhost:8080/challenges');
  setchallenges(response.data);
  } catch (error) {
    console.error("Error Fetching Challenges",error)
  }
  
  // console.log(response.data);
};

const handleChallengeAdded =()=>{
  fetchChallenges();
}

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4 text-white'>Monthly Task Planner</h1>
      <FormChallenge onChallengeAdded={handleChallengeAdded}/>
      <ChallengeList challenge={challenges} onfetch={handleChallengeAdded}/>
    </div>
  )
}

export default App
