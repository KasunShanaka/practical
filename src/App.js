import './App.scss';
import { Toaster } from 'react-hot-toast';
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </BrowserRouter >
  );
}

export default App;
