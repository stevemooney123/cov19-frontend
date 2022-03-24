import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import AppCard from './AppCard'

export default class Dashboard extends Component {
  render() {
    return (
        <>

<Container>
<div>Dashboard</div>
  <Row>
    <Col md={3}> <AppCard title="Testing"/></Col>
    <Col md={3}> <AppCard title="Inpatients"/></Col>
    <Col md={3}> <AppCard title="Deaths"/></Col>
    <Col md={3}> <AppCard title="Occupancy"/></Col>
    <Col md={3}> <AppCard title="Outbreaks"/></Col>
  </Row>
  
</Container>
             
    
        </>
 
    )
  }
}
