import React from "react";

const ResturantInfo = () => {
  return (
    <div className="rounded-md mx-8 bg-white mt-4 p-4 md:p-8">
      <h2 className="mb-4 text-xl text-center text-primary md:text-2xl">
        Please Enter Your Info
      </h2>
      <div className="   grid md:grid-cols-12 gap-4 rounded-md">
        <div className=" md:col-span-6 ">
          <label htmlFor="input-wizard-1" className="form-label">
            Restaurant name
          </label>
          <input type="text" className="form-control"></input>
        </div>
        <div className=" md:col-span-6 ">
          <label htmlFor="input-wizard-1" className="form-label">
            Business name
          </label>
          <input type="text" className="form-control"></input>
        </div>
        <div className=" md:col-span-6 ">
          <label htmlFor="input-wizard-1" className="form-label">
            Legal name
          </label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="md:col-span-6 md:mt-7 md:ml-auto">
          <button className="btn btn-primary w-full md:w-24 ">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ResturantInfo;
