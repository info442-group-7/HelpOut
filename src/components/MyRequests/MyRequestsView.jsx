import React, { Component } from 'react';
import MyRequestsCardView from "./MyRequestsCardView";
import { Row, Col } from 'antd';
import { Button } from 'antd';


class MyRequestsView extends React.Component {

    constructor() {
        super()
        this.state = { dog: "fido", counter: 5, total: [0, 1, 2, 3, 4] };
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
            <div>
                <div className="headerDiv"><h1 className="cardHeader">Claimed Tasks</h1></div>
                <div style={{marginLeft:"17vmin"}}>
                <Row gutter={{ sm: 2, lg: 48 }} justify="start" >
                    {this.state.total.map((value) =>
                        <Col className="gutter-row" span={5} key={value}>
                            <MyRequestsCardView />
                        </Col>)}
                </Row>
                </div>
            </div>
        );
    }
}
export default MyRequestsView;
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