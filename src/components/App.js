import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Card from './card';
import NavBar from './navbar';

function App () {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://my-json-server.typicode.com/codificar/oficina/proposals');
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
    <NavBar/>
    <div className="container-fluid">
      {[].concat(data).map(item => (
        <Card
          key={item.id}
          customer={item.customer}
          description={item.description}
          id={item.id}
          seller={item.seller}
          value={item.value} 
        /> 
      ))}
    </div>
    </>
    
  );
}

export default App;