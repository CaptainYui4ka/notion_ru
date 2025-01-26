import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
<<<<<<< Updated upstream
import './App.css';
=======
import './App.css'
import Footer from  './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <div className='app'>
=======
    <div className='App'>
      <Header />
      <Banner />
      <Album />
>>>>>>> Stashed changes
      <Sidebar documents={documents} onSelect={handleSelect}/>
      <div className='content'>
        {selectedDoc ? (
          <p>Editing Document ID: {selectedDoc}</p>
        ) : (
          <p>Select or create a new document</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;