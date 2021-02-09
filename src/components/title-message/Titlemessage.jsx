import React from 'react';
import Typed from 'react-typed';
import './titlemessage.style.css';

function Titlemessage() {
  return (
    <>
      <div className="typedtext">
        <h1>
          Hi,I am <br />
          Sudeep Bhandari
        </h1>
        <Typed
          className="typed-text"
          strings={['Front End Developer', 'Web-Design']}
          typeSpeed={35}
          backSpeed={60}
          loop
        />
      </div>
    </>
  );
}

export default Titlemessage;
