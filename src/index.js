import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import firebase from './firebase/app';
// import 'firebase/auth';
// import 'firebase/database';


// const App = () => {
//   const [date, setDate] = useState(null);
//   const handleChange = value => {
//     message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
//     setDate(value);
//   };
//   return (
//     <div style={{ width: 400, margin: '100px auto' }}>
//       <DatePicker onChange={handleChange} />
//       <div style={{ marginTop: 16 }}>
//         Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
//       </div>
//     </div>
//   );
// };


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
