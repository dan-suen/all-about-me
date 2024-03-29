import React, { useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const serviceId = 'service_3iozduh';
  const templateId = 'template_tamc4qh';
  const userId = 'VVPJxWc4NaNP5MZQH';
  const onSubmit = function () {
    setName('');
    setEmail('');
    setMessage('');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.init(userId);
    emailjs
      .sendForm(serviceId, templateId, e.currentTarget)
      .then(response => {
        console.log('Email sent successfully!', response.text);
        onSubmit();
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div id='contact' className='contact'>
      <h1>Feel Free to Reach Out!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:&nbsp;
            <br />
            <input
              type='text'
              value={name}
              name='from_name'
              id='from_name'
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email: &nbsp;
            <br />
            <input
              type='email'
              value={email}
              name='reply_to'
              id='reply_to'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Message:&nbsp;
            <br />
            <textarea
              value={message}
              name='message'
              id='message'
              onChange={e => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
