import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../components/CardItem';
import Loading from '../components/Loading';
import { API_URL } from '../config';
import HomeBanner from '../components/HomeBanner';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/categories?_sort=created_at:ASC`
        );
        setResult(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderCards = result?.map((item, i) => (
    <CardItem item={item} key={i} />
  ));

  return (
    <>
      <HomeBanner />
      <section className='content mt-5'>
        <div className='container'>
          <div className='text-center row justify-content-center'>
            <h2 className='text-capitalize mb-4'>
              A step by step guide on how to complete the FAFSA application
            </h2>

            <p className='text-center col-9'>
              Our goal is to break down the FAFSA application question by
              question. We want to clarify the importance of each question is
              asked, and how to answer each one. This guide will walk you
              through each question on the FAFSA application.
            </p>
          </div>

          <div className='row py-5 home'>
            {loading ? <Loading /> : renderCards}
          </div>
        </div>
      </section>
      <Testimonial />
    </>
  );
};

export default HomePage;
