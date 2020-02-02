import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css'

import logo from '../../logo.svg'

import CounterCardReducer from '../../components/counterwithreducer';

function Home() {
    return (
    <>
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CounterCardReducer/>
    </div>
        <ul>
            <li>
                <Link to="/pokemon">Pokemon</Link>
            </li>
        </ul>
    </>
        );
    }

export default Home;