import React, { Component, useState } from 'react';
import SuggestedTasksCardView from "./SuggestedTasksCardView";
import '../../App.css'
import { Button, Form, Input, Radio } from 'antd';
import { InfoCircleTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import firebase from 'firebase/app';
import 'firebase/database'; 
import './SuggestedTasks.css'


const { Search } = Input;

class SuggestedTasksView extends React.Component {
  

  constructor() {
    super()
    this.state = { dog: "fido", counter: 5, total: [0, 1, 2, 3], value: '', userZip: '', currentUser: '' };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateZip = this.updateZip.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {
    this.scrollToBottom();

    firebase.auth().onAuthStateChanged(user => {
      var givenUserID;
      if (user) {
          givenUserID = user.uid;
          this.setState({currentUser: givenUserID})
          console.log(this.state.currentUser)

          // if not set by search function
          if (this.state.userZip == '') {
            this.usersRef = firebase.database().ref('USER').child(this.state.currentUser);
            this.usersRef.on('value', (snapshot) => {
                let value = snapshot.val();
                this.setState({userZip: value.USER_ZIP_CODE})
                console.log('userZip in componentdidmount is ' + this.state.userZip)
            })
          }
      } else{
          console.log('not logged in')
          this.setState({currentUser:null})
      }
  });
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  onClick() {
    this.setState({
      counter: this.state.counter + 1,
      total: this.state.total.concat([...new Array(4)]),

    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  updateZip(value) {
    console.log('new zipcode entered is ' + value)
    this.setState({userZip: value})
  }

  render() {
    return (
      <div style={{ }} >
        <div className="headerDiv"><h1 className="cardHeader">Tasks in My Area ({this.state.userZip})</h1>
        <div 
          id="zipcode-search">
          <Search
            style={{float:'center'}}
            placeholder={this.state.userZip}
            enterButton="Search"
            size="large"
            onSearch={value => this.updateZip(value)}
          />
        </div>
        
        </div>

        
          {/* {this.state.total.map((value) => */}
\                <SuggestedTasksCardView  userZip={this.state.userZip} currentUser={this.state.currentUser} />
          {/* )} */}

        {/* <form onSubmit={this.handleSubmit}>
        <label>
        My zip code is: 
          <input className="zipCodeInput" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
      </form> */}
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div >
    );
  }
}
const Greeting = props => <h1>{props.greeting}</h1>;



export default SuggestedTasksView;

//     <MoreButton variant="outlined" size="large" onClick={this.onClick}>More</MoreButton>

// onClick() {
//  this.setState({
//    counter: this.state.counter + 1,

//  });
//  let first = this.state.total[this.state.total.length - 1] + 1
//  this.setState(prevState => ({
//    total: [...prevState.total, first],
//  }))
//  this.setState(prevState => ({
//   total: [...prevState.total, first + 1],
//  }))
//  this.setState(prevState => ({
//    total: [...prevState.total, first + 2],
//  }))
//  this.setState(prevState => ({
//    total: [...prevState.total, first + 3],
//  }))
//}





/*
<Grid container className={useStyles.root} spacing={2}>
<Grid item xs={12}>
  <Grid container justify="center" spacing={2}>
    {this.state.total.map((value) => (
      <Grid key={value} item>
        <YourRequestsCardView />
      </Grid>
    ))}
  </Grid>
</Grid>

</Grid>
*/