import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewsSlider = ({ reviews }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1600, // Breakpoint for larger screens
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <div key={index} className="review text-white py-4 px-4 border-t border-b border-gray-600">
          <p className="review-text text-white mb-4 text-sm lg:text-base text-center">&quot;{review.text}&quot;</p>
          <p className="review-author text-gray-300 text-center text-sm lg:text-base">- {review.author} (<span className='text-yellow-500 italic text-xs lg:text-sm'>{review.role}</span>)</p>
        </div>
      ))}
    </Slider>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      Next
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      Prev
    </div>
  );
};

export default ReviewsSlider;
