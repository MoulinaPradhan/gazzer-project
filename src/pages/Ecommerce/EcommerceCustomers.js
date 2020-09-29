import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table, Label,UncontrolledTooltip,Input, Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


//Import Image
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";
import img4 from "../../assets/images/companies/img-4.png";
import img5 from "../../assets/images/companies/img-5.png";
import img6 from "../../assets/images/companies/img-6.png";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";



class EcommerceCustomers extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Meetings Group" breadcrumbItem="Meetings Group" />
                        <Row>
                            <Col xs="12">
                                <Card>
                                    <CardBody>
                                        {/* <Row className="mb-2">
                                            <Col sm="4">
                                                <div className="search-box mr-2 mb-2 d-inline-block">
                                                    <div className="position-relative">
                                                        <Input type="text" className="form-control" placeholder="Search..." />
                                                        <i className="bx bx-search-alt search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-right">
                                                    <Button type="button" color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"></i> New Customers</Button>
                                                </div>
                                            </Col>
                                        </Row> */}

                                        {/* <div className="table-responsive">
                                            <Table className="table-centered table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Username</th>
                                                        <th>Phone / Email</th>
                                                        <th>Address</th>
                                                        <th>Rating</th>
                                                        <th>Wallet Balance</th>
                                                        <th>Joining Date</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <Label className="custom-control-label" htmlFor="customCheck1">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Stephen Rash</td>
                                                        <td>
                                                            <p className="mb-1">325-250-1106</p>
                                                            <p className="mb-0">StephenRash@teleworm.us</p>
                                                        </td>

                                                        <td>2470 Grove Street
                                                            Bethpage, NY 11714</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.2</Badge></td>
                                                        <td>$5,412</td>
                                                        <td>07 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="mdi mdi-pencil font-size-16 text-success mr-2"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="mdi mdi-trash-can font-size-16 text-danger mr-2"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                                <Label className="custom-control-label" htmlFor="customCheck2">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                <Label className="custom-control-label" htmlFor="customCheck3">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                                <Label className="custom-control-label" htmlFor="customCheck4">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                <Label className="custom-control-label" htmlFor="customCheck5">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                                <Label className="custom-control-label" htmlFor="customCheck6">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                                <Label className="custom-control-label" htmlFor="customCheck7">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                <Label className="custom-control-label" htmlFor="customCheck8">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                                            <PaginationItem disabled>
                                                <PaginationLink previous href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink href="#">
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    4
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    5
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink next href="#" />
                                            </PaginationItem>
                                        </Pagination> */}
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

export default EcommerceCustomers;