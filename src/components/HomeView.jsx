import React from 'react';
import { Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const HomeView = (props) => {
    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '50px', textAlign: "center"}}>Home Page ;D </h1>

            <div style={{display:'flex', justifyContent: 'center'}}>
                    <Link to ="/login">
                    <Button className="bar-button" type="primary" a rel="noopener noreferrer" href="/HomePageView" style={{
                            fontSize:'2vmin',
                        
                            size:'large', 
                    
                            textAlign:'center'}} >Sign in </Button>
                    </Link>

             </div>


        </div>
        // mountNode,
        )
    }

    export default HomeView;
