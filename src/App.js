import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () =>{
  const [documents, setDocuments] = useState([
    { id: 1, title: "Document 1"},
    { id: 2, title: "Document 2"},
  ]);

  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleSelect = (docId) => {
    setSelectedDoc(docId);
    console.log(`Selected document: ${docId}`);
  };

  return(
    <div className='app'>
      <Sidebar documents={documents} onSelect={handleSelect}/>
      <div className='content'>
        {selectedDoc ? (
          <p>Editing Document ID: {selectedDoc}</p>
        ) : (
          <p>Select or create a new document</p>
        )}
      </div>
    </div>
  );
};

export default App;