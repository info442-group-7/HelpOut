import { Form, Input, InputNumber, Modal, Button } from 'antd';
import React, { Component, useState, useEffect } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Redirect, Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

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


  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {

      var currentUserId;

      if (user) {
          console.log('This is the user: ', user.uid)
          currentUserId = user.uid;
          setID(currentUserId);
        // User is signed in.
        firebase.database().ref("USER").child(currentUserId).once('value', function(snapshot){
          let user = snapshot.val();
          setFName(user.USER_FNAME);
          setLName(user.USER_LNAME);
          setPhoneNumber(user.USER_PHONE_NUMBER);
          // userTest = user;
          // setRequester(user);
          // console.log(user)
          // console.log('user test is ' + userTest)
          // console.log ('user is ' + requesterUser.USER_FNAME)
          // console.log ('user is ' + user.USER_FNAME)
          // console.log('user type is + ' + user.type)
          // console.log()
    
        });

      } else {
        // No user is signed in.
        console.log("user is not logged in!")
        currentUserId = '';
      }
  });


  })

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const history = useHistory();

  // redirects/reroutes to request page
  const doneRedirect = function() {
    history.push("/MyRequests");
  };

  const [userID, setID] = useState('');


  // on successful submission, creates modal 
  const onFinish = values => {
    console.log('Success:', values);
    console.log(values.zip)
    // let userTest = firebase.database().ref("USER");
    // userTest.push({user_city: "TESTING"})  

// src: https://stackoverflow.com/questions/38768576/in-firebase-when-using-push-how-do-i-get-the-unique-id-and-store-in-my-databas





    let requesterRef = firebase.database().ref("REQUESTER");
      requesterRef.push({
        REQUESTER_ZIP_CODE: values.zip,
        REQUESTER_FNAME: firstName,
        REQUESTER_LNAME: lastName,
        REQUESTER_PHONE_NUMBER: phoneNumber,
        REQUESTER_STREET_ADDRESS: values.address,
        REQUESTER_ID: userID

      })

    
    

    let requestRef = firebase.database().ref("REQUEST");


    var pushRef = requestRef.push();
    var key = pushRef.key;
    pushRef.set({
      REQUESTER_ID: userID, 
      REQUEST_DATE: new Date().toLocaleString(),
      REQUEST_DESCRIPTION: values.details,
      REQUEST_STATUS: "open", // to start
      // REQUEST_TIME: 'mock - add date function here',
      REQUEST_TITLE: values.title,
      REQUEST_ZIP_CODE: values.zip,
      USER_ID: '', //ONCE SOMEONe accepts, this is updated
      TASK_ID: '',
      REQUEST_ID: key 
    })

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
        doneRedirect();
      }
    });
  }


  // renders actual page & form
  return (
    <div>
      <h2 style={{fontSize: 40, fontWeight: 700}}>Create a new request</h2>
      <Form id="create-request" {...layout} style={{width:800}} name="nest-messages" onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
        <Form.Item name={['title']} label="I need help with " rules={[{ required: true, message:'Your request title is required!' }]}>
          <Input style={{width: 500}}/>
        </Form.Item>
        <Form.Item name={['details']} label="Could you give additional details?">
          <Input.TextArea style={{width: 500}} />
        </Form.Item>
        {/* <Form.Item name={['user', 'age']} label="This task can be categorized as" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item> */}
        <Form.Item name={['address']} label="My address is" rules={[{ required: true, message:'Address is required!'}]}>
          <Input style={{ width: 500 }} />
        </Form.Item>
        <Form.Item name={['zip']} label="Zipcode" maxLength='5' rules={[{ required: true }]}>
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
