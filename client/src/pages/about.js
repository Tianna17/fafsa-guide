import React from 'react';
import PageHeader from '../components/PageHeader';
import Tasks from '../images/tasks.svg';
import Agreement from '../images/agreement.svg';

const AboutPage = () => {
  return (
    <>
      <PageHeader title='About' />
      <section>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-6'>
              <div className='mission mb-5 '>
                <h2 className='fs-2 fw-bold mb-2 '>Meet FAFSA Guide</h2>
                <p>
                  FAFSA Guide's mission is to make the FAFSA application easy to
                  complete. We want Americans to be able to afford college.
                  Having a better understanding of the FAFSA will make paying
                  for college easier. You will have less or no student loan
                  payment.
                </p>
              </div>
            </div>
            <div className='col-md-4 '>
              <img src={Tasks} alt='mission' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <section className='our-story my-5 '>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-4 '>
              <img src={Agreement} alt='Our story' className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <h4 className='fs-2 fw-bold mb-2'> Our Story </h4>
              <p>
                When it comes to filling out the FAFSA, thousands of students
                fail to complete it each year. Failing to complete the FAFSA is
                mainly due to misunderstanding the instructions, which causes
                students to make mistakes. When the instructions are unclear,
                students do not have anyone to explain it to them.FAFSA Guide
                was designed to help thousands of students understand the
                instructions for the FAFSA Application. Our goal was to have
                millions of students should pay less for college.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
