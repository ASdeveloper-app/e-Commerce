import React from 'react';
import {Link} from "react-router-dom"

const Error = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./ArturoAraujo.jpeg' className="App-logo" alt="logo" />
        <h1>
          Hello From Error
        </h1>
        <Link to="/">
          Continuar
        </Link>
      </header>
    </div>
  );
}

export default Error;