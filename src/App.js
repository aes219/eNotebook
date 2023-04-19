import { SignIn } from "./pages/SignIn";  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
  
  function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dash" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
