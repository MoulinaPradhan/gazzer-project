import React, { Component } from 'react';
import { Container, Row, Card,CardBody,CardTitle, Table,Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Cards
import CardProject from "./card-project";

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

class ProjectsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1, img: img1, name: "New admin Design", description: "It will be as simple as Occidental", status: "Completed", color: "primary", date: "15 Oct, 19", comments: 214,
                    child: [
                        { id: 1, img: avatar2, name: "Daniel Candles" },
                        { id: 2, img: avatar1, name: "Jennifer Walker" },
                    ]
                },
                {
                    id: 2, img: img2, name: "Brand logo design", description: "To achieve it would be necessary", status: "Pending", color: "warning", date: "22 Oct, 19", comments: 183,
                    child: [
                        { id: 1, img: avatar3, name: "Kenneth Johnson" },
                    ]
                },
                {
                    id: 3, img: img3, name: "New Landing Design", description: "For science, music, sport, etc", status: "Delay", color: "danger", date: "13 Oct, 19", comments: 175,
                    child: [
                        { id: 1, img: avatar2, name: "Kenneth Johnson" },
                        { id: 2, img: "Null", name: "Andy Miller", color: "primary" },
                        { id: 3, img: avatar2, name: "Daniel Candles" },
                    ]
                },
                {
                    id: 4, img: img4, name: "Redesign - Landing page", description: "If several languages coalesce", status: "Completed", color: "primary", date: "14 Oct, 19", comments: 202,
                    child: [
                        { id: 1, img: avatar3, name: "Paul Miller" },
                        { id: 2, img: "Null", name: "David Conyears", color: "success" },
                    ]
                },
                {
                    id: 5, img: img5, name: "Skote Dashboard UI", description: "Separate existence is a myth", status: "Completed", color: "primary", date: "13 Oct, 19", comments: 194,
                    child: [
                        { id: 1, img: avatar3, name: "Steven Jenkins" },
                        { id: 2, img: avatar2, name: "Ruby Clinton" },
                    ]
                },
                {
                    id: 6, img: img6, name: "Blog Template UI", description: "For science, music, sport, etc", status: "Pending", color: "warning", date: "24 Oct, 19", comments: 222,
                    child: [
                        { id: 1, img: "Null", name: "Ken Dorsy", color: "danger" },
                    ]
                },
                {
                    id: 7, img: img2, name: "Multipurpose Landing", description: "It will be as simple as Occidental", status: "Delay", color: "danger", date: "01 Oct, 19", comments: 214,
                    child: [
                        { id: 1, img: avatar1, name: "Partica Harrison" },
                    ]
                },
                {
                    id: 8, img: img3, name: "App Landing UI", description: "It will be as simple as Occidental", status: "Delay", color: "danger", date: "22 Oct, 19", comments: 185,
                    child: [
                        { id: 1, img: "Null", name: "David Conyears", color: "primary" },
                        { id: 2, img: "Null", name: "Harold Mendez", color: "primary" },
                        { id: 3, img: avatar1, name: "Partica Harrison" },
                    ]
                },
                {
                    id: 9, img: img5, name: "New admin Design", description: "It will be as simple as Occidental", status: "Completed", color: "primary", date: "14 Oct, 19", comments: 106,
                    child: [
                        { id: 1, img: avatar3, name: "Nataile Salerino" },
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Files" breadcrumbItem="Files Summary" />


                        {/* <Row>
                            {/* Import Cards 
                            <CardProject projects={this.state.projects} />
                        </Row>*/}

                        <Row > 
                        <Col lg="12">
<Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Profiles</CardTitle>
                                        <div className="table-responsive">
                                            <Table className="table table-nowrap table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Topics</th>
                                                        <th scope="col">Start Date</th>
                                                        <th scope="col">Deadline</th>
                                                        <th scope="col">Videos</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td> Java</td>
                                                        <td>2 Sep, 2019</td>
                                                        <td>20 Oct, 2019</td>
                                                        <td>506</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Algorithm</td>
                                                        <td>1 Sep, 2019</td>
                                                        <td>2 Sep, 2019</td>
                                                        <td>94</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Designing</td>
                                                        <td>21 Sep, 2019</td>
                                                        <td>29 Sep, 2019</td>
                                                        <td>15</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Data Structure</td>
                                                        <td>29 Sep, 2019</td>
                                                        <td>04 Oct, 2019</td>
                                                        <td>12</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Maths</td>
                                                        <td>05 Oct, 2019</td>
                                                        <td>16 Oct, 2019</td>
                                                        <td>164</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Algebra</td>
                                                        <td>17 Oct, 2019</td>
                                                        <td>05 Nov, 2019</td>
                                                        <td>192</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Physics</td>
                                                        <td>04 Nov, 2019</td>
                                                        <td>05 Nov, 2019</td>
                                                        <td>94</td>
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

export default ProjectsGrid;