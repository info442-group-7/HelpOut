import React, { Component } from 'react';
import SuggestedTasksCardView from "./SuggestedTasksCardView";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

import { Row, Col } from 'antd';
import { Card } from 'antd';

import { Button } from 'antd';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const MoreButton = styled(Button)({

  margin: 40,
  padding: 20.

});

const style = { background: '#0092ff', padding: '8px 0' };

class SuggestedTasksView extends React.Component {

  constructor() {
    super()
    this.state = { dog: "fido", counter: 5, total: [0, 1, 2, 3, 4, 5, 6, 7] };
    this.onClick = this.onClick.bind(this);
  }

/*  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

*/

  onClick() {
    this.setState({
      counter: this.state.counter + 1,
      total: this.state.total.concat([...new Array(5)]),

    });

  }

  render() {
    console.log(this.state.counter)
    console.log(this.state.total);
    let testing = this.state.dog;

    return (

      <div >
        <div className = "headerDiv"><h1 className = "cardHeader">Tasks in your area</h1></div>

      


     
    <Row gutter={{sm: 2, lg: 48}}  justify="center">
      {this.state.total.map((value) =>
      <Col className="gutter-row" flex="" span={5}key={value}>

        <SuggestedTasksCardView />
      </Col>)}
    </Row>
    




        <div style={{ display: "flex", justifyContent: "center", padding: "2%" }}>
          <Button type="primary"  style={{
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

        <Grid>

        </Grid>
        
      </div >
    );
  }
}
const Greeting = props => <h1>{props.greeting}</h1>;


export default SuggestedTasksView;
/*
<div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        */

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