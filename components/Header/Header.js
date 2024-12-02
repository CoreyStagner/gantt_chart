import React, { useEffect, useState } from 'react';

const customStyles = {
  container: {
    backgroundColor: '#ff0000',
    padding: '10px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const Header = (props) => {
  const [_headerText, _setHeaderText] = useState('Gantt Tracker');
  const [isDocPage, setIsDocPage] = useState(false);

  useEffect(() => {
    if (props.header) _setHeaderText(props.header);
    setIsDocPage(window.location.pathname.includes('/docs') ? true : false);
  }, [props]);

  return (
    <header style={customStyles.container}>
      {props.logo && <img src="logo.png" alt="Company Logo" className="logo" />}
      <div>
        {props.header
          ? props.header
          : isDocPage
          ? 'Documentation'
          : 'Gantt Tracker'}
      </div>
      {isDocPage ? 'Doc' : 'Gantt'}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/docs/colors">Colors</a>
          </li>
          <li>
            <a href="/docs/form">Form</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
