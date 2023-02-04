import React from 'react';
import Datspk from './Datspk';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Sdx.css';
import { Autoplay } from 'swiper';
export const Sdxf = () => {
  const sxd = Datspk.map((res) =>{
    return(
      <div className="col-12" key={res.id}>
 <SwiperSlide  id='xc'>
  <img src={res.img} alt="" />
  <p className="p">{res.titel}</p>
  <p>{res.disc} </p>
 </SwiperSlide>
 </div>
    )
  })
  return (
    <div className="con mb-5">
        <div className="container">
            <div className="row  ro" >
              <h1 id="Review">Testimonials</h1>
            <Swiper
            autoplay={{
              delay: 2500,
              
            }}
         
            modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
    >
     {sxd}
    </Swiper>
            </div>
        </div>
    </div>
  )
}
