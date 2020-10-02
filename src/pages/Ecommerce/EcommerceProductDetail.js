import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Button, Nav, NavItem, NavLink, TabContent, TabPane, Table, Media } from "reactstrap";
import classnames from 'classnames';
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';
//Import Star Ratings
import StarRatings from 'react-star-ratings';

//Import Product Images
import img4 from "../../assets/images/product/img-4.png";
import img6 from "../../assets/images/product/img-6.png";
import img7 from "../../assets/images/product/img-7.png";
import img8 from "../../assets/images/product/img-8.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class EcommerceProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { id: 1, img: avatar2, name: "Brian", description: "If several languages coalesce, the grammar of the resulting language.", date: "5 hrs ago" },
                {
                    id: 2, img: avatar4, name: "Denver", description: "To an English person, it will seem like simplified English, as a skeptical Cambridge", date: "07 Oct, 2019",
                    childComment: [
                        { id: 1, img: avatar5, name: "Henry", description: "Their separate existence is a myth. For science, music, sport, etc.", date: "08 Oct, 2019" },
                    ]
                },
                { id: 3, img: "Null", name: "Neal", description: "Everyone realizes why a new common language would be desirable.", date: "05 Oct, 2019" },
            ],
            recentProducts: [
                { id: 1, img: img7, name: "Wirless Headphone", link: "", rating: 4, oldPrice: 240, newPrice: 225 },
                { id: 2, img: img4, name: "Phone patterned cases", link: "", rating: 3, oldPrice: 150, newPrice: 145 },
                { id: 3, img: img6, name: "Phone Dark Patterned cases", link: "", rating: 4, oldPrice: 138, newPrice: 135 },
            ],
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.imageShow = this.imageShow.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    imageShow(img, id) {
        var expandImg = document.getElementById("expandedImg" + id);
        expandImg.src = img;
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Profiles" breadcrumbItem="Details" />
                        <Row>
                            <Col> 
                            <Card>
                            <CardBody>
                               <AvForm className="form-horizontal" onValidSubmit={(e,v) => { this.handleValidSubmit(e,v) }}>
                                    <div className="form-group">
                                        <div name="username" style={{fontWeight:600}}>Name</div>
                                        <div label="Name">admin</div>
                                         
                                    </div>
                                    <div className="form-group">
                                         {/* <AvField name="username" label="Email" value={this.state.name} className="form-control" placeholder="Enter UserName" type="text" required />
                                         <AvField name="idx"  value={this.state.idx}  type="hidden"  /> */}
                                             <div name="username" style={{fontWeight:600}}>Email</div>
                                        <div label="Name">admin</div>
                                    </div>
                                    <div className="form-group">
                                    <div name="username" style={{fontWeight:600}}>Date of Birth</div>
                                        <div label="Name">DD/MM/YYYY</div>
                                         {/* <AvField name="username" label="Date of Birth" value={this.state.name} className="form-control" placeholder="Enter UserName" type="text" required />
                                         <AvField name="idx"  value={this.state.idx}  type="hidden"  /> */}
                                    </div>
                                    <div className="form-group">
                                    <div name="username" style={{fontWeight:600}}>Chat Groups</div>
                                        <div label="Name">admin</div>
                                    </div>
                                    <div className="form-group" style={{height:100}}>
                                         {/* <AvField name="username" style={{height:100}} label="About Me" value={this.state.name} className="form-control" placeholder="Enter UserName" type="text" required />
                                         <AvField name="idx"  value={this.state.idx}  type="hidden"  /> */}
                                             <div name="username" style={{fontWeight:600}}>About</div>
                                        <div label="Name">admin</div>
                                    </div>
                                     <div className="mt-4">
                                         <Button type="submit" color="danger">Back</Button>
                                    </div>
                               </AvForm>
                            
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

export default EcommerceProductDetail;