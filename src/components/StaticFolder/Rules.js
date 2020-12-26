import React, { Fragment } from 'react';
import logo1 from '../../assets/img/logo.png'
import LoginUserMenu from '../common/header-component/loginUserMenu';

const Rules = () => {
    return (
        <Fragment>
        <div>
           <div>
                <div className="bg-white-80  w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div>
                            <img src={logo1} height="150px" width="150px" alt="logo"/>
                        </div>
                        <div className="center flex ttu tracked fw6"
                             style={{justifyContent: 'center', paddingTop: '20px'}}>
                            <span><a className="link dim dark-gray mr3 tr pr2 w-100" href="/" title="Home">
                                Home</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/"
                                     title="About">About</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr pr2 w-100" href="/services"
                                     title="Services">Services</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/"
                                     title="Blog">Blog</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/panel"
                                     title="Panel">Panel</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/rules"
                                     title="Rules">Rules</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/faq"
                                     title="FAQ">FAQ/HELP</a></span>
                            <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/"
                                     title="Contact">Contact</a></span>
                            <LoginUserMenu/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>RULE1</h5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                            </div>
                            <div className="card-body">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
};

export default Rules;
