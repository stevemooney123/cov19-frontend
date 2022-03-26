import React, {Component} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import AppCard from './AppCard'
import axios from 'axios'
import configData from '../config/config.json'

export default class Dashboard extends Component {

    state = {
        metrics: []
    }

    componentDidMount() {
        axios.get(configData.BASE_URL + `last7?areaType=nation&areaName=Northern Ireland&metric=dailyCases&metricName=newCasesByPublishDate&page=11`)
            .then(res => {
                const metrics = "1234";
                //console.log(metrics);
                const info = {
                    title: "Cases",
                    key: "New Cases",
                    value: metrics
                }


                this.state.metrics.push(info);
                this.setState({metrics: this.state.metrics});

                console.log(this.state.metrics);
            })
    }

    render() {
        return (
            <div>

                <Container>
                    <Row>
                        {
                            this.state.metrics.map((item, i) => (
                            <span key={i}>
                                <Col md={3}> <AppCard title={item.title} metricTitle={item.key} value={item.value}/></Col>
                            </span>
                        ))}

                    </Row>

                </Container>


            </div>

        )
    }
}
