import React from 'react';

const BasicInfo = () => {
    return (
       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Basic Information
      </h1>

      <p className="text-gray-500 mb-8">
        Complete your profile to apply for jobs.
      </p>

      <form className="space-y-6">

        {/* Personal Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <input
              type="date"
              className="input input-bordered w-full"
            />

            <select className="select select-bordered w-full">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              placeholder="Current Address"
              className="input input-bordered w-full"
            />

          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Professional Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Job Title"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Years of Experience"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Current Company"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Expected Salary"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Preferred Job Location"
              className="input input-bordered w-full"
            />

            <select className="select select-bordered w-full">
              <option>Employment Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Internship</option>
            </select>

          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Degree"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="University / College"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Passing Year"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="CGPA / GPA"
              className="input input-bordered w-full"
            />

          </div>
        </div>

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            About Me
          </h2>

          <textarea
            rows="5"
            placeholder="Write a short professional summary..."
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

      
      

        <button className="btn btn-primary w-full md:w-52">
          Save Information
        </button>

      </form>
    </div>
    );
};

export default BasicInfo;