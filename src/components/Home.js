import React from "react";
import cr1 from "../Images/crousel1.jpg";
import cr2 from "../Images/crousel2.jpg";
import bg1 from "../Images/bg1.jpeg";
import bg2 from "../Images/bg2.jpeg";
import cr3 from "../Images/b1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from './Card';
import '../App.css';
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div className="carousel-container mt-20">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        renderIndicator={(clickHandler, isSelected, index, label) => (
          <div
            onClick={clickHandler}
            className={`inline-block h-1 w-10 mx-2 rounded-full cursor-pointer ${
              isSelected ? 'bg-[#cb8161]' : 'bg-gray-300'
            }`}
            key={index}
            title={label}
          ></div>
        )}
      >
        <div>
          <img src={cr2} alt="Slide 1" />
        </div>
        <div>
          <img src={cr1} alt="Slide 2" />
        </div>
        <div>
          <img src={cr3} alt="Slide 3" />
        </div>
      </Carousel>
      <h2 className="text-[#cb8161] text-center col-p m-7 md:text-4xl text-3xl" >Shop By Collections</h2>
      {/* Container for the cards */}
      <div className="container mx-auto mt-8 ml-2 md:ml-0">
        {/* Flex row for the cards */}
        <div className="flex flex-wrap md:ml-9">
          {/* Set the width of each card for large screens */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="women jewellery 24 carat gold/silver" price='24,223' rate='4.5' src='https://source.unsplash.com/800x600/?jewelry' />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="Necklace for women gold and silver" price='15,223' rate='4.3' src='https://source.unsplash.com/800x600/?earrings'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="Earrings for women parties/dinner" price='71,223' rate='4.1' src='https://source.unsplash.com/800x600/?bracelet'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="rings for women gold/silver 24 carrat" price='34,223' rate='4.7' src='https://source.unsplash.com/800x600/?diamond'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="eligent Nose pirecing for women " price='45,223' rate='4.9' src='https://source.unsplash.com/800x600/?diamond-jewelry'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="Bracelets for women 'S' series silver" price='62,323' rate='5.0' src='https://source.unsplash.com/800x600/?gold-jewelry'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="stylish earrings for women at London Mall" price='22,423' rate='4.5' src='https://source.unsplash.com/800x600/?gemstones'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="women jewellery 24 carat gold/silver" price='90,623' rate='4.1 'src='https://source.unsplash.com/800x600/?luxury-jewelry'/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
            <Card desc="women jewellery 24 carat gold/silver" price='34,223' rate='4.5' src='https://source.unsplash.com/800x600/?jewelry' />
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap max-w-screen-lg justify-center md:ml-72 ">
            <div className="w-full md:w-5/12 p-5">
              <img className="m-5 w-52 " src={bg1} alt="..." />
              <h2 className="col-p text-[#cb8161] text-4xl" >FROM DRAWING TO REALITY </h2>
              <p className="col-p w-96" >we are a creative and specialized team. In our atelier and laboratory everything is followed with love, designed and created in an excellent way and with extreme attention to detail. </p>
            </div>
            <div className="w-full md:w-5/12 p-5  ">
              <img className="m-5 w-52 " src={bg2} alt="..." />
              <h2 className="col-p text-[#cb8161] text-4xl" >DIGITAL TRIDIMENSIONAL PROCESS </h2>
              <p className="col-p w-96" >From the final hand-drawn sketches of every piece, the digital design team generates a 3D model with the support of specialized software. Is at that stage where we set the final details of the jewel. </p>
            </div>
      </div>
    </div>
  );
}
