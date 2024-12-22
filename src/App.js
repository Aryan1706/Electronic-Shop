import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Contact from './pages/Contact';
import { HomeContextProvider } from './context/home-context';
import Cart from './pages/Cart';

const App = () => {
  return(
      <div className='App'>
        <HomeContextProvider>
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/:category/:brand' element={<Category/>}/>
              <Route path='/contact' element={<Contact/>} />
              <Route path='/cart' element={<Cart/>} />

            </Routes>
        </Router>
        </HomeContextProvider>
      </div>
  )
};

export default App;