import { useEffect, useState } from 'react';
import Head from 'next/head';
import Input from '../../components/Form/Input';
// import styles from '../styles/Home.module.css';

export default function Doc_Form() {
  return (
    <div>
      <Head>
        <title>Documentation - Form Elements</title>
      </Head>

      <main>
        <div>
          <h2>Input Fields</h2>
          {/* TODO: Add a description of the input fields */}
          <p>Input fields ...</p>
          <h3>Variants</h3>

          <Input
            label="Solid"
            value=""
            hasError={false}
            onChange={(val) => setIssueName(val)}
            hintText="Help Text"
            variants="Solid"
            errorMessage={false}
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
              placeholder: 'Placeholder Text: Enter Issue Name',
            }}
          />

          <Input
            label="Outline"
            value=""
            hasError={false}
            onChange={(val) => setIssueName(val)}
            hintText="Help Text"
            variants="Outline"
            errorMessage={false}
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
              placeholder: 'Placeholder Text: Enter Issue Name',
            }}
          />

          <Input
            label="Standard"
            value=""
            hasError={false}
            onChange={(val) => setIssueName(val)}
            hintText="Help Text"
            variants="Standard"
            errorMessage={false}
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
              placeholder: 'Placeholder Text: Enter Issue Name',
            }}
          />
        </div>
      </main>
    </div>
  );
}
