import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Card } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;



const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 52px',
    margin: 4,
});

const DoneButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 40px',
    marginBottom: '25px',
    margin: 4,
});

const MoreButton = styled(Button)({
    background: 'linear-gradient(45deg, #585350 30%, #8D8987 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 60px',
    margin: 4,
});

class YourRequestsCardView extends Component {

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
            <div>
                <MoreButton size="small">
                    More ...
        </MoreButton>
                <MyButton size="small" onClick={this.onClick} >
                    Give up ...
        </MyButton>
            </div>
        )

        if (this.state.clicked) {
            return (
                <div>
                    <Card title="Get groceries for gramma" style={{ width: 300 }}>
                        <p>A description of the task goes here ................
                        ...................................................
                        here...............................................
      </p>
                        <p>Requester</p>
                        <div style={{display:"flex", justifyContent: "center"}}><Button type="primary" style={{
                            background: 'linear-gradient(45deg, #0059ff 30%, #0088ff 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            height: 48,
                            padding: '0 40px',
                            marginBottom: '25px',
                            margin: 4,
                        }}
                        > Accept </Button></div>
                    </Card>



                </div>
            );
        }
        else {
            return null;
        }
    }

}

export default YourRequestsCardView;


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





