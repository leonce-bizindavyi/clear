import React from 'react';

function StatsCard({ count, title }) {
  return (
    <div className=" shadow-none w-max    ">
      <h1 className="font-bold text-white text-5xl lg:text-5xl">{count}</h1>
      <h3 className="mt-1 font-medium text-gray-50 text-md lg:text-lg">{title}</h3>
    </div>
  );
}

export default StatsCard;