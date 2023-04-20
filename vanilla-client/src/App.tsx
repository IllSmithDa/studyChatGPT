import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './_store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>          
      </Router>
    </Provider>
  )
}

export default App
