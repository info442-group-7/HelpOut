import React, { Component } from 'react';
import './AdditionalResources.css';
import { Button } from 'antd';

const AdditionalResourcesView = (props) => {

    return (
        <div className="additionalResourcesBody">
            <div className="heading">
                <h1 className="additionalResourcesHeader">Additional Resources</h1>
                <div id="additionalResources-descrip">
                    <p>If you're seeking additional information about the crisis, please navigate to the external sources below.</p>
                </div>
            </div>
        
        <div className="options">
            <div className="buttons" style={{ display: "flex"}}>
                <Button className="bar-button" type="primary" style={{
                    fontSize: '3vmin',
                    marginTop: '1vmin',
                    paddingBottom: '6vmin',
                    paddingTop: '2vmin',
                    width: '110%',
                    textAlign: 'center',
                    borderRadius: '5px',
                    fontWeight: 'bolder'
                }} a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO Resources 
                </Button>
                <Button className="bar-button" type="primary" style={{
                    fontSize: '3vmin',
                    marginTop: '1vmin',
                    paddingBottom: '6vmin',
                    paddingTop: '2vmin',
                    width: '110%',
                    textAlign: 'center',
                    borderRadius: '5px',
                    fontWeight: 'bolder'
                }} a href="https://www.usda.gov/coronavirus"> USDA Resources
                </Button>
                <Button className="bar-button" type="primary" style={{
                    fontSize: '3vmin',
                    marginTop: '1vmin',
                    paddingBottom: '6vmin',
                    paddingTop: '2vmin',
                    width: '110%',
                    textAlign: 'center',
                    borderRadius: '5px',
                    fontWeight: 'bolder'
                }} a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"> CDC Resources
                </Button>
                <Button className="bar-button" type="primary" style={{
                    fontSize: '3vmin',
                    marginTop: '1vmin',
                    paddingBottom: '6vmin',
                    paddingTop: '2vmin',
                    width: '110%',
                    textAlign: 'center',
                    borderRadius: '5px',
                    fontWeight: 'bolder'
                }} a href="https://kingcounty.gov/depts/health/communicable-diseases/disease-control/novel-coronavirus.aspx"> King County Resources
                </Button>
            </div>
        </div>
        </div>
    )
}

export default AdditionalResourcesView;