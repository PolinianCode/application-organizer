import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import Overview from './pages/OverviewPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/overview' element={<Overview />} />
        <Route index element={<Home />} />
        <Route path='*' element = {<>Page not found</>} />
      </Routes>
    </div>
  );
}

export default App;