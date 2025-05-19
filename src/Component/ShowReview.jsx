import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay  } from 'swiper/modules';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://10th-assignment-server-ruddy.vercel.app/review')
          .then(res => res.json())
          .then(data => {
            console.log('Fetched reviews:', data); 
            setReviews(data);
          });
      }, []);


    return (
        <div className=" pb-20  ">
            <h2 className='font-bold text-3xl py-10 text-center'>What Say Our User</h2>

             <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{ clickable: true }}
                autoplay={{
                delay: 2500,

                }}
                breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
                        >
                    {
                        reviews.map((review, index) => 
                        <SwiperSlide key={index}>
                            <div className='bg-purple-500/10 border border-purple-500 p-10 flex flex-col justify-center items-center mx-10 gap-4'>
                                <div>
                                  <img src={review.photo} className='h-16 rounded-full border border-purple-500' alt={review.name} />
                                </div>
                                <p className='text-orange-400'>{review.ratingNumber} / 10</p>
                                <p>{review.comment}</p>
                            </div>
                        </SwiperSlide>)
                    }
            </Swiper>

        </div>
    );
};

export default ShowReview;