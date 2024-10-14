import Header from './Components/Header'; 
import Home from './Pages/Home'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Explore from './Pages/Explore';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AllCards from './Components/AllCards';
import Content from './Pages/Content';

const App = () => {
  return (
    <Router>
      <Header /> {/* Uncomment this if you want to display the header on all pages */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/explore" element={<Explore />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/all-cards" element={<AllCards/>} /> 
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
