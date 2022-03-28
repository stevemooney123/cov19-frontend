import React, {Component} from 'react'
import {Table, Card, Button, Col} from 'react-bootstrap'

export default class AppCard extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.data.title}</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td>{this.props.data.key}</td>
                                    <td>{this.props.data.value}</td>
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
