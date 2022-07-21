import './App.css';
// import upload from './upload';
import EnterEmail from './pages/EnterEmail'
import ConfirmEmail from './pages/ConfirmEmail'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterEmail />} />
        <Route path="/conf" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
