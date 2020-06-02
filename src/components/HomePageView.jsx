import React from 'react';
import { Button } from 'antd';
import '../App.css'
import '../test.css';


const HomePageView = (props) => {
    return (
        <div className="homepageBody">
            <div className="greeting">
                <h1 className="homePageHeader">Good Morning, Alex!</h1>
                <div id="homepage-descrip">
                    <p>Our community completed <b>250 tasks </b>yesterday to help the people in need.</p>
                    <p>You have helped <b>20 people </b>so far. Would you like to make it <b>21 </b>today?</p>
                </div>
            </div>
            <div className='options'>
                <div className='needHelp'>
                    <h1 className='homePageSubH'>I want to help out...</h1>
                    <div className="homePageButtons" style={{ display: 'flex' }}>
                        <Button className="bar-button" type="primary" style={{
                            fontSize: '3vmin',
                            marginTop: '1vmin',
                            paddingBottom: '6vmin',
                            paddingTop: '1vmin',
                            width: '110%',
                            textAlign: 'center'
                        }}>Claimed tasks </Button>

                        <Button className="bar-button" type="primary" style={{
                            fontSize: '3vmin',
                            marginTop: '1vmin',
                            paddingBottom: '6vmin',
                            paddingTop: '1vmin',
                            width: '110%',
                            textAlign: 'center'
                        }}>Find more tasks</Button>
                    </div>
                </div>
                <div className='helpOthers'>
                    <h1 className='homePageSubH'>I need some help...</h1>
                    <div className="homePageRequestButtons">
                    <div className="homePageButtons" style={{ display: 'flex' }}>
                            <Button className="bar-button" type="primary" style={{
                                fontSize: '3vmin',
                                marginTop: '1vmin',
                                marginRight: '1vmin',
                                paddingBottom: '6vmin',
                                paddingTop: '1vmin',
                                width: '110%',
                                textAlign: 'center'
                            }}>My requests </Button>
                        <Button className="bar-button" type="primary" style={{
                            fontSize: '3vmin',
                            marginTop: '1vmin',
                            paddingBottom: '6vmin',
                            paddingTop: '1vmin',
                            width: '110%',
                            paddingRight: '3vmin',
                            textAlign: 'center'
                        }}>Resources</Button>
</div>
                        <Button className="bar-button" type="primary" style={{
                            marginLeft: '3vmin',
                            fontSize: '3vmin',
                            borderColor: 'gray',
                            backgroundColor: 'gray',
                            marginTop: '1vmin',
                            paddingBottom: '6vmin',
                            paddingTop: '1vmin',
                            paddingLeft: '2.5vmin',
                            paddingRight: '2.5vmin',
                            textAlign: 'center'
                        }}>My requests </Button>
                        </div>
                    
                </div>

            </div>
        </div>
    )
}

export default HomePageView;
