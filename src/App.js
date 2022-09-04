import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';
import Posts from './routes/Posts';

import Header from './components/Header.js';
// react-router-dom V6에서는 <Routes> 아래에 <Route> 를 배치한다.
// 기존 component 대신 element사용.
function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about/:username" element={<About />} />
          <Route path="/invoices" element={<Invoices />} >
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="/posts/*" element={<Posts />}>
           <Route path=":title" element={<Posts />} />
          </Route>
          <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        </Routes>
    </Router>
  );
}

export default App;
