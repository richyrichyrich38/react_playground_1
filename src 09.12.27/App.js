import Header from './components/Header';
import Main from './components/Main';
import Counter from './components/Counter';



function App() {
  const title = 'React Overview'
  // const fruits = ["apple", 'orange', 'grape', 'tomato']

  return (
    <>
      <Header title={title}/>

      {/* <Counter /> */}

      <Main title={title} />
    </>
    
  );
}

export default App;
