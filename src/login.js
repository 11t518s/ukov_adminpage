import React, { useEffect, useState } from 'react';
import { auth, firebaseInstance } from './fbase';
import './css/login.css'



function Login(){
    const onClick = async() => {
        let provider = new firebaseInstance.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }
        return (
        <div className='logInBody'>
        <div className='firstIntroduce'>
            안녕하세요! 저는 22기 단장으로 활동했던 최봉수 입니다!<br/>
            제가 홈페이지를 만들긴 했는데 이런 저런 정보 수정이 필요할 것 같아서 <br/>
            이렇게 따로 어드민 페이지를 만들었습니다.<br/>
            자세한 사항은 로그인 하시면 확인할 수 있으니 로그인해주세요 :)<br/><br/>

            <b>ukov계정이 아니면 로그인 안됩니다! 계정 확인 부탁드립니다 :)</b><br/><br/>


        </div>

            <button onClick={onClick} name='google'>UKOV계정으로 로그인하기</button>
        </div>
    )
};
export default Login;