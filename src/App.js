import { useState } from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';

import Header from './components/Header';
import Counter from './components/Counter';



function App() {
  const title = 'React Overview'
  const [page, setPage] = useState('home')

  const handlePageView = () => {
    switch(page) {
      case 'home' :
        return <Home title={title}/>
      case 'contact' :
        return <Contact />
    }
  }

  return (
    <>
      <Header title={title} setPage={setPage}/>

      {/* <Counter /> */}

      {handlePageView()}

    </>
    
  );
}

export default App;
