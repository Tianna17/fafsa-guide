import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ContactPic from '../images/contact_us.svg';

const ContactPage = () => {
  const [field, setField] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const { name, email, subject, message } = field;
  const handleChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    setSuccessMessage(null);
    setError({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !message) {
      setError({ ...error, msg: 'All fields are required' });
      return;
    }
    if (!name) return setError({ ...error, name: 'Please enter your name' });
    if (!email) return setError({ ...error, email: 'Please enter your email' });
    if (!message)
      return setError({ ...error, message: 'Please write something' });
    setSuccessMessage(
      'Thank you for contacting us, Someone will contact you soon'
    );
    setField({ name: '', email: '', subject: '', message: '' });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label>
          Name <span className='required'>*</span>
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          className='form-control'
          placeholder='Your Full Name'
        />
        {error.name && <span className='text-danger'>{error.name}</span>}
      </div>
      <div className='mb-3'>
        <label>
          Email <span className='required'>*</span>
        </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          className='form-control'
          placeholder='Your Email'
        />
        {error.email && <span className='text-danger'>{error.email}</span>}
      </div>
      <div className='mb-3'>
        <label>Subject</label>
        <input
          type='text'
          name='subject'
          value={subject}
          onChange={handleChange}
          className='form-control'
          placeholder='The Reason'
        />
      </div>
      <div className='mb-3'>
        <label>
          Message <span className='required'>*</span>
        </label>
        <textarea
          name='message'
          value={message}
          onChange={handleChange}
          className='form-control'
          rows={6}
        />
        {error.message && <span className='text-danger'>{error.message}</span>}
      </div>

      <button type='submit' className='btn btn-primary text-uppercase btn-home'>
        Submit
      </button>
    </form>
  );

  return (
    <section className='content'>
      <PageHeader title='Contact Us' />
      <div className='container'>
        <h4 className='text-capitalize mb-5 fs-5 text-center'>
          Have more question about FAFSA?{' '}
          <span className='fs-4 d-block mt-1'>
            Get in touch with expert from FAFSA Guide
          </span>
        </h4>

        <div className='row justify-content-between'>
          <div className='col-md-6'>
            {error.msg && <div className='alert alert-danger'>{error.msg}</div>}
            {successMessage && (
              <div className='alert alert-success'>{successMessage}</div>
            )}
            {form}
          </div>
          <div className='col-md-5 px-5'>
            <img src={ContactPic} alt='contact us' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
