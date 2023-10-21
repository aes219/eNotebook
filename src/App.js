import './input.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import CreateNote from "./components/CreateNote";
  
  function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/createNote" element={<CreateNote/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
