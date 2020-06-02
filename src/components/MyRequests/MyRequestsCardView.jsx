import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import '../../App.css'
import { EditTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';


const deletetask = <span>Delete</span>;
const edit = <span>Edit</span>;

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
            <Tooltip placement="bottom" title={deletetask}>
                <Button onClick={this.onClick} ><CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} /></Button>
            </Tooltip>
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
                        <Tooltip placement="bottom" title={edit}>
                    <Button a rel="noopener noreferrer" href="/">
                        <EditTwoTone style={{ fontSize: '40px' }} /> >
                    </Button> 
                </Tooltip>
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





