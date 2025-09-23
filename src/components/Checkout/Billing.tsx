import React from "react";

const Billing = () => {
  return (
    <div className="mt-9">
      <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
        Billing details
      </h2>

      <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          {/* Full Name */}
          <div className="w-full lg:w-1/2">
            <label htmlFor="fullname" className="block mb-2.5 font-medium">
              Full Name  <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Sadman Sakib"
              className="rounded-md border border-gray-300 bg-gray-50 placeholder:text-gray-500 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-400/40"
            />
          </div>

          {/* Email */}
          <div className="w-full lg:w-1/2">
            <label htmlFor="email" className="block mb-2.5 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="support@gmail.com"
              className="rounded-md border border-gray-300 bg-gray-50 placeholder:text-gray-500 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-400/40"
            />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2.5">
            Phone (Whatsapp) <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="phone"
            placeholder="01568109275"
            id="phone"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
