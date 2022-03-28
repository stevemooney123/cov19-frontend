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

                Object.values(metrics).forEach(val => {

                    Object.values(val).forEach(v => {

                        for (const [key, value] of Object.entries(v)) {
                            const obj = {
                                title: "",
                                key: "",
                                value: 0,
                            }

                            obj.title = key;

                            obj.key = key;
                            obj.value = value;
                            console.log(obj);
                            this.state.metrics.push(obj);


                        }

                    });

                });


                this.setState({metrics: this.state.metrics});

            })
    }


    render() {
        return (
            <div>

                <Container>
                    <Row>

                        {
                            this.state.metrics.map((item, i) => (
                                <span>
                                <Col key={item.key}> <AppCard  data={item}/></Col>
                            </span>

                            ))}

                    </Row>

                </Container>


            </div>

        )
    }
}
