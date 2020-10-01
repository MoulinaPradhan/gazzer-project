import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import mini card widgets
import MiniCards from "./mini-card";

//Import Images
import profile1 from "../../assets/images/profile-img.png"
import avatar1 from "../../assets/images/users/avatar-1.jpg";

// import charts
import ApexRevenue from "./ApexRevenue";

class ContactsProfile extends Component {
    state = {
        experiences: [
            { id: 1, iconClass: "bx-server", link: "#", designation: "Back end Developer", timeDuration: "2016 - 19" },
            { id: 2, iconClass: "bx-code", link: "#", designation: "Front end Developer", timeDuration: "2013 - 16" },
            { id: 3, iconClass: "bx-edit", link: "#", designation: "UI /UX Designer", timeDuration: "2011 - 13" },
        ],
        miniCards: [
            { title: "Completed Projects", iconClass: "bx-check-circle", text: "125" },
            { title: "Pending Projects", iconClass: "bx-hourglass", text: "12" },
            { title: "Total Revenue", iconClass: "bx-package", text: "$36,524" }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Profiles" breadcrumbItem="Summary" />

                        <Row>
                            <Col xl="4">
                                <Card className="overflow-hidden">
                                    <div className="bg-soft-primary">
                                        {/* <Row>
                                            <Col xs="7">
                                                <div className="text-primary p-3">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>It will seem like simplified</p>
                                                </div>
                                            </Col>
                                            <Col xs="5" className="align-self-end">
                                                <img src={profile1} alt="" className="img-fluid" />
                                            </Col>
                                        </Row> */}
                                    </div>
                                    {/* <CardBody className="pt-0">
                                        <Row>
                                            <Col sm="4">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <img src={avatar1} alt="" className="img-thumbnail rounded-circle" />
                                                </div>
                                                <h5 className="font-size-15 text-truncate">Cynthia Price</h5>
                                                <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
                                            </Col>

                                            <Col sm={8}>
                                                <div className="pt-4">
                                                    <Row>
                                                        <Col xs="6">
                                                            <h5 className="font-size-15">125</h5>
                                                            <p className="text-muted mb-0">Projects</p>
                                                        </Col>
                                                        <Col xs="6">
                                                            <h5 className="font-size-15">$1245</h5>
                                                            <p className="text-muted mb-0">Revenue</p>
                                                        </Col>
                                                    </Row>
                                                    <div className="mt-4">
                                                        <Link to="" className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ml-1"></i></Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody> */}
                                </Card>

                                {/* <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Personal Information</CardTitle>

                                        <p className="text-muted mb-4">Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                                        <div className="table-responsive">
                                            <Table className="table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Full Name :</th>
                                                        <td>Cynthia Price</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Mobile :</th>
                                                        <td>(123) 123 1234</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">E-mail :</th>
                                                        <td>cynthiaGazerr@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Location :</th>
                                                        <td>California, United States</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-5">Experience</CardTitle>
                                        <div className="">
                                            <ul className="verti-timeline list-unstyled">
                                                {
                                                    this.state.experiences.map((experience, i) =>
                                                        <li className={experience.id === 1 ? "event-list active" : "event-list"} key={"_exp_" + i} >
                                                            <div className="event-timeline-dot">
                                                                <i className={experience.id === 1 ? "bx bx-right-arrow-circle bx-fade-right" : "bx bx-right-arrow-circle"}></i>
                                                            </div>
                                                            <Media>
                                                                <div className="mr-3">
                                                                    <i className={"bx " + experience.iconClass + " h4 text-primary"}></i>
                                                                </div>
                                                                <Media body>
                                                                    <div>
                                                                        <h5 className="font-size-15"><Link to={experience.link} className="text-dark">{experience.designation}</Link></h5>
                                                                        <span className="text-primary">{experience.timeDuration}</span>
                                                                    </div>
                                                                </Media>
                                                            </Media>
                                                        </li>
                                                    )
                                                }

                                            </ul>
                                        </div>

                                    </CardBody>
                                </Card> */}
                            </Col>

                            <Col xl="12">

                                {/* <Row>
                                    {
                                        this.state.miniCards.map((card, key) =>
                                            <MiniCards title={card.title} text={card.text} iconClass={card.iconClass} key={"_card_" + key} />
                                        )
                                    }

                                </Row> */}
                                {/* <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Revenue</CardTitle>
                                        <div id="revenue-chart" className="apex-charts">
                                            <ApexRevenue />
                                        </div>
                                    </CardBody>
                                </Card> */}

<Card>
                                    <CardBody>
                                    
                                        <div className="table-responsive">
                                            <Table className="table table-nowrap table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">UserName</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Mobile</th>
                                                        <th scope="col">Option</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td> John Doe</td>
                                                        <td>Jonner@12</td>
                                                        <td>john@mail.in</td>
                                                        <td>5064531313</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td> Daniel Canales</td>
                                                        <td>Danniel2</td>
                                                        <td>cales34@gmail.com</td>
                                                        <td>45777746444</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Jennifer Walker</td>
                                                        <td>JennyRouter</td>
                                                        <td>jenny@mail.com</td>
                                                        <td>15455578</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Kenneth Johnson</td>
                                                        <td>Ken23</td>
                                                        <td>JKenny12@mail.com</td>
                                                        <td>124634465</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Natalie Salerno</td>
                                                        <td>Natalisa</td>
                                                        <td>Natalie34@mail.com</td>
                                                        <td>164789124</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Emily Watson</td>
                                                        <td>WatsonEmily</td>
                                                        <td>Emily@mail.com</td>
                                                        <td>19244567</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>David Conyers</td>
                                                        <td>David14</td>
                                                        <td>davidConvers@mail.com</td>
                                                        <td>947894536</td>
                                                        <td><button style={{backgroundColor:"#1d4bdb",color:"white",width:"80px",height:"26px",border:0,borderRadius:7}} >View</button></td>
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

export default ContactsProfile;