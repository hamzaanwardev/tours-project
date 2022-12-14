import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';


function App() {
  const [loading, setLoadinng] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoadinng(true);
    const response = await fetch(url);
    const tours = await fetch.json();
    console.log(tours);
  }
  if(loading) {
    return (
    <main>
      <Loading />
    </main>
    );
  } 
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
