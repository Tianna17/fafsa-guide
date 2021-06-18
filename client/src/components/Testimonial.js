import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Testimonial = () => {
  const testimonials = [
    {
      text: 'Thanks to FAFSA Guide! I now have Financial Aide',
      image:
        'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640',
      name: 'Sarah',
      postion: 'A happy customer',
      company: '',
    },
    {
      text: 'FAFSA Guide was a big help.',
      image:
        'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640',
      name: 'Jane',
      postion: 'A happy customer',
      company: '',
    },
    {
      text: 'FAFSA Guide was a big help.',
      image:
        'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=640',
      name: 'Kim',
      postion: 'A happy customer',
      company: '',
    },
  ];

  return (
    <section className='py-5' style={{ background: '#E5E7EB' }}>
      <div className='section-header mt-3 mb-5 text-center'>
        <h2 className='fw-bold fs-1'>Our Success Stories</h2>
        <h4>See what students are saying about FAFSA Guide</h4>
      </div>
      <div className='testimonial-slider'>
        <Swiper
          effect='fade'
          slidesPerView={1}
          spaceBetween={50}
          // navigation
          autoplay
          width={1000}
          pagination={{ clickable: true }}
        >
          {testimonials?.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div style={{ margin: 'auto', width: '80%' }}>
                <div className='row justify-content-center'>
                  <div className='col-md-4 m-0 p-0'>
                    <img src={testimonial.image} alt='' className='img-fluid' />
                  </div>
                  <div className='col-md-8 p-5 bg-white'>
                    <p>{testimonial.text}</p>
                    <p>
                      <span className='fw-bold'>{testimonial.name}</span>
                      <br />
                      <span className='small '>{testimonial.postion}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
