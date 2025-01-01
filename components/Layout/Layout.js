import globalStyles from '../../styles/global.js';
// import { useEffect, useState } from 'react';

function Layout(props) {
  // TODO: work on getting this to work with gantt_tracker app so that we can use a central auth server. Will also need to set up roles for each app.
  // const [isUserValid, setIsUserValid] = useState(false);
  // const [isValidationComplete, setIsValidationComplete] = useState(false);
  // useEffect(() => {
  //   // validate user
  //   const validateUser = async () => {
  //     const isValid = await fetch(
  //       process.env.SENTINAL_AUTHENTICATION_URL ||
  //         'https://localhost:3041/api/auth/sso/validate'
  //     );
  //     console.log('here', isValid);
  //     setIsUserValid(isValid);
  //     setIsValidationComplete(true);
  //   };
  //   validateUser();
  // }, []);

  // if (!isValidationComplete) {
  //   return <div>Loading...</div>;
  // }

  // if (!isUserValid) {
  //   return <div>Unauthorized</div>;
  // }

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
