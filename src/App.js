import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
