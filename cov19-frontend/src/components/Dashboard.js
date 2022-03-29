import React, {Component} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import AppCard from './AppCard'
import configData from '../config/config.json'
import API from "../services/API";

export default class Dashboard extends Component {

    state = {
        cases: [],
        deaths: [],
        metrics: [],
        title: ""
    }

    async componentDidMount() {
        await API.get(configData.BASE_URL + `last7?areaType=nation&areaName=Northern Ireland&metric=dailyCases&metricName=newCasesByPublishDate&page=11`)
            .then(res => {
                const metrics = res.data;

                const keys = Object.keys(metrics);
                for (let i = 0; i < keys.length; i++) {

                    if (keys[i] == "Cases") {

                        this.getMetrics(metrics, keys[i]);
                        this.setState({cases: this.state.cases});

                        this.state.metrics.push(this.state.cases);


                        this.setState({metrics:  this.state.metrics});
                    }

                    if (keys[i] == "Deaths") {

                        this.getMetrics(metrics, keys[i]);
                        this.setState({deaths: this.state.deaths});
                        this.state.metrics.push(this.state.deaths);

                        this.setState({metrics:  this.state.metrics});
                    }
                }



            })
    }


    getMetrics(metrics, title) {

        const filtered = Object.fromEntries(
            Object.entries(metrics).filter(
                ([key, val]) => key.includes(title)
            )
        );

        Object.values(filtered).forEach(val => {

            Object.values(val).forEach(v => {

                for (const [key, value] of Object.entries(v)) {
                    const obj = {
                        title: "",
                        key: "",
                        value: 0,
                    }

                    obj.title = title;
                    obj.key = key;
                    obj.value = value;


                    if (title == "Cases") {

                        this.state.cases.push(obj);
                    }

                    if (title == "Deaths") {
                        this.state.deaths.push(obj);
                    }


                }
            });

        });
    }

    render() {
        return (
            <div>

                <Container>
                    <Row>

                        {this.state.metrics.map((item, i) => (


                            <Col key={i}> <AppCard data={item}/></Col>

                        ))}




                    </Row>

                </Container>


            </div>

        )
    }
}
