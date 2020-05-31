import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Card } from 'antd';
import '../../App.css'
import { InfoCircleTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';

const abandon = <span>Give up...</span>;
const complete = <span>Done!</span>;
const more = <span>More...</span>;

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


        const Results = () => (
            <Tooltip placement="bottom" title={abandon}>
                <Button onClick={this.onClick} ><CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} /></Button>
            </Tooltip>
        )
        const succeed = (
            <div>(253) 310-3409<br></br></div>
        )
        const notsucceed = (
            <div>
                <Tooltip placement="bottom" title={more}>
                    <Button>
                        <InfoCircleTwoTone style={{ fontSize: '40px' }} />
                    </Button>
                </Tooltip>
                <Tooltip placement="bottom" title={complete}>
                    <Button onClick={this.onClick}>
                        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '40px' }} />
                    </Button> 
                </Tooltip>
            </div>
        )

        if (this.state.clicked) {
            return (
                <div style={{ marginRight: '50%' }}>
                    <Card className="cardStyle" style={{ width: '350px', height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column' }}>
                        <h5 className="cardTitle">Getting groceries for gramma</h5>
                        <hr className="cardLineBreak"></hr>
                        <div className="cardDesDiv">
                        <p className="cardDescription">Lorefsdfsdf dfsdfsdf fsdfsdf fsdfsdf fsdfsdf fsdfdsfds dsfdsfds fdsfsdfsd fsdfdsm ipsum dolor sit amet, consectetur adipis0ing elit, sed do eiusmod tempor
                            incididunt ut labore </p>
                            </div>
                        <p className="cardRequester">Requester's name</p>
                        <p className="cardRequested">Accepted 10 days ago</p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                            <div> {this.state.succeed ? null : <Results />}</div>
                            <div onClick={this.handleClick.bind(this)}> {this.state.succeed ? succeed : notsucceed} </div>
                        </div>
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

//  <Grid container justify="center">
//<DoneButton size="small" onClick={this.onClick} >Done!</DoneButton>

//</Grid>

 ///   <MoreButton size="small"> More... </MoreButton>
 ///                <MyButton size="small" onClick={this.onClick} >Give up...</MyButton>



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





