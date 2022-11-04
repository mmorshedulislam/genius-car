import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-five.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center my-14  w-1/2 mx-auto">
        <h2 className="text-xl text-orange-600">Services</h2>
        <h2 className="text-5xl font-bold my-3">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="w-48 mx-auto my-10">
        <button className="py-3 px-4 font-bold bg-orange-500 text-white rounded">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
