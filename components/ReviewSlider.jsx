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
        <div key={index} className="review text-white p-4">
          <p className="review-text">{review.text}</p>
          <p className="review-author">- {review.author}</p>
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
