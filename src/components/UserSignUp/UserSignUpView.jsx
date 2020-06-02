import { Form, Input, Select, Tooltip, Button } from 'antd';
import React, { Component } from 'react';
import firebase from "../../FirebaseUtil";
const { Option } = Select;

const UserSignUpView = () => {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const authUserResponse = await firebase.app().auth().createUserWithEmailAndPassword(values.email, values.password)
    console.log(authUserResponse)
   const newUserSnapshot = await firebase.database().ref('USER/' + authUserResponse.user.uid).set({  //reference to collection 
      // username: name,
      email: values.email
      // profile_picture : imageUrl
    });
    console.log(newUserSnapshot.val())
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Email">
        <Form.Item
          name="email"
          noStyle
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" type="email"/>
        </Form.Item>
        <Tooltip title="Useful information">
          <a href="#API" style={{ margin: '0 8px' }}>
            Need Help?
          </a>
        </Tooltip>
      </Form.Item>
      <Form.Item label="Password">
        <Form.Item
          name="password"
          noStyle
          rules={[{ required: true, message: 'Password is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" type="password"/>
        </Form.Item>
        <Tooltip title="Useful information">
          <a href="#API" style={{ margin: '0 8px' }}>
            Need Help?
          </a>
        </Tooltip>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '50%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserSignUpView;