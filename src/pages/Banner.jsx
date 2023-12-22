import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[calc(100vh-65px)]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/L6xtd3B/designer-work-office.jpg)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              className="mb-5 text-4xl font-bold"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              Optimize Your Workflow with Streamline, Sync, Succeed!
            </h1>
            <p className="mb-5 w-full">
              SCC Technovision Inc revolutionizes productivity by seamlessly
              integrating task management across all devices and platforms. Say
              goodbye to scattered to-do lists and welcome a unified, efficient
              workflow.
            </p>
            <Link
              to="/login"
              className="btn bg-green-500 border-none  hover:bg-green-600 text-white "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Let’s Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
