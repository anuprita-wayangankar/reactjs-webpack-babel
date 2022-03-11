import React, { useState } from 'react';
import logo from './logo.svg';
import { InputText } from 'vt-atoms-test'
import { Button } from 'vt-atoms-test'
import './App.css';

const printModule = require("print-module")

function App() {

  const [name, setName] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {printModule.print("This is Testing of package")}
        <p>
        </p>
        <span>Name</span>
        <div>
          <InputText type='text' id='txtSearch'
            readOnly={false}
            parentClassName='jp-mobile-search-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{name}</p>
          <div className='jp-flight-search-button-container'>
            <Button value="Search" buttonType="primary" onClick={() => { }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
