import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Input,Alert,Media, Button, Card, CardBody, Table, Label, Badge, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumb from '../../components/Common/Breadcrumb';

import avatar from '../../assets/images/users/avatar-1.jpg';
// actions
import { editProfile } from '../../store/actions';


class EcommerceOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Orders: [
                { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard" },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeclass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa" },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal" },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard" },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeclass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa" },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal" },
                { id: "customCheck8", orderId: "#SK2546", billingName: "William Cruz", Date: "03 Oct, 2019", total: "$374", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fas fa-money-bill-alt", paymentMethod: "COD" },
                { id: "customCheck9", orderId: "#SK2547", billingName: "Dustin Moser", Date: "02 Oct, 2019", total: "$350", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Mastercard" },
                { id: "customCheck10", orderId: "#SK2548", billingName: "Clark Benson", Date: "01 Oct, 2019", total: "$345", badgeclass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-paypal", paymentMethod: "Visa" },
            ],
            modal: false,
        }
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumb title="Gazerr" breadcrumbItem="Profile" />

                         <Row>
                            <Col lg="12">
                             {this.props.error && this.props.error ? <Alert color="danger">{this.props.error}</Alert> : null}
                             {this.props.success && this.props.success ? <Alert color="success">{this.props.success}</Alert> : null}

                                <Card>
                                    <CardBody>
                                        <Media>
                                            <div className="mr-3">
                                                <img src={avatar} alt="" className="avatar-md rounded-circle img-thumbnail"/>
                                            </div>
                                            <Media body className="align-self-center">
                                                <div className="text-muted">
                                                    <h5>{this.state.name}</h5>
                                                    <p className="mb-1">{this.state.email}</p>
                                                    <p className="mb-0">Id no: #{this.state.idx}</p>
                                                </div>
                                            </Media>
                                        </Media>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <h4 className="card-title mb-4">Change UserName</h4>

                        <Card>
                            <CardBody>
                               <AvForm className="form-horizontal" onValidSubmit={(e,v) => { this.handleValidSubmit(e,v) }}>
                                    <div className="form-group">
                                         <AvField name="username" label="UserName" value={this.state.name} className="form-control" placeholder="Enter UserName" type="text" required />
                                         <AvField name="idx"  value={this.state.idx}  type="hidden"  />
                                    </div>
                                     <div className="text-center mt-4">
                                         <Button type="submit" color="danger">Edit UserName</Button>
                                    </div>
                               </AvForm>
                            
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default EcommerceOrders;