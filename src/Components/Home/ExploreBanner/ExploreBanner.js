import React from "react";

const ExploreBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center w-full ">
      <div
        className="hero h-[400px] lg:w-1/2"
        style={{
          backgroundImage: "url(https://i.ibb.co/wNtLbD1C/explore.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-secondary text-black">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 space-y-4 ">
        <h2 className="text-3xl font-bold text-accent">
          Empowering Skilled Hands, Building a Better Tomorrow
        </h2>
        <p className="text-gray-200">
          At Labour Link, we connect you with trusted, hardworking professionals
          who bring dedication, skill, and reliability to every job. From
          construction to repairs, every service is delivered with honesty and
          commitment. Your work matters — and we are here to ensure every task
          gets the right hands. Whether you need skilled laborers for a big
          project or quick help for daily work, our platform makes finding the
          right expertise simple and hassle-free. We believe in uplifting
          workers, empowering communities, and creating opportunities that build
          a stronger tomorrow for everyone.
        </p>
      </div>
    </div>
  );
};

export default ExploreBanner;
