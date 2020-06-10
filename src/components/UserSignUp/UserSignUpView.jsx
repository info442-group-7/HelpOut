import { Form, Input, Select, Tooltip, Button, Modal } from 'antd';
import React, { Component } from 'react';
import firebase from "../../FirebaseUtil";
import { useHistory } from 'react-router-dom';
import './UserSignUpView.css';



const { Option } = Select;

const UserSignUpView = () => {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const authUserResponse = await firebase.app().auth().createUserWithEmailAndPassword(values.email, values.password)
    console.log('authuserresponse is ' + authUserResponse)
    const newUserSnapshot = await firebase.database().ref('USER/' + authUserResponse.user.uid).set({  //reference to collection 
      // username: name,
      USER_EMAIL: values.email,
      USER_DOB: values.dob, 
      USER_FNAME: values.firstname,
      USER_LNAME: values.lastname,
      USER_ID: authUserResponse.user.uid,
      USER_PHONE_NUMBER: values.phonenum,
      USER_CITY: values.city,
      USER_STATE: values.state,
      USER_STREET_ADDRESS: values.street,
      USER_ZIP_CODE: values.zipcode,
      // profile_picture : imageUrl
    });
    history.push("/HomePageView");
    // console.log(newUserSnapshot.val())
    // success();

  };

  //   // if error connecting to DB
  //   const onFinishFailed = errorInfo => {
  //     // add in error message
  //     // connect this state to db (promise, return)
  //     console.log('Failed:', errorInfo);
  //   };

  // // modal informing user that their submission was successful, onclick will redirect them
  // function success() {

  //   Modal.success({
  //     okText:"Done",
  //     title: 'Register successful!',
  //     content: 'Thank you for creating an account.',
  //     onOk() {
  //       //something
  //     }
  //   });
  //   console.log('modal should be appearing');

  // }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const history = useHistory();

  const returnRedirect = function() {
    history.push("/login");
  };

  return (
    <div id="signup-form-container">
      <h1 id="signup-heading">Create an account</h1>
      <p id="signup-return"><a onClick={returnRedirect}>Return to login</a></p>
      <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>

        <Form.Item label="Email">
          <Form.Item
            name="email"
            noStyle
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input style={{ width: 320 }} placeholder="Please input" type="email"/>
          </Form.Item>
        </Form.Item>
        
        <Form.Item label="Name">
          <Form.Item
            name="firstname"
            noStyle
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="First name"/>
          </Form.Item>
          <Form.Item
            name="lastname"
            noStyle
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Last name"/>
          </Form.Item>

          {/* <Tooltip title="Useful information">
            <a href="#API" style={{ margin: '0 8px' }}>
              Need Help?
            </a>
          </Tooltip> */}
        </Form.Item>
        <Form.Item label="Phone number">
          <Form.Item
            name="phonenum"

            noStyle
            rules={[{ len: 12, pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", required: true, message: 'Phone number is required. Please format as: xxx-xxx-xxxx' }]}
          >
            <Input style={{ width: 160 }}  maxLength= '12' placeholder="206-123-4567" type="tel"/>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Date of birth">
          <Form.Item
            name="dob"

            noStyle
            rules={[{ required: true, message: 'Date of birth is required.' }]}
          >
            <Input style={{ width: 160 }} placeholder="09/01/1997" type="date"/>
          </Form.Item>
        </Form.Item>

        <Form.Item label="Address">
          <Input.Group>
            <Form.Item
              name={'street'}
              noStyle
              rules={[{ required: true, message: 'Your full address is required.' }]}
            >
              <Input style={{  }} placeholder="Street address"/>
            </Form.Item>
  
            <Form.Item
              name={'city'}
              noStyle
              rules={[{ required: true, message: 'Your full address is required.' }]}
            >
              <Input style={{ width: '50%' }} placeholder="City" />
            </Form.Item>
            <Form.Item
              name={'zipcode'}
              noStyle
              rules={[{ required: true, message: 'Your full address is required.' }]}
            >
              <Input style={{ width: '15%' }} placeholder="Zipcode" maxLength='5'/>
            </Form.Item>

            <Form.Item
              name={'state'}
              noStyle
              rules={[{ required: true, message: 'Your full address is required.' }]}
            >
              <Select placeholder="State" style={{ width: '15%'}}name="state" id="state">
                <Option value="" selected="selected">Select a State</Option>
                <Option value="AL">Alabama</Option>
                <Option value="AK">Alaska</Option>
                <Option value="AZ">Arizona</Option>
                <Option value="AR">Arkansas</Option>
                <Option value="CA">California</Option>
                <Option value="CO">Colorado</Option>
                <Option value="CT">Connecticut</Option>
                <Option value="DE">Delaware</Option>
                <Option value="DC">District Of Columbia</Option>
                <Option value="FL">Florida</Option>
                <Option value="GA">Georgia</Option>
                <Option value="HI">Hawaii</Option>
                <Option value="ID">Idaho</Option>
                <Option value="IL">Illinois</Option>
                <Option value="IN">Indiana</Option>
                <Option value="IA">Iowa</Option>
                <Option value="KS">Kansas</Option>
                <Option value="KY">Kentucky</Option>
                <Option value="LA">Louisiana</Option>
                <Option value="ME">Maine</Option>
                <Option value="MD">Maryland</Option>
                <Option value="MA">Massachusetts</Option>
                <Option value="MI">Michigan</Option>
                <Option value="MN">Minnesota</Option>
                <Option value="MS">Mississippi</Option>
                <Option value="MO">Missouri</Option>
                <Option value="MT">Montana</Option>
                <Option value="NE">Nebraska</Option>
                <Option value="NV">Nevada</Option>
                <Option value="NH">New Hampshire</Option>
                <Option value="NJ">New Jersey</Option>
                <Option value="NM">New Mexico</Option>
                <Option value="NY">New York</Option>
                <Option value="NC">North Carolina</Option>
                <Option value="ND">North Dakota</Option>
                <Option value="OH">Ohio</Option>
                <Option value="OK">Oklahoma</Option>
                <Option value="OR">Oregon</Option>
                <Option value="PA">Pennsylvania</Option>
                <Option value="RI">Rhode Island</Option>
                <Option value="SC">South Carolina</Option>
                <Option value="SD">South Dakota</Option>
                <Option value="TN">Tennessee</Option>
                <Option value="TX">Texas</Option>
                <Option value="UT">Utah</Option>
                <Option value="VT">Vermont</Option>
                <Option value="VA">Virginia</Option>
                <Option value="WA">Washington</Option>
                <Option value="WV">West Virginia</Option>
                <Option value="WI">Wisconsin</Option>
                <Option value="WY">Wyoming</Option>
              </Select>
            </Form.Item>

          </Input.Group>
        </Form.Item>


        <Form.Item
          name="password"
          label="Password"
          rules={[
            { min: 6, message: 'Password must be minimum 5 characters.' },
            {
              required: true,
              // message: 'Please input your password!',
              min: 6
            },
          ]}
          hasFeedback
        >
          <Input.Password style={{ width: 320}} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            { min: 6, message: 'Password must be minimum 5 characters.' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password style={{ width: 320}}/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};



export default UserSignUpView;