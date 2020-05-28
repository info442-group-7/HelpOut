import React, { Component } from 'react';
import ClaimedTasksCardView from "./ClaimedTasksCardView";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import '../../App.css'

import { Row, Col } from 'antd';
import { Card } from 'antd';

import { Button } from 'antd';


const style = { background: '#0092ff', padding: '8px 0' };

class ClaimedTasksView extends React.Component {

  constructor() {
    super()
    this.state = { cards: 1, dog: "fido", counter: 5, total: [0, 1, 2, 3, 4, 5] };
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
 <Row gutter={{sm: 2, lg: 48}}  justify="center">
*/

  onClick() {
    this.setState({
      counter: this.state.counter + 1,
      total: this.state.total.concat([...new Array(5)]),

    });

  }

  updateCards() {
    this.setState({
      cards:  this.state.cards + 1
    });

  
    }
  

  

  render() {
    console.log(this.state.counter)
    console.log(this.state.total);
    let testing = this.state.dog;

    const isCard = (
      <div className="col">
        <ClaimedTasksCardView />
        </div>        
    )

    const breakcard = (
      <div>
      <div className="break">
        </div>    
         
        </div>    
    )

    let cardCount = 0;

    return (

      <div style={{marginLeft:'5vw', marginRight:'7vw'}} >
        <div className = "headerDiv"><h1 className = "cardHeader">Claimed Tasks</h1></div>

       <div className="flex-grid">
      {this.state.total.map((value) =>

      <div>
      
      <div className="col">
        <ClaimedTasksCardView />
        </div> 

      </div>
      
      )}
    </div>

    <div style={{display:'flex'}}>
                <Button className="bar-button" type="primary" a rel="noopener noreferrer" href="/SuggestedTasks" style={{marginLeft:'2vmin', 
                        fontSize:'3vmin',
                        marginLeft:'18.5vmin', 
                        marginTop:'4.2vmin', 
                        paddingBottom: '5.2vmin', 
                        paddingTop:'1.4vmin', 
                        size:'large', 
                        paddingLeft:'6vmin', 
                        paddingRight: '8vmin', 
                        textAlign:'center'}} >Find more tasks </Button>
                        </div>


        </div>
    );
  }
}
export default ClaimedTasksView;
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