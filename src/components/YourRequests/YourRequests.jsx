import React, { Component } from 'react';
import YourRequestsCardView from "./YourRequestsCardView";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';






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

class App extends React.Component {

  constructor() {
    super()
    this.state = { dog: "fido", counter: 3, total: [0, 1, 2, 3] };
    this.onClick = this.onClick.bind(this);
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

    });
    let first = this.state.total[this.state.total.length - 1] + 1
    this.setState(prevState => ({
      total: [...prevState.total, first],
    }))
    this.setState(prevState => ({
      total: [...prevState.total, first + 1],
    }))
    this.setState(prevState => ({
      total: [...prevState.total, first + 2],
    }))
    this.setState(prevState => ({
      total: [...prevState.total, first + 3],
    }))
  }

  render() {
    const greeting = 'Welycome to React';
    console.log(this.state.counter)
    console.log(this.state.total);
    let testing = this.state.dog;

    return (

      <div>
        <div>

        </div>
        <h1>Tasks</h1>

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
        <Grid container justify="center">
          <MoreButton variant="outlined" size="large" onClick={this.onClick}>More</MoreButton>
          

        </Grid>
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}
const Greeting = props => <h1>{props.greeting}</h1>;


export default 