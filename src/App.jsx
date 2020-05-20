
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from 'antd';
///import Dashboard from './containers/Dashboard/Dashboard';
import YourRequests from './components/SuggestedTasks/SuggestedTasks';
import Test from './components/SuggestedTasks/test';
import logo from './logo.png';
import styles from './App.css'
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import HomeView from './components/HomeView';
import { DownOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>
      My claimed  tasks
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/SuggestedTasks">
        Find new tasks
      </a>
    </Menu.Item>

  </Menu>
);

const App = () => {
  const isAuthenticated = () => {
    // Perform authentication logic once user handling on backend is set up
    return true
  }

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Menu theme="light" mode="horizontal" style={{ boxShadow: "0px 0px 9px 3px rgba(41,41,41,.25)", height: "10vh", paddingTop: "1.6vh", alignItems: "center" }} defaultSelectedKeys={['2']}>
            <Menu.Item key="1" style={{ alignItems: "center" }}><span> <Menu.Item key="1"><span><img src={logo} alt="Smiley face" height="50" /></span><Link to="/" />
            </Menu.Item></span>
            </Menu.Item>
            <Menu.Item key="2"><Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Tasks <DownOutlined />
              </a>
            </Dropdown>
            </Menu.Item>
            <Menu.Item key="3"><span>Requests</span>
            </Menu.Item>
            <Menu.Item key="4">Additional Resources
                <Link to="/test" /></Menu.Item>
            <Menu.Item key="5" style={{ float: "right" }}>Welcome Back!
                </Menu.Item>
          </Menu>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#F1F4F6', minHeight: 280 }}>
            <Route exact path="/" component={HomeView} />
            <Route path="/SuggestedTasks" component={YourRequests} />
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
