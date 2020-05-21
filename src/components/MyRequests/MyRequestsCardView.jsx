import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import s from '../../App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    padding: '.4vmin 3vmin',
    size: '5vmin',
    fontSize: '1.4vmin'
});

const DoneButton = styled(Button)({
    background: 'linear-gradient(45deg, #1760fb 30%, #45a5df 90%)',
    color: 'white',
    padding: '.5vmin 3vmin',
    marginTop: '1vmin',
    size: '5vmin',
    fontSize: '1.4vmin'
});

const MoreButton = styled(Button)({
    background: 'linear-gradient(45deg, #0059ff 30%, #0088ff 90%)',
    color: 'white',
    padding: '.4vmin 4vmin',
    size: '5vmin',
    fontSize: '1.4vmin'
});

class MyRequestsCardView extends Component {

    constructor(props) {
        super(props);
        this.state = { clicked: true };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(previousState => {
            return {
                succeed: !previousState.succeed
            };
        });
    }

    onClick() {
        this.setState({
            clicked: false
        });
    }

    render() {
        const Results = () => (
            <Grid container justify="center">
                <DoneButton size="small" onClick={this.onClick} >Done!</DoneButton>
            </Grid>
        )
        const succeed = (
            <div>(253) 310-3409<br></br></div>
        )
        const notsucceed = (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MoreButton size="small"> Edit </MoreButton>
                <MyButton size="small" onClick={this.onClick} >Delete</MyButton>
            </div>
        )

        if (this.state.clicked) {
            return (
                <div>
                    <Card className="cardStyle" style={{ width: "36vmin", height: "34vh", boxShadow: "0 8px 6px -6px #aaaaaa", margin: "5%", lineHeight: "2vmin" }}>
                        <h5 className="cardTitle">Getting groceries for gramma</h5>
                        <p cclassName="cardDescription"><br />Lorem ipsum dolor sit amet, consectetur adipis0ing elit, sed do eiusmod tempor
                            incididunt ut labore </p>
                        <p className="cardRequested">Made 10 days ago</p>
                        <div className="buttons" ><div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MoreButton size="small" a rel="noopener noreferrer" href="/"> Edit </MoreButton>
                        <MyButton size="small" onClick={this.onClick} >Delete</MyButton>
            </div> </div>
                    </Card >
                </div >
            );
        }
        else {
            return null;
        }
    }
}

export default MyRequestsCardView;


//<Container maxWidth="xs">
//    <Cards className={useStyles.root} variant="outlined">
//        <CardContent>
//
//
//        </CardContent>
//        <CardActions>
//            <Grid
//                container
//                direction="row"
//                justify="space-between"
//                alignItems="center"
//            >
//                <div onClick={this.handleClick.bind(this)}>
//                    {this.state.succeed ? succeed : notsucceed}
 //               </div>
//

  //          </Grid>

    //    </CardActions>

      //  {this.state.succeed ? null : <Results />}
  //  </Cards>
//</Container>





