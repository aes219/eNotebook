import { SignIn } from "./pages/SignIn";  
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import CreateNote from "./components/CreateNote";
  
  function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dash" element={<Dashboard/>} />
      <Route path="/createNote" element={<CreateNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
