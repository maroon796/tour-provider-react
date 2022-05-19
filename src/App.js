import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      console.log(data);
    };
    apiData();
  }, []);

  if (loading) {
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
  );
}

export default App;
