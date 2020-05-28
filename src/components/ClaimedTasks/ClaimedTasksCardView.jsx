import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import '../../App.css'
import s from '../../App.css'

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  //  padding: '.4vmin 4vmin',
    //size: '5vmin',
    //fontSize: '1vh',
   // paddingLeft: '4.2vmin',
    //paddingRight: '4.2vmin'
    //maxWidth: '150%',
    //width: '100px'


    
});

const DoneButton = styled(Button)({
    background: 'linear-gradient(45deg, #1760fb 30%, #45a5df 90%)',
    color: 'white',
    //padding: '.5vmin 3vmin',
   // marginTop: '1vmin',
   // size: '5vmin',
   // fontSize: '1.4vmin'
});

const MoreButton = styled(Button)({
    background: 'linear-gradient(45deg, #0059ff 30%, #0088ff 90%)',
    color: 'white',
  //  padding: '.4vmin 4vmin',
    //size: '5vmin',
    //fontSize: '1vh',
   // paddingRight: '5vmin',
   // paddingLeft: '5vmin',
    //marginRight:'.2vmin',
    //marginLeft: '.2vmin'
//    paddingLeft: "10%"
   // width: '50%'
});

class ClaimedTasksCardView extends Component {

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
        console.log(window.innerHeight);

        console.log(window.innerWidth);

        const Results = () => (
            <Grid container justify="center">
                <DoneButton size="small" onClick={this.onClick} >Done!</DoneButton>
            </Grid>
        )
        const succeed = (
            <div>(253) 310-3409<br></br></div>
        )
        const notsucceed = (
            <div className = "buttons1">
                <MoreButton size="small"> More... </MoreButton>
                <MyButton size="small" onClick={this.onClick} >Give up...</MyButton>
                </div>
        )

        if (this.state.clicked) {
            return (
                <div style={{marginRight: '50%'}}>
                    <Card className="cardStyle" style={{ width: '350px',height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "2vmin"}}>
                        <h5 className="cardTitle">Getting groceries for gramma</h5>
                        <p cclassName="cardDescription"><br />Lorem ipsum dolor sit amet, consectetur adipis0ing elit, sed do eiusmod tempor
                            incididunt ut labore </p>
                        <p className="cardRequester">Requester's name</p>
                        <p className="cardRequested">Accepted 10 days ago</p>
                        <div className = "buttons"> <div onClick={this.handleClick.bind(this)}> {this.state.succeed ? succeed : notsucceed} </div>
                       </div><div> {this.state.succeed ? null : <Results />}</div>
                        
                       
                    </Card>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default ClaimedTasksCardView;


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





