import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Greeting from './Greeting';
// import '../styles/index.css';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={(
          <h2
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
              backgroundColor: 'lightgray',
              margin: 0,
            }}
          >
            Welcome to Greeting App!
          </h2>
        )}
      />
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;