import React, { useState } from 'react'; // Helyes importálás
import './App.css';

function App() {
  const [note, setNote] = useState(''); // Hook-ok inicializálása
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note) {
      setNotes([...notes, note]);
      setNote('');
    }
  };
// ((_, i) => i !== index
  const handleDeleteNote = (index) => {
    const newNotes = notes.filter(function(elem, i){
      return i !== index;
    });
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jegyzetelő</h1>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Adj új jegyzetet"
        />
        <button onClick={handleAddNote}>Add Note</button>
        <ul>
          {notes.map((n, index) => (
            <li key={index}>
              {n}
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
