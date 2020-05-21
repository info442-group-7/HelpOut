import React, { Component } from "react";
import { Carousel } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import { Button } from "antd"
import SuggestedTasksCard from "./SuggestedTasksCardView"
import { Card, Col, Row } from 'antd';
import { styled } from '@material-ui/core/styles';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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


class Test extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
        this.state = { clicked: true , dog: "fido", counter: 0, counterEnd: 3, total: [0, 1, 2, 3, 4], fruits: ["Banana", "Orange", "Lemon", "Apple", "Mango", "Pear", "Grapes", "Lime", "Persimmon", "Tomato", "Cucumber", "Watermelon"] };

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
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let start = 0;
        let end = 4;
        let fruitsize = this.state.fruits.length/4;
        console.log(fruitsize)
        let fruitArray = [...new Array(fruitsize)]
    
        return (
            <div>
         
                <div style={{marginLeft:'22vmin'}}>

                <Carousel ref={node => (this.carousel = node)} {...props}>
                   
                {fruitArray.map((value) =>
                                    <div>
                                    <div className="site-card-wrapper">
                                            <Row gutter={16} >
                                                {this.state.fruits.slice(start, end).map((value) =>
                                                    <Col span={5.5} key={value}>
                                                        <Card className="cardStyle" style={{ width: "36vmin", height: "34vh", boxShadow: "0 8px 6px -6px #aaaaaa", margin: "5%", lineHeight: "2vmin" }}>
                        <h5 className="cardTitle">Getting groceries for gramma</h5>
                        <p cclassName="cardDescription"><br />Lorem ipsum dolor sit amet, consectetur adipis0ing elit, sed do eiusmod tempor
                            incididunt ut labore </p>
                        <p className="cardRequested">Made 10 days ago</p>
                        <div className="buttons" ><div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MoreButton size="small" a rel="noopener noreferrer" href="/"> Edit </MoreButton>
                        <MyButton size="small" onClick={this.onClick} >Delete</MyButton>
            </div> </div> {value}
                    </Card >
                                                    </Col>)}
                                            </Row>
                                            {start = start + 4}
                                            {end = end + 4}
                                        </div>
                                    </div>
                                    
                                    )
                                    
                                    }
                 
                </Carousel>
                           


               
                </div>
                <div style={{display:'flex', justifyContent: 'center'}}>
                            <Button size="large" icon={<LeftOutlined />}  onClick={this.previous}></Button>

<Button size="large" icon={<RightOutlined />}  onClick={this.next}></Button>
                                </div>
            </div>
        );
    }
}
export default Test;