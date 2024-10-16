import React from "react";
import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 1000, // Increase speed for smoother transition
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out", // Smoother transition
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle click event on each testimonial card
  const handleClick = (testimonial) => {
    alert(`You clicked on ${testimonial.name}`);
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-4xl font-bold">
            What Are The Customers Saying About Us
          </h1>
        </div>

        {/* Testimonials Cards */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick(data)}
                >
                  {/* Upper Section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-16 h-16"
                    />
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {data.name}
                      </p>
                      <p>{data.position}</p>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="py-6 space-y-4">
                    <p className="text-sm text-gray-500">{data.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
