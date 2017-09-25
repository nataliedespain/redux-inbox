import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Messages from './components/Messages';

const App = () => (
  <div>
    <Navbar />
    <Toolbar />
    <Messages />
  </div>
)

export default App;
