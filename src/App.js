import React from 'react';
import './App.css';
import Authorization from './components/Authorization/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErorPg from './components/ErrorPage/errorPage';
import SlideBar from './components/MainContent/slideBar/SlideBar';
import HomePage from './components/MainContent/homePage/homePage';
import Profile from './components/MainContent/profilePage/profilePage';

const App = (props) => {
  if (props.data.AuthorizationPage.nextPage) {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Authorization data={props.data.AuthorizationPage} />} />
              <Route path='/error' element={<ErorPg />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    )
  } else {
    return (
      <BrowserRouter>
        <div className="App mainContent">
          <div className='leftArea'>
            <SlideBar data={props.data.SlideBarPage} />
          </div>
          <div className='rightArea'>
            <Routes>
              <Route path='home' element={<HomePage data = {props.data.HomePage}/>} />
              <Route path='/error' element={<ErorPg />} />
              <Route path='/profile' element={<Profile data = {props.data.ProfilePage}/>} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    );
  }

}

export default App;
