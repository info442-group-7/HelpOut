import { Form, Input, InputNumber, Modal, Button } from 'antd';
import React, { Component } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Redirect, Link, useHistory } from 'react-router-dom';
// import firebase from 'firebase/app';

const { confirm } = Modal;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// validation messages for form
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

// creates the request view
const CreateNewRequestView = () => {

  const history = useHistory();

  // redirects/reroutes to request page
  const doneRedirect = function() {
    history.push("/MyRequests");
  };

  // on successful submission, creates modal 
  const onFinish = values => {
    console.log('Success:', values);
    // let userTest = firebase.database().ref("USER");
    // userTest.push({user_city: "TESTING"})

    // somehow send to database here!

    success();
  };

  // if error connecting to DB
  const onFinishFailed = errorInfo => {
    // add in error message
    // connect this state to db (promise, return)
    console.log('Failed:', errorInfo);
  };

  // modal informing user that their submission was successful, onclick will redirect them
  function success() {

    Modal.success({
      okText:"Done",
      title: 'Submit successful!',
      // content: 'View your requests to see your new entry.',
      onOk() {
        console.log('hi this is redirect to request')
        doneRedirect();
      }
    });
  }

  // renders actual page & form
  return (
    <div>
      <h2>Create a new request</h2>
      <Form id="create-request" {...layout} style={{width:800}} name="nest-messages" onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="I need help with " rules={[{ required: true, message:'Your request title is required!' }]}>
          <Input style={{width: 500}}/>
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Could you give additional details?">
          <Input.TextArea style={{width: 500}} />
        </Form.Item>
        {/* <Form.Item name={['user', 'age']} label="This task can be categorized as" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item> */}
        <Form.Item name={['user', 'address']} label="My address is" rules={[{ required: true, message:'Address is required!'}]}>
          <Input style={{ width: 500 }} />
        </Form.Item>
        <Form.Item name={['user', 'zip']} label="Zipcode" maxLength='5' rules={[{ required: true }]}>
          <Input style={{ width: 100, textAlign: 'center' }} maxLength="5" placeholder="12345" />

        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateNewRequestView;
