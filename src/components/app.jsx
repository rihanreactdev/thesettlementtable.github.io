import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './common/loader';
import { Route } from "react-router-dom";
import Default from "./dashboard/Default";
import RegCase from "./dashboard/RegCase";
import SecureContract from "./dashboard/SecureContract";
import ViewCaseDetail from "./dashboard/ViewCaseDetail";
import Calendar from "react-calendar";
// import Project from "./dashboard/project/project";
import Main from "./StaticFolder/Main";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ForgotPassword from "./authentication/ForgotPassword";
import Panel from "./StaticFolder/Panel";
import NeutralLogin from "./neutralAuthentication/NeutralLogin";
import NeutralRegister from "./neutralAuthentication/NeutralRegister";
import NeutralForgotPassword from "./neutralAuthentication/NeutralForgotPassword";
import AuthenticatedRoute from "./AutheticatedRoute";
import Services from "./StaticFolder/Services";
import Rules from "./StaticFolder/Rules";
import Faq from "./StaticFolder/Faq";

const AppLayout = () => {
        return (
            <div>
                <Loader />
                <div className="page-wrapper">
                    <div className="page-body-wrapper">
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/userlogin" component={Login}/>
                            <Route exact path="/neutrallogin" component={NeutralLogin}/>
                            <Route exact path="/signup" component={Register}/>
                            <Route exact path="/neutralsignup" component={NeutralRegister}/>
                            <Route exact path="/forgotpassword" component={ForgotPassword}/>
                            <Route exact path="/neutralforgotpassword" component={NeutralForgotPassword}/>
                            <Route exact path="/panel" component={Panel}/>
                            <Route exact path="/services" component={Services}/>
                            <Route exact path="/rules" component={Rules}/>
                            <Route exact path="/faq" component={Faq}/>
                            <Route exact path="/userdashboard/default" component={Default}/>
                            {/*<AuthenticatedRoute*/}
                            {/*    Component= {Default}*/}
                            {/*    path = "/userdashboard/default"*/}
                            {/*    redirectPath= "/userlogin"*/}
                            {/* />*/}
                             <AuthenticatedRoute
                                Component= {RegCase}
                                path = "/userdashboard/registercase"
                                redirectPath= "/userlogin"
                             />
                             <AuthenticatedRoute
                                Component= {SecureContract}
                                path = "/userdashboard/securecontract"
                                redirectPath= "/userlogin"
                             />
                             <AuthenticatedRoute
                                Component= {ViewCaseDetail}
                                path = "/userdashboard/accesscasedetail"
                                redirectPath= "/userlogin"
                             />
                             <AuthenticatedRoute
                                Component= {Calendar}
                                path = "/userdashboard/timeline"
                                redirectPath= "/userlogin"
                             />
                             {/*<AuthenticatedRoute*/}
                             {/*   Component= {Project}*/}
                             {/*   path = "/userdashboard/contact"*/}
                             {/*   redirectPath= "/userlogin"*/}
                             {/*/>*/}
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
}

export default AppLayout;
