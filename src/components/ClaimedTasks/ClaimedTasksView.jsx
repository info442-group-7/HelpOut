import React, { Component } from 'react';
import ClaimedTasksCardView from "./ClaimedTasksCardView";
import { Button } from 'antd';

import '../../App.css'

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
  */

  onClick() {
    this.setState({
      counter: this.state.counter + 1,
      total: this.state.total.concat([...new Array(5)]),
    });
  }

  updateCards() {
    this.setState({
      cards: this.state.cards + 1
    });
  }

  render() {
    return (
      <div style={{  }} >
        <div className="headerDiv"><h1 className="cardHeader">Claimed Tasks</h1>
        <p className="disclaimer">Below are your claimed tasks. If there are no tasks below, it means you have not yet claimed a request. Click on the button below to find new tasks!</p>
        
        </div>
                <ClaimedTasksCardView />
        <div style={{ display: 'flex' }}>
            <Button type="primary" style={{
              marginLeft: '12vw',
              fontSize: '30px', marginTop: '50px', paddingBottom: '50px', paddingTop: '18px', size: 'large', paddingLeft: '30px', paddingRight: '30px', textAlign: 'center'
            }}a rel="noopener noreferrer" href="/SuggestedTasks">Find new tasks </Button></div>
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