import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Admin from './admin';
import Login from './login';
import { auth } from './fbase';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect (() =>{
    auth.onAuthStateChanged((user)=>{
      if(user.providerData[0].email.slice(-7,) === 'ukov.kr') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        alert('ukov.kr 계정으로 로그인해주세요!')
      }
    })
  }, [])

  return (
    <>
    <HashRouter>
        {isLoggedIn 
        ? <Admin/>
        : <Login/>}
        <div className='info'>

        </div>
    </HashRouter>
    </>
  );
};

export default App;