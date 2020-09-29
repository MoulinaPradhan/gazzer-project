import React, { Component } from 'react';
import { Container ,Card,CardBody,Table} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard";

//Import Images
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

import "./tasks.scss";

class TasksKanban extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					id: 1,
					title: 'Upcoming',
					cards: [
						{
							id: 11,
							content: {
								title: "Multipurpose  -  layout design", date: "14 Oct, 2019", img: avatar4, text: "3 +", budget: 145, status: "Waiting", class: "secondary"
							}
						},
						{
							id: 12,
							content: {
								title: "Multipurpose  - d a New Landing UI", date: "15 Oct, 2019", img: avatar5, text: "3 +", budget: 112, status: "Approved", class: "primary"
							}
						},
						{
							id: 13,
							content: {
								title: "Variously  - d a Skote Logo", date: "16 Oct, 2019", img: avatar4, text: "F", budget: 86, status: "Waiting", class: "secondary"
							}
						},
					]
				},
				{
					id: 2,
					title: 'In Progress',
					cards: [
						{
							id: 21,
							content: {
								title: "Branded  -  logo design", date: "12 Oct, 2019", img: avatar4, text: "S", budget: 132, status: "Complete", class: "success"
							}
						},
						{
							id: 22,
							content: {
								title: "Create  - d a Blog Template UI", date: "18 Oct, 2019", img: avatar5, text: "K", budget: 103, status: "Pending", class: "pending"
							}
						},
						{
							id: 23,
							content: {
								title: "Multipurpose Dashboard UI", date: "14 Oct, 2019", img: avatar4, text: "F", budget: 94, status: "Complete", class: "success"
							}
						},

					]
				},
				{
					id: 3,
					title: 'Completed',
					cards: [
						{
							id: 31,
							content: {
								title: "Redesign - Landing page", date: "10 Oct, 2019", img: avatar4, text: "S", budget: 145, status: "Complete", class: "success"
							}
						},
						{
							id: 32,
							content: {
								title: "Multipurpose Landing", date: "9 Oct, 2019", img: avatar5, text: "K", budget: 92, status: "Complete", class: "success"
							}
						},
						{
							id: 33,
							content: {
								title: "Multipurpose Landing", date: "15 Oct, 2019", img: avatar4, text: "F", budget: 86, status: "Waiting", class: "secondary"
							}
						},

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
						<Breadcrumbs title="Room" breadcrumbItem="Room" />
						
						{/* <UncontrolledBoard board={this.state} content={this.state.columns} /> */}
					
                                <Card> 
								<CardBody>
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
                                                        <td><span className="badge badge-warning font-size-10">Pending</span></td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Natalie Salerno</td>
                                                        <td>1 Sep, 2019</td>
                                                        <td>20.1%</td>
                                                        <td>31.6%</td>
                                                        <td>94</td>
                                                        <td><span className="badge badge-danger">Delay</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>John Doe</td>
                                                        <td>21 Sep, 2019</td>
                                                        <td>82.1%</td>
                                                        <td>2.6%</td>
                                                        <td>15</td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Kenneth Johnson</td>
                                                        <td>29 Sep, 2019</td>
                                                        <td>8.9%</td>
                                                        <td>11.6%</td>
                                                        <td>12</td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Daniel Canales</td>
                                                        <td>05 Oct, 2019</td>
                                                        <td>6.1%</td>
                                                        <td>2.6%</td>
                                                        <td>164</td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Jennifer Walker</td>
                                                        <td>17 Oct, 2019</td>
                                                        <td>2.1%</td>
                                                        <td>41.6%</td>
                                                        <td>192</td>
                                                        <td><span className="badge badge-danger">Delay</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Jenny Rose</td>
                                                        <td>04 Nov, 2019</td>
                                                        <td>18.1%</td>
                                                        <td>1.6%</td>
                                                        <td>94</td>
                                                        <td><span className="badge badge-primary">Completed</span></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card> 
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default TasksKanban;