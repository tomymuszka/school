import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import InstructionsPage from './pages/colaborate/colaborate';
import PhotoPage from './pages/documents/document';
import Accordion from './pages/grade/grade';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactModal from './components/modal/modal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header onModalOpen={onModalOpen}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/colaboracion" element={<InstructionsPage />} />
          <Route path="/documents/:id" element={<PhotoPage />} />
          <Route path="/grade" element={<Accordion />} />
        </Routes>
        <ContactModal isOpen={isModalOpen} onClose={onModalClose} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
