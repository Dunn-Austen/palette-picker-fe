import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {


  const [fakePalettes, increaseFakePalettes] = useState([]);
  //the useState argument represents the actual starting state for the listed property (empty array)
  //fakePalette is just a placeholder for practice purposes

  //ComponentDidMount is replaced with useEffect
  useEffect(() => {
    //Space for imported  Apicalls?
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
