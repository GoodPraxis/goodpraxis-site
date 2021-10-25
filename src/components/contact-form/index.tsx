import React, { useState } from 'react';
import fetch from 'cross-fetch';

import {
  TextArea, Input, Checkbox,
} from '@goodpraxis/components';
import './contact-form.scss';

const URL = '/contact/';

const ContactForm = () => {
  // Abstract fields to remove code smell
  const [digitalProblem, setDigitalProblem] = useState(false);
  const [requestProposal, setRequestProposal] = useState(false);
  const [doNotKnow, setDoNotKnow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [validField, setValidField] = useState({
    name: true,
    email: true,
    details: true,
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = /\S+@\S+\.\S+/.test(email);
    setValidField({ name: !!name, email: validEmail, details: !!details });
    if (name && validEmail && details) {
      setSubmitting(true);

      const body = new FormData();
      body.append('name', name);
      body.append('email', email);
      body.append('digitalProblem', digitalProblem ? 'true' : '');
      body.append('requestProposal', requestProposal ? 'true' : '');
      body.append('doNotKnow', doNotKnow ? 'true' : '');
      body.append('details', details);
      await fetch(URL, { method: 'POST', body }).catch(() => console.error('ISSUE!'));
      setMessage('Thank you! We will reply to you shortly.');
    }
  };

  return (
    <form className="contact-form grid grid-lines" onSubmit={onSubmit} id="contact-us">
      <h2 className="heading">How can we help?</h2>
      <div className="contact-form-field">
        { /* eslint-disable-next-line */}
        <label>
          <Checkbox
            name="digitalProblem"
            id="digitalProblem"
            checked={digitalProblem}
            onChange={(event) => setDigitalProblem(event.target.checked)}
          />
          {' '}
          I have a digital product / service problem
        </label>
      </div>
      <div className="contact-form-field">
        { /* eslint-disable-next-line */}
        <label>
          <Checkbox
            name="requestProposal"
            id="requestProposal"
            checked={requestProposal}
            onChange={(event) => setRequestProposal(event.target.checked)}
          />
          {' '}
          I have a request for proposal
        </label>
      </div>
      <div className="contact-form-field">
        { /* eslint-disable-next-line */}
        <label>
          <Checkbox
            name="doNotKnow"
            id="doNotKnow"
            checked={doNotKnow}
            onChange={(event) => setDoNotKnow(event.target.checked)}
          />
          {' '}
          I&apos;m not sure what I need yet
        </label>
      </div>
      <div className="contact-form-details">
        This can be anything you need to tell us initally about the project.
        If we think this is something we can help with, you’ll get a chance to
        tell us everything during the discovery session.
      </div>
      <div className="contact-form-field">
        { /* eslint-disable-next-line */}
        <label>
          Details about your project
          <TextArea
            name="details"
            id="details"
            value={details}
            invalid={!validField.details}
            onChange={(event) => {
              setValidField({ ...validField, details: true });
              setDetails(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="contact-form-field">
        { /* eslint-disable-next-line */}
        <label>
          Your name
          <Input
            name="name"
            id="name"
            value={name}
            invalid={!validField.name}
            onChange={(event) => {
              setValidField({ ...validField, name: true });
              setName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="contact-form-field">
        { /* eslint-disable-next-line */}
        <label>
          Your email
          <Input
            name="email"
            id="email"
            value={email}
            invalid={!validField.email}
            onChange={(event) => {
              setValidField({ ...validField, email: true });
              setEmail(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="contact-form-field">
        <input
          type="submit"
          className="gp-button"
          value="Enquire"
          disabled={submitting}
        />
      </div>
      { message
        ? (<div className="contact-form-message">{message}</div>) : '' }
    </form>
  );
};

export default ContactForm;
