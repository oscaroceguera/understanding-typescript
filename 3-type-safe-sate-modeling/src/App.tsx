import React from 'react';
import ProfileBasic from './Profile-basic';
import ProfileContext from './ProfileContext';

const bgnStyle = {
  margin: '1em',
  padding: '1em',
  background: '#ecf0f1',
  width: '100vw',
};

const App = () => {
  return (
    <div >
      <div style={bgnStyle}>
        <h1>Profile basic</h1>
        <ProfileBasic />
      </div>
      <div style={bgnStyle}>
        <h1>Profile Context</h1>
        <ProfileContext />
      </div>
    </div>
  );
};

export default App;
