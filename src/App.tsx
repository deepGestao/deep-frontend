// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import ConfirmEmailPage from './components/pages/ConfirmPage';
import Step1Page from './components/pages/Step1page';
import Step2Page from './components/pages/Step2Page';
import Step3Page from './components/pages/Step3Page';
import Step4Page from './components/pages/Step4Page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/confirm-email" element={<ConfirmEmailPage />} />
      <Route path="/step-1" element={<Step1Page />} />
      <Route path="/step-2" element={<Step2Page />} />
      <Route path="/step-3" element={<Step3Page />} />
      <Route path="/step-4" element={<Step4Page />} />
      {/* Mais rotas, se necessário */}
    </Routes>
  );
};

export default App;
