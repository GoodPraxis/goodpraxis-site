import React, { useState, useEffect } from 'react';

const EMAIL = 'hello@goodpraxis.coop';

const emailLink = () => {
  const [emailAddress, setEmailAddress] = useState('');
  useEffect(() => setEmailAddress(EMAIL), []);

  return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};

export default emailLink;
