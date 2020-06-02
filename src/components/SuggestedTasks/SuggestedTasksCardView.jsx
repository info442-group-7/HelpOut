import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import '../../App.css'
import { Card } from 'antd';

const accept = <span>Claim Task</span>;

class SuggestedTasksCardView extends Component {

    constructor(props) {
        super(props);
        this.state = { clicked: true };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }

    onClick() {
        this.setState({
            clicked: false
        });
    }
    handleClick() {
        this.setState(previousState => {
            return {
                succeed: !previousState.succeed
            };
        });
    }

    onClick() {
        console.log('clikced done!!');
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
            <div className='claimedText'>Claimed!</div>
        )
        const notsucceed = (
            <div>
                <Tooltip placement="bottom" title={accept}>
                    <Button>
                        <PlusCircleTwoTone style={{ fontSize: '40px' }} />
                    </Button>
                </Tooltip>
            </div>
        )

        return (
            <div>
                <Card className="cardStyle" style={{ width: '350px', height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column' }}>
                    <h5 className="cardTitle">Getting groceries for gramma</h5>
                    <hr className="cardLineBreak"></hr>
                    <div className="cardDesDiv">
                        <p className="cardDescription">Lorefsdfsdf dfsdfsdf fsdfsdf fsdfsdf fsdfsdf fsdfdsfds dsfdsfds fdsfsdfsd fsdfdsm ipsum dolor sit amet, consectetur adipis0ing elit, sed do eiusmod tempor
                            incididunt ut labore </p>
                    </div>
                    <p className="cardRequester">Requester's name</p>
                    <p className="cardRequested">Created 10 days ago</p>
                    <div className="suggestedTaskButton">
                        <div onClick={this.handleClick.bind(this)}> {this.state.succeed ? succeed : notsucceed} </div>
                    </div>
                </Card>
            </div>
        );
    }

}

// A single task
class SuggestedTask extends Component {

    render () {
        let task = this.props.task;
    }


}




export default SuggestedTasksCardView;




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





