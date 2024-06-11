import logo from './logo.svg';
import './App.css';
import React from 'react';
import Signup from './Signup';
import Listing from './Listing';

function App() {
    return (
        <div className="App">
            <h1>Simple Signup Flow</h1>
            <Signup />
            <Listing />
        </div>
    );
}

export default App;

