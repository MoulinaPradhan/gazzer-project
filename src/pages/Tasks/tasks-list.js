import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {  Container, Row, Col, Card, CardBody, Table, Label,UncontrolledTooltip } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import ReactApexChart from 'react-apexcharts';

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

class TasksList extends Component {
    state = {
        chk1: true,
        chk2: true,
        chk3: true, 
        series:[{name:"Complete Tasks",type:"column",data:[23,11,22,27,13,22,52,21,44,22,30]},{name:"All Tasks",type:"line",data:[23,11,34,27,17,22,62,32,44,22,39]}],
        options:{chart:{height:280,type:"line",stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"20%",endingShape:"rounded"}},colors:["#556ee6","#34c38f"],fill:{gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],markers:{size:0},yaxis:{min:0}}
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Rooms Group" breadcrumbItem="Rooms Group" />
                        {/* Render Breadcrumbs */}
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        {/* <CardTitle className="mb-4">Example </CardTitle>
                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Skote Dashboard UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member">
                                                                    <img src={avatar2} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member">
                                                                    <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-secondary font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="customCheck2" onClick={() => { this.setState({ chk1: !this.state.chk1 }) }}></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a New Landing UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar5} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            3 +
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-primary font-size-11">Approved</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                <label className="custom-control-label" htmlFor="customCheck3"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Skote Logo</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            F
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-secondary font-size-11">Waiting</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">In Progress </CardTitle>
                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck4" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="customCheck4" onClick={() => { this.setState({ chk2: !this.state.chk2 }) }}></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Brand logo design</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src="assets/images/users/avatar-7.jpg" className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                <label className="custom-control-label" htmlFor="customCheck5"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Blog Template UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar8} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-warning font-size-11">Pending</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Completed </CardTitle>
                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "60px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                                <label className="custom-control-label" htmlFor="customCheck6"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Redesign - Landing page</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar6} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            F
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck7" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="customCheck7" onClick={() => { this.setState({ chk3: !this.state.chk3 }) }}></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Multipurpose Landing</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                <label className="custom-control-label" htmlFor="customCheck8"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Blog Template UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar2} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span className="badge badge-pill badge-soft-success font-size-11">Complete</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Tasks </CardTitle>
                                        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={280} />  
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Recent Tasks </CardTitle>

                                        <div className="table-responsive">
                                            <table className="table table-nowrap table-centered mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Brand logo design</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Create a Blog Template UI</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            S
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar8} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">Redesign - Landing page</Link></h5>
                                                        </td>
                                                        <td>
                                                            <div className="team">
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                                <Link to="#" className="team-member d-inline-block">
                                                                    <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> */}

<div className="table-responsive">
                                            <Table className="table table-nowrap table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Traffic</th>
                                                        <th scope="col">Bounce Rate</th>
                                                        <th scope="col">Sessions</th>
                                                        <th scope="col">Members</th>
                                               <th scope="col">Status</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Daniel Canales</td>
                                                        <td>2 Sep, 2019</td>
                                                        <td>8.1%</td>
                                                        <td>21.6%</td>
                                                        <td>506</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member1">
                                                                <img src={avatar2} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member1">
                                                                    Daniel Canales
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                            <Link to="#" className="team-member d-inline-block" id="member2">
                                                                <img src={avatar1} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member2">
                                                                    Jennifer Walker
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-warning font-size-10">Pending</span></td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Natalie Salerno</td>
                                                        <td>1 Sep, 2019</td>
                                                        <td>20.1%</td>
                                                        <td>31.6%</td>
                                                        <td>94</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member3">
                                                                <img src={avatar3} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member3">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-danger">Delay</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>John Doe</td>
                                                        <td>21 Sep, 2019</td>
                                                        <td>82.1%</td>
                                                        <td>2.6%</td>
                                                        <td>15</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member9">
                                                                <img src={avatar7} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member9">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                            <Link to="#" className="team-member d-inline-block" id="member10">
                                                                <img src={avatar8} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member10">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Kenneth Johnson</td>
                                                        <td>29 Sep, 2019</td>
                                                        <td>8.9%</td>
                                                        <td>11.6%</td>
                                                        <td>12</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member4">
                                                                <img src={avatar5} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member4">
                                                                    Natalie Salerno
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                            <Link to="#" className="team-member d-inline-block" id="member5">
                                                                <div className="avatar-xs m-1">
                                                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                                        A
                                                                    </span>
                                                                </div>
                                                                <UncontrolledTooltip placement="top" target="member5">
                                                                    Natalie Salerno
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                            <Link to="#" className="team-member d-inline-block" id="member6">
                                                                <img src={avatar4} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member6">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Daniel Canales</td>
                                                        <td>05 Oct, 2019</td>
                                                        <td>6.1%</td>
                                                        <td>2.6%</td>
                                                        <td>164</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member7">
                                                                <img src={avatar6} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member7">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                            <Link to="#" className="team-member d-inline-block" id="member8">
                                                                <div className="avatar-xs m-1">
                                                                    <span className="avatar-title rounded-circle bg-soft-success text-success font-size-16">
                                                                        D
                                                                    </span>
                                                                    <UncontrolledTooltip placement="top" target="member8">
                                                                        David Conyers
                                                                    </UncontrolledTooltip>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Jennifer Walker</td>
                                                        <td>17 Oct, 2019</td>
                                                        <td>2.1%</td>
                                                        <td>41.6%</td>
                                                        <td>192</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member11" >
                                                                <div className="avatar-xs m-1">
                                                                    <span className="avatar-title rounded-circle bg-soft-danger text-danger font-size-16">
                                                                        K
                                                                    </span>
                                                                    <UncontrolledTooltip placement="top" target="member11">
                                                                        Kenneth Johnson
                                                                    </UncontrolledTooltip>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-danger">Delay</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Jenny Rose</td>
                                                        <td>04 Nov, 2019</td>
                                                        <td>18.1%</td>
                                                        <td>1.6%</td>
                                                        <td>94</td>
                                                        <td>
                                                        <div className="team">
                                                            <Link to="#" className="team-member d-inline-block" id="member12">
                                                                <img src={avatar3} className="rounded-circle avatar-xs m-1" alt="" />
                                                                <UncontrolledTooltip placement="top" target="member12">
                                                                    Kenneth Johnson
                                                                </UncontrolledTooltip>
                                                            </Link>

                                                        </div>
                                                    </td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
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

export default TasksList;