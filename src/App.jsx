import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Button } from 'antd';
import styles from './App.css';
import './test.css';
///import Dashboard from './containers/Dashboard/Dashboard';
import SuggestedTasks from './components/SuggestedTasks/SuggestedTasks';
import ClaimedTasks from './components/ClaimedTasks/ClaimedTasksView';
import CreateNewRequestView from './components/CreateNewRequest/CreateNewRequestView';
import UserLoginView from './components/UserLogin/UserLoginView';
import MyRequests from './components/MyRequests/MyRequestsView';
import Test from './components/SuggestedTasks/test';
import logo from './logo.png';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import HomeView from './components/HomeView';
import SignUpView from './components/UserSignUp/UserSignUpView'
import { DownOutlined } from '@ant-design/icons';
import HomePageView from './components/HomePageView';
import AdditionalResourcesView from './components/AdditionalResources/AdditionalResourcesView'
import firebase from 'firebase/app';
import 'firebase/database'; 
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import 'firebase/database'; 
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const handleSignOut = () => {
  /* TODO: sign out user here */
  firebase.auth().signOut();
  console.log('logged out!')
  console.log(firebase.auth().currentUser)
}
const menuTasks = (
  <Menu>
    <Menu.Item>
    <a rel="noopener noreferrer" href="/ClaimedTasks"> My claimed tasks </a>
    </Menu.Item>
    <Menu.Item> <a rel="noopener noreferrer" href="/SuggestedTasks"> Find new tasks </a>
    </Menu.Item>
  </Menu>
);
const menuRequests = (
  <Menu>
    <Menu.Item>
    <a rel="noopener noreferrer" href="/MyRequests"> My requests </a>
    </Menu.Item>
    <Menu.Item>
    <a rel="noopener noreferrer" href="/CreateRequest"> Create a request </a>
    </Menu.Item>
  </Menu>
);
const menuWelcome = (
  <Menu>
    <Menu.Item>
    <Button onClick={handleSignOut}> Logout </Button>
    </Menu.Item>
  </Menu>
)
const App = () => {
  // sets user variable given from firebase to the state 
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user)
        console.log("user is signed in")
        // User is signed in.
      } else {
        setUser(null)
        console.log("user is logged out")
        // No user is signed in.
      }
    });
  }
  )
  const isAuthenticated = () => {
    // Perform authentication logic once user handling on backend is set up
    return true
  }
  //A callback function for logging out the current user
  const handleSignOut = () => {
    // this.setState({errorMessage:null}); //clear any old errors
    /* TODO: sign out user here */
    firebase.auth().signOut();
  }
  const logoutMenuItem = React.useMemo(() => {
    return(
      user && 
      <Menu.Item key="5" style={{ float: "right" }}>
        <Dropdown overlay={ menuWelcome }>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Welcome back!     <DownOutlined />
          </a>
        </Dropdown>
    </Menu.Item>
    )
  }, [user, menuWelcome]);
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Menu theme="light" mode="horizontal" style={{ boxShadow: "0px 0px 9px 3px rgba(41,41,41,.25)", height: "10vh", paddingTop: "1.6vh", alignItems: "center" }} defaultSelectedKeys={['2']}>
            <Menu.Item key="1" style={{ alignItems: "center" }}><span> <Menu.Item key="1"><span><img src={logo} alt="Smiley face" height="50" /></span><Link to="/HomePageView" />
            </Menu.Item></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Dropdown overlay={menuTasks}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Tasks <DownOutlined />
              </a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="3"><Dropdown overlay={menuRequests}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Requests <DownOutlined />
              </a>
            </Dropdown>
            </Menu.Item>
            <Menu.Item key="4">Additional Resources
                <Link to="/AdditionalResources" /></Menu.Item>
            { logoutMenuItem }
          </Menu>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#F1F4F6', minHeight: 280 }}>
            <AuthProvider>
            <PrivateRoute exact path="/" component={HomePageView} />
            <PrivateRoute path="/ClaimedTasks" component={ClaimedTasks} />
            <PrivateRoute path="/AdditionalResources" component={AdditionalResourcesView} />
            <PrivateRoute path="/MyRequests" component={MyRequests} />
            <PrivateRoute path="/HomePageView" component={HomePageView} />
            <PrivateRoute path="/CreateRequest" component={CreateNewRequestView} />
            <PrivateRoute exact path="/SuggestedTasks" component={SuggestedTasks} />
            <Route path="/login" component={UserLoginView} />
            <Route path="/signup" component={SignUpView} />
            </AuthProvider>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
export default App;