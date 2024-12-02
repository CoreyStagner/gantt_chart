import React from 'react';

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
  return (
    <header style={customStyles.container}>
      if (props.logo){' '}
      {<img src="logo.png" alt="Company Logo" className="logo" />}
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
