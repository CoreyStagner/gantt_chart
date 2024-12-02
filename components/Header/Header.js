import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      {props.logo && (
        <Image
          src={props.logo?.src}
          alt={props.logo?.alt}
          height={100}
          width={100}
          className={props.logo?.className}
        />
      )}
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/docs/colors">Colors</Link>
          </li>
          <li>
            <Link href="/docs/form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
