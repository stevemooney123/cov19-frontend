import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import AppCard from './AppCard'
import axios from 'axios'
import configData from '../config/config.json'
export default class Dashboard extends Component {

  state = {
    metrics: [],
    lastSevenDays: 0,
    totalCases: 0
  }

  componentDidMount() {
    axios.get(configData.BASE_URL + `areaType=nation&areaName=Northern Ireland&page=1`)
      .then(res => {
        const metrics = res.data;
       
        this.setState({ metrics: res.data[0] });
        const sum = [metrics[0].newCases, metrics[1].newCases, metrics[2].newCases, metrics[3].newCases, metrics[4].newCases, metrics[5].newCases, metrics[6].newCases].reduce((partialSum, a) => partialSum + a, 0);
        this.setState({lastSevenDays: sum})

        var count = 0;
   for(var i=0, n=metrics.length; i < n; i++) 
   { 
      count += metrics[i].newCases; 
   }
        this.setState({totalCases: count})
      })
  }

  render() {
    return (
        <div>

<Container>
<div>{this.state.lastSevenDays}</div>
<div>{this.state.totalCases}</div>
  <Row >
    <Col md={3}> <AppCard title="Testing" data={this.state.metrics.newCases}/></Col>
    <Col md={3}> <AppCard title="Inpatients" data={this.state.metrics.newCases}/></Col>
    <Col md={3}> <AppCard title="Deaths" data={this.state.metrics.newCases}/></Col>
    <Col md={3}> <AppCard title="Occupancy" data={this.state.metrics.newCases}/></Col>
    <Col md={3}> <AppCard title="Outbreaks" data={this.state.metrics.newCases}/></Col>
  </Row>
  
</Container>
             
    
        </div>
 
    )
  }
}
