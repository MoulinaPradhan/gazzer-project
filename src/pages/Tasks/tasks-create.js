import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Input, FormGroup, Label, Button,Table } from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class TasksCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            inputFields: [
                { name: "", file: "" }
            ]
        }
        this.startDateChange.bind(this);
        this.endDateChange.bind(this);
        this.handleAddFields.bind(this);
        this.handleRemoveFields.bind(this);
    }
    startDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    endDateChange = date => {
        this.setState({
            endDate: date
        });
    };

    // Function for Create Input Fields
    handleAddFields = () => {
        var values = this.state.inputFields;
        values.push({ name: "", file: "" });
        this.setState({ inputFields: values });
    }

    // Function for Remove Input Fields
    handleRemoveFields = (index) => {
        var values = this.state.inputFields;
        values.splice(index, 1);
        this.setState({ inputFields: values });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Meetings" breadcrumbItem="Summary" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                     <CardBody>
                                        {/* <CardTitle className="mb-4">Create New Task</CardTitle>
                                        <form className="outer-repeater">
                                            <div data-repeater-list="outer-group" className="outer">
                                                <div data-repeater-item className="outer">
                                                    <FormGroup className="mb-4" row>
                                                        <Label htmlFor="taskname" className="col-form-label col-lg-2">Task Name</Label>
                                                        <Col lg="10">
                                                            <Input id="taskname" name="taskname" type="text" className="form-control" placeholder="Enter Task Name..." />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup className="mb-4" row>
                                                        <Label className="col-form-label col-lg-2">Task Description</Label>
                                                        <Col lg="10">
                                                            <Editor
                                                                toolbarClassName="toolbarClassName"
                                                                wrapperClassName="wrapperClassName"
                                                                editorClassName="editorClassName"
                                                                placeholder="Place Your Content Here..."
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup className="mb-4" row>
                                                        <Label className="col-form-label col-lg-2">Task Date</Label>
                                                        <Col lg="10">
                                                            <Row>
                                                                <Col md={6} className="pr-0">
                                                                    <DatePicker className="form-control"
                                                                        selected={this.state.startDate}
                                                                        onChange={this.startDateChange}
                                                                    />
                                                                </Col>
                                                                <Col md={6} className="pl-0">
                                                                    <DatePicker className="form-control"
                                                                        selected={this.state.endDate}
                                                                        onChange={this.endDateChange}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </FormGroup>

                                                    <div className="inner-repeater mb-4">
                                                        <div className="inner form-group mb-0 row">
                                                            <Label className="col-form-label col-lg-2">Add Team Member</Label>
                                                            <div className="inner col-lg-10 ml-md-auto" id="repeater">
                                                                {
                                                                    this.state.inputFields.map((field, key) =>
                                                                        <Fragment key={"_field_" + key} >
                                                                            <div className="mb-3 row align-items-center">
                                                                                <Col md="6">
                                                                                    <input type="text" className="inner form-control" defaultValue={field.name} placeholder="Enter Name..." />
                                                                                </Col>
                                                                                <Col md="4">
                                                                                    <div className="mt-4 mt-md-0">
                                                                                        <Input type="file" className="form-control-file" defaultValue={field.file} />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col md="2">
                                                                                    <div className="mt-2 mt-md-0">
                                                                                        <Button color="primary" className="inner" onClick={() => { this.handleRemoveFields(key) }} block>Delete</Button>
                                                                                    </div>
                                                                                </Col>
                                                                            </div>
                                                                        </Fragment>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                        <Row className="justify-content-end">
                                                            <Col lg="10">
                                                                <Button color="success" className="inner" onClick={this.handleAddFields} >Add Number</Button>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <FormGroup className="mb-4" row>
                                                        <label htmlFor="taskbudget" className="col-form-label col-lg-2">Budget</label>
                                                        <div className="col-lg-10">
                                                            <Input id="taskbudget" name="taskbudget" type="text" placeholder="Enter Task Budget..." className="form-control" />
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </form>
                                        <Row className="justify-content-end">
                                            <Col lg="10">
                                                <Button type="submit" color="primary">Create Task</Button>
                                            </Col>
                                        </Row> */}
                                       <div className="table-responsive">
                                            <Table className="table table-nowrap table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Names</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Sessions</th>
                                                        <th scope="col">Start Time</th>
                                                        <th scope="col">End Time</th>
                                                        {/* <th scope="col">Status</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Daniel Canales , Natalie Salerno</td>
                                                        <td>2 Sep, 2019</td>
                                                        <td>80</td>
                                                        <td>4:30 am</td>
                                                        <td>5:30 am</td>
                                                        {/* <td><span className="badge badge-warning font-size-10">Pending</span></td> */}
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Natalie Salerno , John Doe</td>
                                                        <td>1 Sep, 2019</td>
                                                        <td>201</td>
                                                        <td>10:00 am</td>
                                                        <td>10:30 am</td>
                                                        {/* <td><span className="badge badge-danger">Delay</span></td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>John Doe , Daniel Canales</td>
                                                        <td>21 Sep, 2019</td>
                                                        <td>82</td>
														<td>1:00 am</td>
                                                        <td>1:30 am</td>
                                                        {/* <td><span className="badge badge-primary">Completed</span></td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Kenneth Johnson , Daniel Canales</td>
                                                        <td>29 Sep, 2019</td>
                                                        <td>89</td>
														<td>9:30 am</td>
                                                        <td>9:35 am</td>
                                                        {/* <td><span className="badge badge-primary">Completed</span></td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Daniel Canales , Kenneth Johnson</td>
                                                        <td>05 Oct, 2019</td>
                                                        <td>600</td>
                                                        <td>9:30 am</td>
                                                        <td>10:30 am</td>
                                                        {/* <td><span className="badge badge-primary">Completed</span></td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Jennifer Walker ,Kenneth Johnson</td>
                                                        <td>17 Oct, 2019</td>
                                                        <td>21</td>
                                                        <td>4:30 am</td>
                                                        <td>5:30 am</td>
                                                        {/* <td><span className="badge badge-danger">Delay</span></td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Jenny Rose, John Doe</td>
                                                        <td>04 Nov, 2019</td>
                                                        <td>14</td>
														<td>11:00 am</td>
                                                        <td>11:30 am</td>
                                                        {/* <td><span className="badge badge-primary">Completed</span></td> */}
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card> 
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default TasksCreate;