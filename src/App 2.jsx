import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Home } from "./routes/home";


// pre: none
// post: Returns the JSX for the current view of the overall app
const App = () => {
  // const isAuthenticated = () => {
  //   // Perform authentication logic once user handling on backend is set up
  //   return true
  // }
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

  return (
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,

    
      {/* <switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/fraudhistory" component={FraudHistory} />
        <Route exact path="/yourcredentials" component={YourCredentials} />
      </switch> */}
    </BrowserRouter>
  )
}
export default App;

/* export default AppController;*/
