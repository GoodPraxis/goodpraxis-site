/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PolicyPage = () => (
  <Layout activeItem="Home">
    <SEO title="Anti-Slavery Policy" />
    <div>
      <h1 className="heading policy-title">
        Anti-Slavery and Human Trafficking Policy and Procedure Policy
        Statement
        <a href="#footnote-1" className="plain-link">*</a>
      </h1>
    </div>
    <div className="policy">
      <p>
        Modern slavery is a term used to encompass slavery, servitude, forced
        and compulsory labour, bonded and child labour and human trafficking.
        Human trafficking is where a person arranges or facilitates the travel
        of another person with a view to that person being exploited. Modern
        slavery is a crime and a violation of fundamental human rights.
      </p>

      <p>
        The Co-operative strictly prohibits the use of modern slavery and human
        trafficking in our operations and supply chain. We have and will
        continue to be committed to ensuring that modern slavery is not taking
        place anywhere within our organisation or in any of our supply chains.
        We expect that our suppliers will hold their own suppliers to the same
        high standards.
      </p>

      <h2 className="heading">Commitments</h2>

      <ul className="policy-list">
        <li>
          We shall be a company that expects everyone working with us or on our
          behalf to support and uphold the following measures to safeguard
          against modern slavery;

        </li>

        <li>
          We have a zero-tolerance approach to modern slavery in our
          co-operative and our supply chains;

        </li>

        <li>
          The prevention, detection and reporting of modern slavery in any part
          of our organisation or supply chain is the responsibility of all those
          working for us or on our behalf. Workers must not engage in,
          facilitate or fail to report any activity that might lead to, or
          suggest, a breach of this policy;

        </li>

        <li>
          We are committed to engaging with our clients and suppliers to address
          the risk of modern slavery in our operations and supply chain;

        </li>

        <li>
          We take a risk-based approach to our contracting processes and keep
          them under review. We assess whether the circumstances warrant the
          inclusion of specific prohibitions against the use of modern slavery
          and trafficked labour in our contracts with third parties. Using our
          risked based approach, we will also assess the merits of writing to
          suppliers requiring them to comply with our Code of Conduct, which
          sets out the minimum standards required to combat modern slavery and
          trafficking;

        </li>

        <li>
          Consistent with our risk-based approach we may require:
          <ul>
            <li>
              Employment and recruitment agencies and other third parties
              supplying workers to our organisation to confirm their compliance
              with our Code of Conduct;
            </li>
            <li>
              Suppliers engaging workers through a third party to obtain that
              third parties&apos; agreement to adhere to the Code;
            </li>
          </ul>
        </li>

        <li>
          As part of our ongoing risk assessment and due diligence processes we
          will consider whether circumstances warrant us carrying out audits of
          suppliers for their compliance with our Code of Conduct;

        </li>

        <li>
          If we find that other individuals or organisations working on our
          behalf have breached this policy, we will ensure that we take
          appropriate action. This may range from considering the possibility of
          breaches being remediated and whether that might represent the best
          outcome for those individuals impacted by the breach to terminating
          such relationships.

        </li>
      </ul>

      <h2 className="heading">Policy Compliance</h2>

      <p>
        If you fail to comply with the above rules this will be viewed seriously
        and will be dealt with in accordance with the Co-operative&apos;s
        disciplinary procedure.

      </p>

      <h2 className="heading">Equality</h2>

      <p>
        It is considered that the Co-operative&apos;s recruitment processes meet
        the requirements under Equality legislation and are delivered in a fair
        and equal approach.

      </p>

      <h2 className="heading">Review</h2>

      <p>
        The Co-operative&apos;s policies and procedures aim to ensure that
        employees are aware of, and confident that, the Co-operative is
        complying with current legislation and is protecting the interests of
        both the needs of the business and its employees. In this respect, it
        may be appropriate to modify existing policies and/or procedures from
        time to time to reflect changes as appropriate, and this policy will be
        reviewed as necessary by the Co-operative.

      </p>
    </div>
    <p className="policy-footnote" id="footnote-1">
      * This policy applies to all persons working for workers&apos;
      co-operative GOOD PRAXIS or on our behalf in any capacity, including
      members and employees at all levels, freelance collaborators,
      contractors and suppliers.
    </p>

  </Layout>
);

export default PolicyPage;
