import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './monitor.css';

function Monitoring() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false); // State to track error status
  const [lastDataTimestamp, setLastDataTimestamp] = useState(Date.now()); // Track last data retrieval time

  const fetchData = () => {
    const apiUrl = 'https://api.thingspeak.com/channels/2240021/feeds.json?api_key=UXKPGC1N9NGOBCIE&results=2';

    axios.get(apiUrl)
      .then(response => {
        setError(false); // Reset error status
        setData(response.data.feeds);
        setLastDataTimestamp(Date.now()); // Update last data retrieval time
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchData();

    const pollInterval = setInterval(() => {
      fetchData();

      // Calculate time difference in seconds
      const timeDifference = (Date.now() - lastDataTimestamp) / 1000;

      if (timeDifference >= 60) {
        clearInterval(pollInterval); // Clear interval if no data for 60 seconds
        setError(true);
      }
    }, 1000); // Poll every 1 second

    return () => {
      clearInterval(pollInterval); // Clear interval on component unmount
    };
  }, [lastDataTimestamp]);

  return (
    <div className="App">
      <h1>LoRaEnviroLink</h1>
      <br></br>
      {error ? (
        <p>Error: No new data retrieved for 60 seconds.</p>
      ) : (
        <ul>
          {data.map(feed => (
            <li key={feed.entry_id}>
              Entry ID: {feed.entry_id}, 
              {feed.field1 !== undefined && ` Temp Node 1: ${feed.field1},`}
              {feed.field2 !== undefined && ` Humidity Node 1: ${feed.field2},`}
              {feed.field3 !== undefined && ` Temp Node 2: ${feed.field3},`}
              {feed.field4 !== undefined && ` Humidity Node 2: ${feed.field4}`}
              <br></br>
              <br></br>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Monitoring;


// import React from 'react'
// import './monitor.css'

// const Monitor = () => {
//   return (
//     <div className="App">
//     <div className='heads'>
//       <h1>LoRaEnviroLink</h1>
//       <br></br>
//       <br></br>
//       <p><b>Channel  ID:</b> 2240021</p>
//       <p><b>Author:</b> mwa0000030766394</p>
//       <p><b>Created:</b> 12th Aug 2023</p>
//       <p><b>Access:</b> Private</p>
//       <p><b>Entries:</b>122</p>
//       </div>
//       <br></br>
//       <div className='boxOut'>
//       <div className='boxHolder'>
//       <div className='box'>
      
//       <h2 className='heading'>Temperature of Node 1</h2>
//       <b>22 °C</b>
//       <div className='boxIn'>
//       <input type='number' className='limit' placeholder='Upper'></input>
//       <input type='number' className='limit' placeholder='Lower'></input>
//       </div>
//       </div>
//       <div className='box'>
//       <h2 className='heading'>Humidity of Node 1</h2>
//       <b>77 %</b>
//       <div className='boxIn'>
//       <input type='number' className='limit' placeholder='Upper'></input>
//       <input type='number' className='limit' placeholder='Lower'></input>
//       </div>
//       </div>
//       </div>
//       <div className='boxHolder'>
//       <div className='box'>
//       <h2 className='heading'>Temperature of Node 2</h2>
//       <b>22 °C</b>
//       <div className='boxIn'>
//       <input type='number' className='limit' placeholder='Upper'></input>
//       <input type='number' className='limit' placeholder='Lower'></input>
//       </div>
//       </div>
//       <div className='box'>
//       <h2 className='heading'>Humidity of Node 2</h2>
//       <b>77 %</b>
//       <div className='boxIn'>
//       <input type='number' className='limit' placeholder='Upper'></input>
//       <input type='number' className='limit' placeholder='Lower'></input>
//       </div>
//       </div>
//       </div>
//       </div>
      
//     </div>
//   )
// }
// export default Monitor;