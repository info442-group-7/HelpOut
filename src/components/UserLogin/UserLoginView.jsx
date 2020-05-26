import React, { Component } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

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
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
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