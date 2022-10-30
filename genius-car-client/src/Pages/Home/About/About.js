import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="rounded-lg shadow-2xl w-4/5"
            alt=""
          />
          <img
            src={parts}
            className="absolute right-5 rounded-lg top-1/2 border-4 shadow-2xl w-3/5"
            alt=""
          />
        </div>
        <div className="w-1/2">
            <p className="text-2xl font-bold text-[#FF3811]">About</p>
          <h1 className="text-5xl font-bold">
            {" "}
            We are qualified <br /> & of experience <br />
            in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="py-3 px-4 bg-[#FF3811] text-white rounded">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
