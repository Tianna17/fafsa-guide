import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../components/CardItem';
import Loading from '../components/Loading';
import { API_URL } from '../config';

const StepsPage = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/steps`);
      setResult(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCards = result?.map((item) => (
    <CardItem item={item} key={item.title} />
  ));

  return (
    <section className='content mt-5'>
      <div className='container'>
        <div className='d-flex-column justify-content-center'>
          <div className='page-banner text-center'>
            <h2 className='text-capitalize'>
              A step by step guide on how to complete the FAFSA application
            </h2>
          </div>

          <div className='page-info'>
            <h5 className='mb-7'>
              Our goal is to break down the FAFSA application question by
              question. We want to clarify the importance of each question is
              asked, and how to answer each one. This guide will walk you
              through each question on the FAFSA application.
            </h5>
            <div className='row py-5'>
              {loading ? <Loading /> : renderCards}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsPage;
