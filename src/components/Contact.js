import React, { useState } from "react";
import "../App.css";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server with the form data
      const response = await axios.post("YOUR_SERVER_API_ENDPOINT", formData);

      // Handle the response, e.g., show a success message or redirect the user
      console.log("Server response:", response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h2 className="text-2xl mt-36 font-bold mb-2 col-p text-center md:text-4xl">
        Send Us Your Questions!
      </h2>
      <p className="text-sm font-thin mb-16 col-p text-center md:text-lg">
        We’ll get back to you within two days.
      </p>
      <div className="main md:mx-80">
        <form onSubmit={handleSubmit} className="flex-col">
          <div className="m-4 md:inline-block">
            <label htmlFor="name" className="inline-block col-p text-black">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:mr-32 px-3 py-2 border border-black focus:outline-none"
              required
            />
          </div>
          <div className="m-4 md:inline-block">
            <label htmlFor="email" className="inline-block col-p text-black">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 md:mr-32 py-2 border border-black focus:outline-none"
              required
            />
          </div>
          <div className="m-4">
            <label htmlFor="message" className="block col-p text-black">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="10"
              className="w-full px-3 py-2 border border-black focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#cb8161] app-btn col-p text-white px-7 py-2 hover:bg-[#a7684d] transition-colors 300ms ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Need Help? Footer */}
      <div className="bg-white text-black p-4 mt-20 text-center md:mb-36 ">
        <h3 className="text-xl font-semibold col-p md:text-4xl mb-7">Need Help?</h3>
        <div className="flex justify-around">
          <ul className="text-left font-thin col-p">
            <h4 className="m-0 text-lg md:text-2xl " >Contact Info</h4>
            <li className="text-sm md:text-lg" >+91-1234567890</li>
            <li className="text-sm md:text-lg " >+91-0987765431</li>
          </ul>
          <ul className="text-left font-thin col-p">
            <h4 className="m-0 text-lg md:text-2xl" >Customer Service</h4>
            <li className="text-sm md:text-lg " >Monday-Saturday</li>
            <li className="text-sm md:text-lg " >9AM to 6PM</li>
          </ul>
          <ul className="text-left font-thin col-p">
            <h4 className="m-0 text-lg md:text-2xl " >Returns</h4>
            <li className="text-sm md:text-lg " >On site returns</li>
            <li className="text-sm md:text-lg " >Online returns</li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
