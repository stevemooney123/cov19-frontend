import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import AppCard from './AppCard'
import axios from 'axios'

export default class Dashboard extends Component {

  state = {
    metrics: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/covid?areaType=nation&areaName=Northern Ireland&metric=newCases&metricName=newCasesByPublishDate&page=1`)
      .then(res => {
        const metrics = res.data;
        this.setState({ metrics });
 
      })
  }

  render() {
    return (
        <div>

<Container>
<div>{this.state.metrics.newCases}</div>

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
