import { useEffect, useState } from 'react';
import Head from 'next/head';
import Input from '../components/Form/Input';
// import styles from '../styles/Home.module.css';

export default function Home() {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(undefined);
  const [issueName, setIssueName] = useState('');

  useEffect(() => {
    (async () => {
      const results = await fetch('/api/get/issue').then((response) =>
        response.json()
      );
      setIssues(results);
    })();
  }, []);

  const createNewIssue = () => {
    const name = document.querySelector('input[name="field_name"]').value;
    // Validate that the inputs are taken care of. API also does it but just going to have a double check.
    // TODO: Have the form component validate all fields in the form before submit.
    if (!name) {
      setError({ target: 'field_name', message: 'Name is required' });
      return;
    }
    fetch('/api/post/issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { name } }),
    }).then((response) => {
      // If successful then we will update our local list to include the new issue.
      if (response.status === 201) {
        (async () => {
          const results = await fetch('/api/get/issue').then((response) =>
            response.json()
          );
          setIssues(results);
        })();
        // If there is an error then we will display the error message.
      } else if (response.status === 400) {
        response.json().then((response) => {
          setError({ target: response.target, message: response.message });
          // find the target to highlight the error.
          const target = document.querySelector(
            `input[field_name="${error.target}"`
          );
          target.classList.add('error');
          target.previousElementSibling.textContent = error.message;
          target.previousElementSibling.classList.remove('hidden');
        });
      }
    });
  };

  /**
   * The code is an enum so this will interpert the code into a human readable status.
   * @param {Number} code Status code of the issue from the database.
   * @returns {String} Human readable status of the issue.
   */
  const resolveIssueStatusCode = (code) => {
    if (!code) {
      return 'Unknown';
    }
    switch (code) {
      case 100:
        return 'Backlog';
      case 200:
        return 'In Progress';
      case 300:
        return 'In Review';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      <style jsx>{`
        input.error {
          border: 2px red solid;
        }

        .hidden {
          display: none;
        }

        .field_error {
          color: red;
          font-size: 10px;
        }

        input {
          margin: 0;
        }

        .form_group {
          margin-top: 20px;
        }
      `}</style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <br />
        <div>
          {issues.map((issue) => (
            <div key={issue._id}>
              <h2>{issue.name}</h2>
              <p>{resolveIssueStatusCode(issue.status)}</p>
            </div>
          ))}
        </div>
        {/* TODO: Create a component for an entire form */}
        <div className="form_group">
          <Input
            label="Issue Name"
            value={issueName}
            hasError={error?.target === 'field_name'}
            onChange={(val) => setIssueName(val)}
            hintText="Provide a clear name for the issue"
            variants="primary"
            errorMessage={
              error?.target === 'field_name' ? error?.message : false
            }
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
            }}
          />

          <Input
            label="Secondary"
            value={issueName}
            hasError={error?.target === 'field_name'}
            onChange={(val) => setIssueName(val)}
            hintText="Provide a clear name for the issue"
            variants="secondary"
            errorMessage={
              error?.target === 'field_name' ? error?.message : false
            }
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
            }}
          />

          <Input
            label="Filled"
            value={issueName}
            hasError={error?.target === 'field_name'}
            onChange={(val) => setIssueName(val)}
            hintText="Provide a clear name for the issue"
            variants="filled"
            errorMessage={
              error?.target === 'field_name' ? error?.message : false
            }
            inputAttributes={{
              id: 'issueName',
              name: 'field_name',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create a component that handles the error message and input */}
          {/* <div className="field_group field_group-name"></div>
          {error?.target === 'name' && (
            <div className="field_error field-name--error">{error.message}</div>
          )}
          <input
            className={
              error?.target === 'name' ? 'error field-name' : 'field-name'
            }
            name="name"
          /> */}
          <button onClick={createNewIssue}>Create New Issue</button>
        </div>
      </main>
    </div>
  );
}
