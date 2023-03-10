import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

import Header from './components/Header';
import Counter from './components/Counter';
import NotFound from './pages/NotFound';



function App() {
  const title = 'React Overview'
  

  return (
    <>
      <Header title={title} />

      {/* <Counter /> */}

      <Routes>
        <Route path='/' element={<Home title={title} />}/>
        <Route path='/contact' element={<Contact title={title} />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>

    </>
    
  );
}

export default App;
