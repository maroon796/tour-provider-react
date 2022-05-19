import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    };
    apiData();
  });

  return <h2>Tours Project Setup</h2>;
}

export default App;
