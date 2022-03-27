import React, {Component} from 'react'
import {Table, Card, Button, Col} from 'react-bootstrap'

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

                                {
                                    this.props.data.map((item, i) => (
                                        <tr key={i}>
                                            <td><strong>{item.key}</strong></td>
                                            <td>{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
