import React, { Component } from "react";
import { Card, Row, Col, CardBody, CardTitle, CardSubtitle,Container ,Button} from "reactstrap";
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class UiVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="Video" breadcrumbItem="Details" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        {/* <CardTitle>Responsive embed video 16:9</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="test" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 21:9</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe title="test1" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 4:3</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-4by3">
                                            <iframe title="tes2" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 1:1</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-1by1">
                                            <iframe title="test3" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div> */}
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
                                             <div name="username" style={{fontWeight:600}}>About Me</div>
                                        <div label="Name">admin</div>
                                    </div>
                                     <div className="mt-4">
                                         <Button type="submit" color="danger">Back to Profile</Button>
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

export default UiVideo;
