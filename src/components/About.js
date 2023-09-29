import React from "react";
import bg2 from "../Images/story.jpg";
import b5 from "../Images/b5.jpg";
import b4 from "../Images/b4.jpg";
import "./About.css";
import "../App.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="fixed-image mt-24">
        <img src={bg2} alt="Our Story" />
      </div>
      <p className=" mx-6 mt-6 text-lg md:mx-24 md:mb-6 md:mt-24 col-p md:text-xl">
        Jewel teller manage to create the three in one we have, a design studio
        we have our own manufacturing and we have gallery where we show case our
        collection.
      </p>
      <p className=" mx-6 mt-9 text-lg md:mx-24 md:mb-6 col-p md:text-xl ">
        So we have casting we have gem cutting unit, we cut our own stones we
        have 3d printing laser cutting engraving, we have our setting is all
        done under a microscope to achieve better quality to achieve better
        shining we have the hand engraving that, is one of our favorites and we
        have the craving doesn’t have to be required to be our own way so in
        here it’s the customer way.
      </p>
      <p className=" mx-6 mb-6 text-lg mt-9 md:mx-24 col-p md:text-xl ">
        It’s not required that you are a professional because we are and do we
        have support the designers in that way.
      </p>
          <hr />
      <div className="container md:flex md:justify-around md:mt-36 ">
        <div className="left">
          <h1 className="col-p md:mt-40 text-lg m-6 font-bold mt-20 md:text-xl " >We Know Jewellery –& We Know Our Customers</h1>
          <p className="col-p text-lg m-6 md:w-96 md:text-xl " >
            We know that we are all part of something bigger and more important
            than ourselves or a brand. When we first started out, we never
            thought of identifying ourselves as a sustainable jewelry brand, and
            we cannot claim that we are one. However, we do believe
            environmental and social responsibility is the way forward.{" "}
          </p>
        </div>
        <div className="right m-6 ml-0  ">
          <img  className="m-3 md:w-72 md:relative left-40 " src={b5} alt="..." />
          <img className="m-3 md:w-72 " src={b4} alt="..." />
        </div>
      </div>
    </div>
  );
}
