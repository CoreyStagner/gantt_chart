import { useEffect, useState } from 'react';
import Head from 'next/head';
import Input from '../components/Form/Input';
// import Issue from '../../Models/Issue';

const stringifyDate = (obj) => {
  if (!obj || !obj.y || !obj.m || !obj.d) {
    return '';
  }
  return `${obj.y}-${obj.m}-${obj.d}`;
};

export default function Home() {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(undefined);
  const [issueName, setIssueName] = useState(undefined);
  const [issueStatus, setIssueStatus] = useState(undefined);
  const [startDate, setStartDate] = useState({
    y: undefined,
    m: undefined,
    d: undefined,
  });
  const [endDate, setEndDate] = useState({
    y: undefined,
    m: undefined,
    d: undefined,
  });
  const [issueType, setIssueType] = useState(undefined);
  const [assignedTo, setAssignedTo] = useState(undefined);
  const [summary, setSummary] = useState(undefined);
  const [description, setDescription] = useState('');
  const [acceptanceCriteria, setAcceptanceCriteria] = useState('');
  const [refTo, setRefTo] = useState(undefined);
  const [iteration, setIteration] = useState(undefined);
  // TODO: Research: Should the four below just come from the DB?
  const [createdDate, setCreatedDate] = useState(undefined);
  const [createdBy, setCreatedBy] = useState(undefined);
  const [updatedBy, setUpdatedBy] = useState(undefined);
  const [updatedDate, setUpdatedDate] = useState(undefined);
  // TODO: Research: Should this be handled by the DB or should we calculate a different way?
  const [refBy, setRefBy] = useState(undefined);
  // TODO: Research: Do we need this value?
  const [assignedDate, setAssignedDate] = useState(undefined);

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
    const issueStatus = document.querySelector(
      'input[name="field_status"]'
    ).value;
    const startDate = document.querySelector(
      'input[name="field_startDate"]'
    ).value;
    const endDate = document.querySelector('input[name="field_endDate"]').value;
    const issueType = document.querySelector(
      'input[name="field_issueType"]'
    ).value;
    const assignedTo = document.querySelector(
      'input[name="field_assignedTo"]'
    ).value;
    const summary = document.querySelector('input[name="field_summary"]').value;
    const description = document.querySelector(
      'input[name="field_description"]'
    ).value;
    const acceptanceCriteria = document.querySelector(
      'input[name="field_acceptanceCriteria"]'
    ).value;
    const refTo = document.querySelector('input[name="field_refTo"]').value;

    // TODO: Check that all required fields are completed.
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
      body: JSON.stringify({
        data: {
          name,
          issueStatus,
          startDate,
          endDate,
          issueType,
          assignedTo,
          summary,
          description,
          acceptanceCriteria,
          refTo,
        },
      }),
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
          <h2>Issues</h2>
          {issues.map((issue) => (
            <div key={issue._id}>
              <h2>{issue.name}</h2>
              <p>Details</p>
              <p>{resolveIssueStatusCode(issue.status)}</p>
              <p>{stringifyDate(issue.startDate)}</p>
              <p>{stringifyDate(issue.endDate)}</p>
              <p>{issue.issueType}</p>
              <p>{issue.assignedTo}</p>
              <p>{issue.summary}</p>
              <p>{issue.description}</p>
              <p>{issue.acceptanceCriteria}</p>
              <p>{issue.refTo}</p>
            </div>
          ))}
        </div>
        {/* TODO: Create a component for an entire form */}
        <div className="form_group">
          <h2>Create New Issue</h2>
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

          {/* TODO: Create and change this to a dropdown */}
          <Input
            label="Status"
            value={issueStatus}
            hasError={error?.target === 'field_status'}
            onChange={(val) => setIssueStatus(val)}
            hintText="Choose the Status of the issue (Default is Backlog)"
            variants="primary"
            errorMessage={
              error?.target === 'field_status' ? error?.message : false
            }
            inputAttributes={{
              id: 'issueStatus',
              name: 'field_status',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a DatePicker */}
          <Input
            label="Start Date"
            value={stringifyDate(startDate)}
            hasError={error?.target === 'field_startDate'}
            onChange={(val) => setStartDate(val)}
            hintText="Choose the Start Date of this issue"
            variants="primary"
            errorMessage={
              error?.target === 'field_startDate' ? error?.message : false
            }
            inputAttributes={{
              id: 'startDate',
              name: 'field_startDate',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a DatePicker */}
          <Input
            label="End Date"
            value={stringifyDate(endDate)}
            hasError={error?.target === 'field_endDate'}
            onChange={(val) => setEndDate(val)}
            hintText="Choose the End Date of this issue"
            variants="primary"
            errorMessage={
              error?.target === 'field_endDate' ? error?.message : false
            }
            inputAttributes={{
              id: 'endDate',
              name: 'field_endDate',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a dropdown */}
          <Input
            label="Issue Type"
            value={issueType}
            hasError={error?.target === 'field_issueType'}
            onChange={(val) => setIssueType(val)}
            hintText="Choose the Type of this issue"
            variants="primary"
            errorMessage={
              error?.target === 'field_issueType' ? error?.message : false
            }
            inputAttributes={{
              id: 'issueType',
              name: 'field_issueType',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a dropdown that has autocomplete */}
          <Input
            label="Assigned To:"
            value={assignedTo}
            hasError={error?.target === 'field_assignedTo'}
            onChange={(val) => setAssignedTo(val)}
            hintText=""
            variants="primary"
            errorMessage={
              error?.target === 'field_assignedTo' ? error?.message : false
            }
            inputAttributes={{
              id: 'assignedTo',
              name: 'field_assignedTo',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a Text Field, preferably some kind of RTE */}
          <Input
            label="Summary:"
            value={summary}
            hasError={error?.target === 'field_summary'}
            onChange={(val) => setSummary(val)}
            hintText=""
            variants="primary"
            errorMessage={
              error?.target === 'field_summary' ? error?.message : false
            }
            inputAttributes={{
              id: 'summary',
              name: 'field_summary',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a Text Field, preferably some kind of RTE */}
          <Input
            label="Description:"
            value={description}
            hasError={error?.target === 'field_description'}
            onChange={(val) => setDescription(val)}
            hintText=""
            variants="primary"
            errorMessage={
              error?.target === 'field_description' ? error?.message : false
            }
            inputAttributes={{
              id: 'description',
              name: 'field_description',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a Text Field, preferably some kind of RTE */}
          <Input
            label="Acceptance Criteria:"
            value={acceptanceCriteria}
            hasError={error?.target === 'field_acceptanceCriteria'}
            onChange={(val) => setAcceptanceCriteria(val)}
            hintText=""
            variants="primary"
            errorMessage={
              error?.target === 'field_acceptanceCriteria'
                ? error?.message
                : false
            }
            inputAttributes={{
              id: 'acceptanceCriteria',
              name: 'field_acceptanceCriteria',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a dropdown that has autocomplete */}
          <Input
            label="Part Of Issue:"
            value={refTo}
            hasError={error?.target === 'field_refTo'}
            onChange={(val) => setRefTo(val)}
            hintText="If this belongs to another issue(either a child or sibling), then choose it hear"
            variants="primary"
            errorMessage={
              error?.target === 'field_refTo' ? error?.message : false
            }
            inputAttributes={{
              id: 'refTo',
              name: 'field_refTo',
              className: '',
              required: true,
            }}
          />

          {/* TODO: Create and change this to a dropdown that has autocomplete */}
          <Input
            label="Iteration:"
            value={iteration}
            hasError={error?.target === 'field_iteration'}
            onChange={(val) => setRefTo(val)}
            hintText="Which Iteration is this issue a part of?"
            variants="primary"
            errorMessage={
              error?.target === 'field_iteration' ? error?.message : false
            }
            inputAttributes={{
              id: 'iteration',
              name: 'field_iteration',
              className: '',
              required: false,
            }}
          />

          {/* 
            iteration
          */}

          <button onClick={createNewIssue}>Create New Issue</button>
        </div>
      </main>
    </div>
  );
}
