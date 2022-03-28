import React, {Component} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import AppCard from './AppCard'
import axios from 'axios'
import configData from '../config/config.json'

export default class Dashboard extends Component {

    state = {
        cases: [],
        deaths: [],
        title: ""
    }

    componentDidMount() {
        axios.get(configData.BASE_URL + `last7?areaType=nation&areaName=Northern Ireland&metric=dailyCases&metricName=newCasesByPublishDate&page=11`)
            .then(res => {
                const metrics = res.data;


                const keys = Object.keys(metrics);
                for (let i = 0; i < keys.length; i++) {

                    if (keys[i] == "Cases") {

                        this.getMetrics(metrics, keys[i]);
                        this.setState({cases: this.state.cases});
                    }

                    if (keys[i] == "Deaths") {

                        this.getMetrics(metrics, keys[i]);
                        this.setState({deaths: this.state.deaths});
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

                        <Col> <AppCard data={this.state.cases}/></Col>
                        <Col> <AppCard data={this.state.deaths}/></Col>

                    </Row>

                </Container>


            </div>

        )
    }
}
