import React from 'react';
import StatsCard from './stats-card';

const STATS = [
  {
    count: "1,500+",
    title: "Cars",
  },
  {
    count: "100+",
    title: "Guest house",
  },
  {
    count: "200+",
    title: "Conference room",
  },
  {
    count: "17",
    title: "Provinces",
  },
];

export function OurStats() {
  return (
    <section className="container bg-yellow-600 rounded w-screen mx-auto grid gap-10 px-7 lg:px-8 my-12 py-4 lg:grid-cols-1  lg:gap-20 xl:grid-cols-2 xl:place-items-center text-gray-700">
      <div className='w-full'>
        <h2 className="mb-6  text-yellow-400 font-bold">Our Stats</h2>
        <h1 className="text-5xl font-bold leading-tight text-white h-max lg:w-3/4">
          Conference Highlights
        </h1>
        <p className="mt-3 w-full text-gray-200 ">
          This three-day extravaganza brings together the brightest minds,
          leading innovators, and top companies in the field of Artificial
          Intelligence.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-10 md:gap-x-28 w-max overflow-hidden">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;