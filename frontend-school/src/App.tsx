import React, { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import InstructionsPage from './pages/colaborate/colaborate';
import PhotoPage from './pages/documents/document';
import Accordion from './pages/grade/grade';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactModal from './components/modal';
import { AccessPage } from './pages/access';
import { AuthProvider } from './context/Authcontext';
import AddSchoolPage from './pages/main/NewSchool';
import AddGradePage from './pages/grade/NewGrade';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Header onModalOpen={onModalOpen} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/colaboracion" element={<InstructionsPage />} />
            <Route path="/documents/:id" element={<PhotoPage />} />
            <Route path="/grade/:schoolId" element={<Accordion />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/newschool" element={<AddSchoolPage />} />
            <Route
              path="/grade/:schoolId/newgrade"
              element={<AddGradePage />}
            />
          </Routes>
          <ContactModal isOpen={isModalOpen} onClose={onModalClose} />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
