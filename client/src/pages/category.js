import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { API_URL } from '../config';
import Loading from '../components/Loading';
import PageHeader from '../components/PageHeader';

const CategoryPage = () => {
  const { slug } = useParams();

  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/categories/${slug}`);
      // console.log(res.data);
      setCategory(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <section>
      <PageHeader title={category.name} />
      <div className='container'>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className='content'>
              {category.questions?.map((question) => (
                <div key={question.id}>
                  <h3>{question?.text}</h3>
                  <ReactMarkdown>{question?.content}</ReactMarkdown>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
