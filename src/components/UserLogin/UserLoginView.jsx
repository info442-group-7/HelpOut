import React, { Component } from 'react';
import firebase from "../../FirebaseUtil";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect, Link, useHistory } from 'react-router-dom';


import './UserLoginView.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const UserLoginView = () => {

  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Success:', values);
    const authUserResponse = await firebase.app().auth().signInWithEmailAndPassword(values.email, values.password)
    console.log(authUserResponse);
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const redirectToSignUp = function() {
    console.log('pushing to signup')
    history.push(`/signup`);
  }

// put util file 
// on finish call firebase
  return (
    <div id="login-container">
      <h1>Welcome to Helpout!</h1>
      <h2>Please log in or sign up to continue.</h2>

      <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
      onFinishFaild={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            // message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} type='email' placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            // message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
     <Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      </Form>
      <hr class='form-divider'></hr>
      <p>Don't have an account yet?</p>
      <Button type="secondary" onClick={redirectToSignUp}>Sign up</Button>
    </div>
  );
};
// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

// class LoginDemo extends React.Component {
//   state = {
//     notice: '',
//     type: 'tab2',
//     autoLogin: true,
//   };
//   onSubmit = (err, values) => {
//     console.log('value collected ->', {
//       ...values,
//       autoLogin: this.state.autoLogin,
//     });
//     if (this.state.type === 'tab1') {
//       this.setState(
//         {
//           notice: '',
//         },
//         () => {
//           if (!err && (values.username !== 'admin' || values.password !== '888888')) {
//             setTimeout(() => {
//               this.setState({
//                 notice: 'The combination of username and password is incorrect!',
//               });
//             }, 500);
//           }
//         }
//       );
//     }
//   };
//   onTabChange = key => {
//     this.setState({
//       type: key,
//     });
//   };
//   changeAutoLogin = e => {
//     this.setState({
//       autoLogin: e.target.checked,
//     });
//   };
//   render() {
//     return (
//       <div className="login-warp">
//         <Login
//           defaultActiveKey={this.state.type}
//           onTabChange={this.onTabChange}
//           onSubmit={this.onSubmit}
//         >
//           <Tab key="tab1" tab="Account">
//             {this.state.notice && (
//               <Alert
//                 style={{ marginBottom: 24 }}
//                 message={this.state.notice}
//                 type="error"
//                 showIcon
//                 closable
//               />
//             )}
//             <UserName name="username" />
//             <Password name="password" />
//           </Tab>
//           <Tab key="tab2" tab="Mobile">
//             <Mobile name="mobile" />
//             <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
//           </Tab>
//           <div>
//             <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
//               Keep me logged in
//             </Checkbox>
//             <a style={{ float: 'right' }} href="">
//               Forgot password
//             </a>
//           </div>
//           <Submit>Login</Submit>
//           <div>
//             Other login methods
//             <span className="icon icon-alipay" />
//             <span className="icon icon-taobao" />
//             <span className="icon icon-weibo" />
//             <a style={{ float: 'right' }} href="">
//               Register
//             </a>
//           </div>
//         </Login>
//       </div>
//     );
//   }
// }

 export default UserLoginView;