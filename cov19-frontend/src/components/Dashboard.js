import React, {Component} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import AppCard from './AppCard'
import axios from 'axios'
import configData from '../config/config.json'

export default class Dashboard extends Component {

    state = {
        metrics: [],
        title: ""
    }

    componentDidMount() {
        axios.get(configData.BASE_URL + `last7?areaType=nation&areaName=Northern Ireland&metric=dailyCases&metricName=newCasesByPublishDate&page=11`)
            .then(res => {
                const metrics = res.data;

                for (const [key, value] of Object.entries(metrics)) {
                    const obj = {
                        key: "",
                        value: 0,
                        title: ""
                    }

                    const title = "Cases";
                    this.setState({title: title});
                    const resultKey = key.replace(/([A-Z])/g, " $1");
                    const finalResultKey = resultKey.charAt(0).toUpperCase() + resultKey.slice(1);


                    obj.key = finalResultKey;
                    obj.value = value;

                    this.state.metrics.push(obj);

                }


                this.setState({metrics: this.state.metrics});

            })
    }

    render() {
        return (
            <div>

                <Container>
                    <Row>

                        <span>
                                <Col md={3}> <AppCard title={this.state.title} data={this.state.metrics}/></Col>
                            </span>

                    </Row>

                </Container>


            </div>

        )
    }
}
