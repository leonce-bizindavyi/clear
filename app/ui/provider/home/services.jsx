import React from "react";
import Service from "../services/one-service";
import { getMyServices } from "@/app/_libs/datas";

async function Services() {
  const services = await getMyServices(0, 5)
  return (
    <>
      <h3 className="mb-6 mt-12 text-xl font-semibold text-gray-600">
        Recent Services
      </h3>
      {services.length > 0 && (
        <div className="grid grid-cols-1 gap-5  mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {
            services.map((service, index) => {
              return <Service key={index} service={service} />
            })
          }
        </div>
      )}
    </>
  );
}

export default Services;
