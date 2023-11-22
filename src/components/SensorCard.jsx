// SensorCard.jsx
import React from "react";

const SensorCard = ({ title, value, img, color }) => {
  return (
    <article className="bg-white p-5 px-8 rounded-xl shadow-lg">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-medium">{title}</h4>
        <img className="w-8" src={img} alt="img" />
      </div>
      <h1 className="text-3xl font-bold">{value}</h1>
      <hr />

      <div className="py-3">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span
                style={{ background: `${color}` }}
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#fff]`}
              >
                {`${value}%`}
              </span>
            </div>
          </div>
          <div className="flex mb-2 items-center justify-between">
            <div className="flex flex-col w-full items-center">
              <div className={`relative w-full bg-gray-200 rounded`}>
                <div>
                  <div
                    className={`absolute top-0 left-0 h-3 rounded`}
                    style={{ width: `${value}%`, background: `${color}` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SensorCard;
