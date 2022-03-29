import React, {Component} from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import AppCard from './AppCard'
import configData from '../config/config.json'
import API from "../services/API";


export default class Dashboard extends Component {

    state = {
        cases: [],
        deaths: [],
        metrics: [],
        title: "",
        areaName: ""
    }

    async GetData() {

        await API.get(configData.BASE_URL + `last7?areaType=nation&areaName=` + this.state.areaName + `&metric=dailyCases&metricName=newCasesByPublishDate&page=11`)
            .then(async res => {
                const metrics = res.data;
                console.log(metrics)
                const keys = Object.keys(metrics);
                for (let i = 0; i < keys.length; i++) {

                    if (keys[i] == "Cases") {

                        this.getMetrics(metrics, keys[i]);
                        await this.setState({cases: this.state.cases});

                        this.state.metrics.push(this.state.cases);


                        await this.setState({metrics: this.state.metrics});
                    }

                    if (keys[i] == "Deaths") {

                        this.getMetrics(metrics, keys[i]);
                        await this.setState({deaths: this.state.deaths});
                        this.state.metrics.push(this.state.deaths);

                        await this.setState({metrics: this.state.metrics});
                    }
                }

                this.state.areaName = "";
                this.state.cases = [];
                this.state.deaths = [];

            })
    }

    async componentDidMount() {
        this.state.areaName = "Northern Ireland";
        await this.GetData();
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

    onSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state.val);

        this.state.metrics = [];

        this.state.areaName = this.state.val;

        await this.GetData();
    };

    render() {

        return (
            <div>

                <Container>
                    <Row>
                        <Col>

                            <Form onSubmit={this.onSubmit}>
                                <Form.Group className="mb-4" controlId="areaName">
                                    <Form.Label>Nation</Form.Label>
                                    <Form.Control type="areaName" placeholder="Enter area name" name="areaName"
                                                  onChange={e => this.setState({val: e.target.value})}/>
                                    <Form.Text className="text-muted">
                                        This will update the dashboard to show the chosen nation
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mb-4">
                                    Search
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>


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
