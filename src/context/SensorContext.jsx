import React, { createContext, useContext, useState, useEffect } from 'react';

const SensorContext = createContext();

export const useSensorContext = () => {
  return useContext(SensorContext);
};

export const SensorProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://3.208.164.59:8080/sensores/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const sensorData = await response.json();
      setData(sensorData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataPeriodically = async () => {
    await fetchData();
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    fetchDataPeriodically();

    const intervalId = setInterval(() => {
      if (!isPaused) {
        fetchDataPeriodically();
      }
    }, 1000);

    const socket = new WebSocket('ws://3.208.164.59:8080/sensores/socket');

    socket.addEventListener('open', (event) => {
      console.log('WebSocket abierto:', event);
    });

    socket.addEventListener('message', (event) => {
      try {
        const newSensorData = JSON.parse(event.data);
        setData(newSensorData.data);
      } catch (error) {
        console.error('Error al analizar el mensaje del WebSocket:', error);
      }
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket cerrado:', event);
    });

    return () => {
      clearInterval(intervalId);
      socket.close();
    };
  }, [isPaused]);

  const contextValue = {
    data,
    togglePause: () => setIsPaused(!isPaused),
  };

  return (
    <SensorContext.Provider value={contextValue}>
      {children}
    </SensorContext.Provider>
  );
};
