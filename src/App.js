import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Section from './pages/Section';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Discover from './pages/Discover';


function App() {
  return (
   <>
   <Nav/>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/sign-up' element={<Signup/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/discover' element={<Discover/>}/>
       <Route path='/en-savoir-plus' element={<Discover/>}/>
     </Routes>
     </BrowserRouter>
     
     </>
   
  );
}

export default App;
