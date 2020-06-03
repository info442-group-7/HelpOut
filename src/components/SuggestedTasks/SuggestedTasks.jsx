import React, { Component } from 'react';
import SuggestedTasksCardView from "./SuggestedTasksCardView";
import '../../App.css'
import { Button } from 'antd';
import { InfoCircleTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';


class SuggestedTasksView extends React.Component {

  constructor() {
    super()
    this.state = { dog: "fido", counter: 5, total: [0, 1, 2, 3], value: '' };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {
    this.scrollToBottom();
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

  render() {
    return (
      <div style={{ }} >
        <div className="headerDiv"><h1 className="cardHeader">Tasks in My Area</h1></div>
        
          {/* {this.state.total.map((value) => */}
\                <SuggestedTasksCardView />
          {/* )} */}
        

        <div style={{ display: "flex", justifyContent: "center", padding: "2%" }}>
          <Button type="primary" onClick={this.onClick} style={{
            backgroundColor: "#dedede",
            borderColor: "black",
            color: "black",
            width: "250 px",
            height: "50px",
            margin: "0 auto",
            padding: "40",
            display: "table - cell",
            verticalAlign: "middle",
          }}
            ghost> MORE </Button>
          <br></br>
        </div>
        <div className="zipCode">
        <form onSubmit={this.handleSubmit}>
        <label>
        My zip code is: 
          <input className="zipCodeInput" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
      </form>
        </div>
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