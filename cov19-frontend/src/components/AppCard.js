import React, {Component} from 'react'
import {Table, Card, Button} from 'react-bootstrap'

export default class AppCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td><strong>{this.props.metricTitle}</strong></td>
                                    <td>{this.props.value}</td>
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
