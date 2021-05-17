import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import FAQ from './components/FAQ';
import Info from './components/info';
import Internship from './components/internship';
import Networking from './components/networking';
import Partner from './components/partner';
import Project from './components/project';
import Recruit from './components/recruit';
import './css/admin.css'


function Admin() {

    return (
    <div className='adminBody'>
        <HashRouter>
            <ul className='Nav'>
                <Link className='navItem' exact to='/info'>UKOV 정보</Link>
                <Link className='navItem' exact to='/internship'>UKOV 후기</Link>
                <Link className='navItem' exact to='/partner'>다양한 파트너사</Link>
                <Link className='navItem' exact to='/networking'>네트워킹</Link>
                <Link className='navItem' exact to='/recruit'>선발부분</Link>
                <Link className='navItem' exact to='/FAQ'>FAQ</Link>
                <Link className='navItem' exact to='/project'>미니프로젝트</Link>
            </ul>
            <div className='mainContent'>
            <Switch>
                <Route exact path={['/', '/info']}>
                    <Info />
                </Route>
                <Route exact path='/internship'>
                    <Internship/>
                </Route>
                <Route exact path='/Partner'>
                    <Partner />
                </Route>
                <Route exact path='/Project'>
                    <Project />
                </Route>
                <Route exact path='/Networking'>
                    <Networking />
                </Route>
                <Route exact path='/recruit'>
                    <Recruit />
                </Route>        
                <Route exact path='/FAQ'>
                    <FAQ />
                </Route>
            </Switch>
            </div>
        </HashRouter>
    </div>  
        );
}


export default Admin;