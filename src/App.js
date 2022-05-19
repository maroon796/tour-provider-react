import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const apiData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        setTours(data);
        console.log(data);
      };
      apiData();
    } catch (error) {
      console.log(error);
    }
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
      <Tours tours={tours} />
    </main>
  );
}

export default App;
