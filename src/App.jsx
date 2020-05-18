
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

///import Dashboard from './containers/Dashboard/Dashboard';
import YourRequests from './components/YourRequests/YourRequests';
import Test from './components/YourRequests/test';

import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import HomeView from './components/HomeView';


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const App = () => {
  const isAuthenticated = () => {
    // Perform authentication logic once user handling on backend is set up
    return true
  }
  return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>

          <Layout>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><span>Home</span>
                <Link to="/" /></Menu.Item>
                <Menu.Item key="2">Tasks</Menu.Item>
                <Menu.Item key="3"><span>Requests</span>
                <Link to="/YourRequests" /></Menu.Item>
                <Menu.Item key="4">Additional Resources
                <Link to="/test" /></Menu.Item>
            </Menu>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Route exact path="/" component={HomeView} />
              <Route path="/YourRequests" component={YourRequests} />
              <Route path="/test" component={Test} />
            </Content>

          </Layout>

        </Layout>
      </Router>
    );
  }


//import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
//import logo from './logo.svg';
//import { Button } from 'antd';
//import './App.css';
//import DashboardLayout from './components/DashboardLayout/DashboardLayout';
//import YourRequests from './components/YourRequests/YourRequests';

//const App = () => {
  //const isAuthenticated = () => {
    // Perform authentication logic once user handling on backend is set up
    //return true
 // }
  //return (
   // <BrowserRouter>
   //   <Switch>
     //   <Route exact path="/home" component={DashboardLayout} />
       // <Route exact path="/yourrequests" component={YourRequests} />

     // </Switch>
   // </BrowserRouter>
  //)
  //}

// const AuthedRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => isAuthenticated()
//       ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/login" }} />
//       )
//     }
//   >
//   </Route>
// );
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
