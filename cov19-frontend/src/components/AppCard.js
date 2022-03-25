import React, { Component } from 'react'
import { Table, Card, Button } from 'react-bootstrap'

export default class AppCard extends Component {
  render() {
    return (
        <div>
             
      <Card style={{ width: '18rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    <Table striped bordered hover>
  <tbody>
    <tr>
      <td>1</td>
      <td>{this.props.data}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
    </tr>
  </tbody>
</Table>
    </Card.Text>
  </Card.Body>
</Card>
        </div>
 
    )
  }
}
