import globalStyles from '../../styles/global.js';
import { useEffect, useState } from 'react';

function Layout(props) {
  // TODO: work on getting this to work with gantt_tracker app so that we can use a central auth server. Will also need to set up roles for each app.
  const [isUserValid, setIsUserValid] = useState(false);
  const [isValidationComplete, setIsValidationComplete] = useState(false);

  // validate user
  const validateUser = async () => {
    // const isValid = async () => {
    console.log('\n\n\n\n\n\n\n\nTesting validation\n\n\n\n\n\n\n');
    const response = await fetch(
      process.env.SENTINAL_AUTHENTICATION_URL ||
        'https://localhost:3041/api/auth/sso/validate',
      {
        method: 'POST',
        key: 'Access-Control-Allow-Origin',
        value: 'https://localhost:3041',
      }
    )
      .then((r) => r)
      .then((r2) => {
        console.log('r2', r2);
        return r2;
      });

    return response;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let isValid = await validateUser()
          .then((r) => r.json())
          .then((r2) => {
            return r2;
          });

        if (!isValid || isValid.toUpperCase() === 'UNAUTHORIZED') {
          setIsUserValid(false);
        } else {
          // TODO: make sure the cookie exists and has this value else set that value.
          setIsUserValid(isValid);
        }
        setIsValidationComplete(true);
      } catch (e) {
        console.error(e);
        setIsUserValid(false);
        setIsValidationComplete(true);
      }
    }
    fetchData();
  }, []);

  if (!isValidationComplete) {
    return <div>Loading...</div>;
  }

  if (!isUserValid) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}

export default Layout;
