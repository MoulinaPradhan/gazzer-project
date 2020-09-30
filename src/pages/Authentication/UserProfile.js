import React, { Component } from 'react';
import { Container, Row, Col, Card,Alert, CardBody,Media, Button } from "reactstrap";

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

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {email : "", name : "", idx : 1 }

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.props.editProfile(values);
    }

    componentDidMount()
    {
        if(localStorage.getItem("authUser"))
           {
             const obj = JSON.parse(localStorage.getItem("authUser"));
             if(process.env.REACT_APP_DEFAULTAUTH === 'firebase')
             { 
                this.setState({name :obj.displayName,email :obj.email,idx : obj.uid  });
             }
              else if((process.env.REACT_APP_DEFAULTAUTH === 'fake') || (process.env.REACT_APP_DEFAULTAUTH === 'jwt'))
             {
                this.setState({name :obj.username,email :obj.email,idx : obj.uid  });
             }               
           }
    }
    componentDidUpdate(prevProps, prevState)
    {
        if(this.props !== prevProps)
        {
            const obj = JSON.parse(localStorage.getItem("authUser"));
             if(process.env.REACT_APP_DEFAULTAUTH === 'firebase')
             { 
                this.setState({name :obj.displayName,email :obj.email,idx : obj.uid  });
             }
              else if((process.env.REACT_APP_DEFAULTAUTH === 'fake') || (process.env.REACT_APP_DEFAULTAUTH === 'jwt'))
             {
                this.setState({name :obj.username,email :obj.email,idx : obj.uid  });
             }         
        }
    }

    render() {

        return (
           <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumb title="Skote" breadcrumbItem="Details" />

                         <Row>
                            <Col lg="12">
                             {this.props.error && this.props.error ? <Alert color="danger">{this.props.error}</Alert> : null}
                             {this.props.success && this.props.success ? <Alert color="success">{this.props.success}</Alert> : null}

                                {/* <Card>
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
                                </Card> */}
                            </Col>
                        </Row>

                        {/* <h4 className="card-title mb-4">Change UserName</h4> */}

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
                                             <div name="username" style={{fontWeight:600}}>About Me</div>
                                        <div label="Name">admin</div>
                                    </div>
                                     <div className="mt-4">
                                         <Button type="submit" color="danger">Back to Profile</Button>
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
            
const mapStatetoProps = state => {
    const { error,success } = state.Profile;
    return { error,success };
}

export default withRouter(connect(mapStatetoProps, { editProfile })(UserProfile));

