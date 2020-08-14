import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';

import './App.css';
import LandingPage from './views/LandingPage.js';
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%', textAlign: 'center' }}>
      <div className="menu__logo">News App Logo</div>
    </nav>
    <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
    <div style={{
      height: '80px', display: 'flex',
      flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', fontSize:'1rem'
    }}>
      <p> Happy Coding  <SmileOutlined /></p>
    </div>
    </Suspense>
  );
}

export default App;