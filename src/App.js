import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [fakePalettes, increaseFakePalettes] = useState([]);

  //the 1st argument in useState represents the actual starting state for the listed property (empty array)
  //the 2nd argument in useState represents a function that updates the 'state value'
  //fakePalette is just a placeholder for practice purposes

  //ComponentDidMount is replaced with useEffect
  useEffect(() => {
    //We'd run our imported FETCHES here (imported from APIcalls)
  });

  //Example function - likely passed to another component in the return clause below as props
  //const addAFakePalette = (newFakePalette) => {
  //   increaseFakePalettes([...fakePalettes, newFakePalette]);
  // }

  return (
    <main className='app'>
      <header className='app-header'>
        <p>PLACEHOLDER TEXT</p>
      </header>
      <section className='content'>
        <p>PLACEHOLDER TEXT</p>
      </section>
    </main>
  );
}

export default App;
