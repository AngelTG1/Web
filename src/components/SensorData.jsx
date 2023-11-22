// SensorData.js
import React, { useState } from "react";
import { useSensorContext } from "../context/SensorContext";
import SensorCard from "./SensorCard";
import temperatura from "../assets/temperatura.svg";
import humedad from "../assets/humedad.svg";
import gasMetano from "../assets/gasmetano.svg";
import luz from "../assets/luz.svg";
import TemperatureChart from "./TemperatureChart";
import Header from "./Header";
import Menu from "./Menu";

const SensorData = () => {
  const { data } = useSensorContext();
  const [active, setActive] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setActive(!active);
  }

  return (
    <div className="relative">
      <Header onClick={handleClick} />
      <div className={` z-50 lg:flex lg:fixed fixed left-28 ${active ?  "bottom-3" : "-bottom-[1000px]"}  `}>
        <Menu />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-1 pl-3 pe-3 lg:pl-[115px] lg:pe-10 py-8">
        <SensorCard
          title="Temperatura:"
          value={data.temperatura}
          img={temperatura}
          color="#f26c6d"
        />
        <SensorCard
          title="Humedad:"
          value={data.humedad}
          img={humedad}
          color="#3498db"
        />
        <SensorCard
          title="GasMetano:"
          value={data.gasMetano}
          img={gasMetano}
          color="#2ecc71"
        />
        <SensorCard title="Luz" value={data.luz} img={luz} color="#f39c12" />
      </div>

      <div className="bg-white pl-3 pe-3 lg:pl-[115px] lg:pe-10 py-5">
        <div className="  w-full h-[300px] p-5 px-8 rounded-xl shadow-lg ">
          <TemperatureChart />
        </div>
      </div>

      
    </div>
  );
};

export default SensorData;
