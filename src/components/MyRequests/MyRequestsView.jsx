import React, { Component } from 'react';
import MyRequestsCardView from "./MyRequestsCardView";
import MyOldRequests from './MyOldRequests'
import { Button, Modal} from 'antd';
import { useHistory, NavLink } from 'react-router-dom';



class MyRequestsView extends React.Component {

  constructor() {
    super()
    this.state = { dog: "fido", counter: 5, total: [0, 1, 2], old: false };
    this.onClick = this.onClick.bind(this);
    this.handleClick.bind(this);
    this.doneRedirect = this.doneRedirect.bind(this);
  }
  handleClick() {
    this.setState(previousState => {
      return {
        succeed: !previousState.succeed
      };
    });
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

    // modal informing user that their submission was successful, onclick will redirect them
    success() {

      Modal.success({
        okText:"Done",
        title: 'You have successfully created an account!',
        // content: 'View your requests to see your new entry.',
        onOk() {
          this.doneRedirect();
        }
      });
    }

    // redirects/reroutes to request page
    doneRedirect () {
      let history = useHistory();
      history.push("/HomePageView");
    };


  render() {
    const succeed = (
      this.state.total.map((value) =>
          <MyOldRequests />
        )
    )
    const notsucceed = (
      <div>

        <Button onClick={this.handleClick.bind(this)} shape="round" type="primary" ghost style={{
          marginLeft: '5vmin', alignItems: "center",
          marginTop: '16vmin', paddingTop: '1vmin', paddingBottom: "3.2vmin"
        }}>Show past requests </Button>
      </div>
    )

    return (
      <div>
        <div className="headerDiv">
          <h1 className="cardHeader">My Requests</h1>
          <div style={{ display: 'flex' }}>
            
          <NavLink to="/CreateRequest">
            <Button type="primary" style={{
              marginLeft: '2vmin',
              fontSize: '3vmin', marginTop: '4vmin', paddingBottom: '6vmin', paddingTop: '1', size: 'large', paddingLeft: '6vmin', paddingRight: '8vmin', textAlign: 'center'
            }}>Create Request </Button>
            </NavLink>
          </div>
        </div>
        <div style={{ }}>
        
                <MyRequestsCardView />
          
            {/* {this.state.succeed ? succeed : notsucceed} */}
     

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