import React from 'react'
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './Components/Feed/Feed';
import Settings from './Components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages' element={<Dialogs />} />
            <Route path='/news' element={<News/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
