import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Admin from './admin';
import Login from './login';
import { auth } from './fbase';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect (() =>{
    auth.onAuthStateChanged((user)=>{
      if(user.providerData[0].email.slice(-7,) === 'ukov.kr') {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    })
  }, [])

  return (
    <>
    <HashRouter>
        {isLoggedIn 
        ? <Admin userObj={userObj} />
        : <Login/>}
        <div className='info'>

        </div>
    </HashRouter>
    </>
  );
};

export default App;