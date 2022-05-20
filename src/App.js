import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTours(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => id !== tour.id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={apiData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
