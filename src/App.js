import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Header />
      <Banner />
      <Album />
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