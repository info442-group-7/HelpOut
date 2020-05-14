import React from 'react';
import { BrowserRouter, Route, Redirect, useHistory } from "react-router-dom";
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';

const App = () => {
  const isAuthenticated = () => {
    // Perform authentication logic once user handling on backend is set up
    return true
  }
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/home" component={DashboardLayout} />
      </switch>
    </BrowserRouter>
  )
  }
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
