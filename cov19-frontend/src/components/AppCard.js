import React, {Component} from 'react'
import {Table, Card, Button, Col} from 'react-bootstrap'

export default class AppCard extends Component {
    render() {
        return (

            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.data[0].title}</Card.Title>
                        <Card.Text>

                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td>{this.props.data[0].key}</td>
                                    <td>{this.props.data[0].value}</td>
                                </tr>
                                <tr>
                                    <td>{this.props.data[1].key}</td>
                                    <td>{this.props.data[1].value}</td>
                                </tr>
                                <tr>
                                    <td>{this.props.data[2].key}</td>
                                    <td>{this.props.data[2].value}</td>
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
