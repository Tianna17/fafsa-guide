import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config';
import Loading from '../components/Loading';
import SideMenu from '../components/SideMenu';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';

const StepPage = () => {
  const [category, setCategory] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage] = useState(6);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //get all categories
        const categoryResponse = await axios.get(
          `${API_URL}/categories/${slug}`
        );

        setCategory(categoryResponse.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      const start = (parseInt(page) - 1) * perPage;

      try {
        //get all questions by category with a limit for pagination
        const questionRes = await axios.get(
          `${API_URL}/questions?_where[category.slug]=${slug}&_limit=${perPage}&_start=${start}`
        );

        //get total questions by category
        const questionTotal = await axios.get(
          `${API_URL}/questions?_where[category.slug]=${slug}`
        );
        setQuestions(questionRes.data);
        setTotal(questionTotal.data.length * 1);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [slug, perPage, page]);

  return (
    <>
      <section>
        <PageHeader title='Instructions' />
        <div className='main-content'>
          <div className='container'>
            <div className='content'>
              <div className='row'>
                <div className='col-8'>
                  <div className='section-header mb-5'>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                  </div>

                  {loading ? (
                    <Loading />
                  ) : (
                    questions?.map((question, i) => (
                      <div key={question.id} className='question mb-3'>
                        <h2 className='fs-5'>{question.text}</h2>
                        <ReactMarkdown>{question.content}</ReactMarkdown>
                      </div>
                    ))
                  )}
                </div>

                <div className='col-md-4'>
                  <SideMenu />
                </div>
              </div>
            </div>
            {perPage < total && (
              <Pagination
                page={page}
                perPage={perPage}
                setPage={setPage}
                total={total}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default StepPage;
