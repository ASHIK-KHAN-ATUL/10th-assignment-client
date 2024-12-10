import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { useEffect, useState } from "react";

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
          .then(res => res.json())
          .then(data => {
            console.log('Fetched reviews:', data); 
            setReviews(data);
          });
      }, []);

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,   
        autoplaySpeed: 3000,  
        pauseOnHover: true,    
      };

      console.log(reviews)

    return (
        <div className="review-slider-container py-10 w-[70%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card bg-[#b7e4c7] shadow-md p-6 rounded-lg text-center  ">
              <img
                src={review.photo || 'default-avatar.png'}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{review.name}</h3>
              <p className="text-yellow-500 mt-2">{review.ratingNumber} / 10</p>
              <p className="text-sm text-gray-600 font-semibold mt-2">"{review.comment}"</p>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default ShowReview;