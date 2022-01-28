import React, { useState } from 'react';
import Data from './Data';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <React.Fragment>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;