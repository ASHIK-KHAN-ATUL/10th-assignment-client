
import banner5 from "../assets/banner5 (1).png"
import banner6 from "../assets/banner6.png"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {



  return (
        <div className="">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={true}
                showStatus={false}
                interval={4000}
            >
                <div>
                    <img src={banner6} className="max-h-[600px] object-cover"  alt="Banner 2" />
                </div>
                <div>
                    <img src={banner5} className="max-h-[600px] object-cover"  alt="Banner 3" />
                </div>
            </Carousel>
        </div>
  );
};

export default Banner;
