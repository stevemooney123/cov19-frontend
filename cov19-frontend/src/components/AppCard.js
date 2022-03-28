import React, {Component} from 'react'
import {Table, Card, Button, Col} from 'react-bootstrap'

export default class AppCard extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.data[0].title}</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover>
                                <tbody>

                                    {
                                        this.props.data.map((item, i) => (
                                            <tr>
                                            <td key={item.key + i}>{item.key}</td>
                                                <td key={i}>{item.value}</td>
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
