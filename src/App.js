import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import MainBody from './components/Home/MainBody';
import { useEffect } from 'react';
const Routing = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem("jwt")
    if (!user) {
      navigate("/")
    }
  },[])
  return <Routes>
    <Route path='/' element={<MainBody />} />
  </Routes>
}

function App() {
  return (
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  );
}