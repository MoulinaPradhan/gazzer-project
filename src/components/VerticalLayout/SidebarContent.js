import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
    }

    initMenu() {
            new MetisMenu("#side-menu");

            var matchingMenuItem = null;
            var ul = document.getElementById("side-menu");
            var items = ul.getElementsByTagName("a");
            for (var i = 0; i < items.length; ++i) {
                if (this.props.location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
            <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title">{this.props.t('Menu')}</li>
                    <li>
                        <Link to="/#" className="waves-effect">
                            <i className="bx bx-home-circle"></i><span className="badge badge-pill badge-info float-right">03</span>
                            <span>{this.props.t('Dashboards')}</span>
                        </Link>
                        {/* <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/dashboard">{this.props.t('Default')}</Link></li>
                            <li><Link to="/dashboard-saas">{this.props.t('Saas')}</Link></li>
                            <li><Link to="/dashboard-crypto">{this.props.t('Crypto')}</Link></li>
                        </ul> */}
                    </li>

                    <li className="menu-title">{this.props.t('Apps')}</li>

                    <li>
                        <Link to="/login" className=" waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>{this.props.t('Login')}</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="chat" className=" waves-effect">
                            <i className="bx bx-chat"></i>
                            <span className="badge badge-pill badge-success float-right">{this.props.t('New')}</span>
                            <span>{this.props.t('Chat')}</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-store"></i>
                            <span>{this.props.t('Profiles')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/contacts-profile">{this.props.t('Summary')}</Link></li>
                            <li><Link to="/#">{this.props.t('Details')}</Link></li>
                            {/* <li><Link to="ecommerce-orders">{this.props.t('Orders')}</Link></li> */}
                            {/* <li><Link to="ecommerce-customers">{this.props.t('Customers')}</Link></li>
                            <li><Link to="ecommerce-cart">{this.props.t('Cart')}</Link></li>
                            <li><Link to="ecommerce-checkout">{this.props.t('Checkout')}</Link></li>
                            <li><Link to="ecommerce-shops">{this.props.t('Shops')}</Link></li>
                            <li><Link to="ecommerce-add-product">{this.props.t('Add Product')}</Link></li>  */}
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-bitcoin"></i>
                            <span>{this.props.t('Videos ')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/contacts-profile">{this.props.t('Summary')}</Link></li>
                            <li><Link to="/#">{this.props.t('Details')}</Link></li>
                            {/* <li><Link to="crypto-buy-sell">{this.props.t('Buy/Sell')}</Link></li>
                            <li><Link to="crypto-exchange">{this.props.t('Exchange')}</Link></li>
                            <li><Link to="crypto-lending">{this.props.t('Lending')}</Link></li>
                            <li><Link to="crypto-orders">{this.props.t('Orders')}</Link></li>
                            <li><Link to="crypto-kyc-application">{this.props.t('KYC Application')}</Link></li>
                            <li><Link to="crypto-ico-landing">{this.props.t('ICO Landing')}</Link></li> */}
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-envelope"></i>
                            <span>{this.props.t('Email')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/#">{this.props.t('Inbox')}</Link></li>
                            <li><Link to="/#">{this.props.t('Read Email')} </Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-receipt"></i>
                            <span>{this.props.t('Files')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/contacts-profile">{this.props.t('Summary')}</Link></li>
                            <li><Link to="/#">{this.props.t('Details')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-briefcase-alt-2"></i>
                            <span>{this.props.t('Messages')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/contacts-profile">{this.props.t('Summary')}</Link></li>
                            <li><Link to="/#">{this.props.t('Details')}</Link></li>
                            {/* <li><Link to="/contacts-profile">{this.props.t('Project Overview')}</Link></li> */}
                            {/* <li><Link to="projects-create">{this.props.t('Create New')}</Link></li>  */}
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-task"></i>
                            <span>{this.props.t('Meetings')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/contacts-profile">{this.props.t('Summary')}</Link></li>
                            <li><Link to="/#">{this.props.t('Details')}</Link></li>
                            {/* <li><Link to="tasks-create">{this.props.t('Create Task')}</Link></li>  */}
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bxs-user-detail"></i>
                            <span>{this.props.t('Rooms')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="/contacts-profile">{this.props.t('Summary')}</Link></li>
                            <li><Link to="/#">{this.props.t('Details')}</Link></li>
                            {/* <li><Link to="contacts-profile">{this.props.t('Profile')}</Link></li>  */}
                        </ul>
                    </li>

                    {/* <li className="menu-title">Pages</li> */}
                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-user-circle"></i>
                            <span>{this.props.t('Authentication')}</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to="pages-login">{this.props.t('Login')}</Link></li>
                            <li><Link to="pages-register">{this.props.t('Register')}</Link></li>
                            <li><Link to="pages-forget-pwd">{this.props.t('Forget Password')}</Link></li>
                            <li><Link to="auth-lock-screen">{this.props.t('Lock Screen')}</Link></li>
                        </ul>
                    </li> */}
                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-file"></i>
                            <span>{this.props.t('Utility')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="#">{this.props.t('Starter Page')}</Link></li>
                            <li><Link to="#">{this.props.t('Maintenance')}</Link></li>
                            <li><Link to="#">{this.props.t('Coming Soon')}</Link></li>
                            <li><Link to="#">{this.props.t('Timeline')}</Link></li>
                            <li><Link to="#">{this.props.t('FAQs')}</Link></li>
                            <li><Link to="pages-pricing">{this.props.t('Pricing')}</Link></li> 
                             <li><Link to="pages-404">{this.props.t('Error 404')}</Link></li>
                            <li><Link to="pages-500">{this.props.t('Error 500')}</Link></li>
                        </ul>
                    </li> */}

                    {/* <li className="menu-title">{this.props.t('Components')}</li> */}

                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-tone"></i>
                            <span>{this.props.t('UI Elements')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="ui-alerts">{this.props.t('Alerts')}</Link></li>
                            <li><Link to="ui-buttons">{this.props.t('Buttons')}</Link></li>
                            <li><Link to="ui-cards">{this.props.t('Cards')}</Link></li>
                            <li><Link to="ui-carousel">{this.props.t('Carousel')}</Link></li>
                            <li><Link to="ui-dropdowns">{this.props.t('Dropdowns')}</Link></li>
                            <li><Link to="ui-grid">{this.props.t('Grid')}</Link></li>
                            <li><Link to="ui-images">{this.props.t('Images')}</Link></li>
                            <li><Link to="ui-lightbox">{this.props.t('Lightbox')}</Link></li>
                            <li><Link to="ui-modals">{this.props.t('Modals')}</Link></li>
                            <li><Link to="ui-rangeslider">{this.props.t('Range Slider')}</Link></li>
                            <li><Link to="ui-session-timeout">{this.props.t('Session Timeout')}</Link></li>
                            <li><Link to="ui-progressbars">{this.props.t('Progress Bars')}</Link></li>
                            <li><Link to="ui-sweet-alert">{this.props.t('Sweet-Alert')}</Link></li>
                            <li><Link to="ui-tabs-accordions">{this.props.t('Tabs & Accordions')}</Link></li>
                            <li><Link to="ui-typography">{this.props.t('Typography')}</Link></li>
                            <li><Link to="ui-video">{this.props.t('Video')}</Link></li>
                            <li><Link to="ui-general">{this.props.t('General')}</Link></li>
                            <li><Link to="ui-colors">{this.props.t('Colors')}</Link></li>
                            <li><Link to="ui-rating">{this.props.t('Rating')}</Link></li>
                            <li><Link to="ui-notifications">{this.props.t('Notifications')}</Link></li>
                            <li><Link to="ui-image-cropper">{this.props.t('Image Cropper')}</Link></li>
                        </ul>
                    </li> */}

                    {/* <li>
                        <Link to="/#" className="waves-effect">
                            <i className="bx bxs-eraser"></i>
                            <span className="badge badge-pill badge-danger float-right">6</span>
                            <span>{this.props.t('Forms')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="form-elements">{this.props.t('Form Elements')}</Link></li>
                            <li><Link to="form-validation">{this.props.t('Form Validation')}</Link></li>
                            <li><Link to="form-advanced">{this.props.t('Form Advanced')}</Link></li>
                            <li><Link to="form-editors">{this.props.t('Form Editors')}</Link></li>
                            <li><Link to="form-uploads">{this.props.t('Form File Upload')} </Link></li>
                            <li><Link to="form-xeditable">{this.props.t('Form Xeditable')}</Link></li>
                            <li><Link to="form-repeater">{this.props.t('Form Repeater')}</Link></li>
                            <li><Link to="form-wizard">{this.props.t('Form Wizard')}</Link></li>
                            <li><Link to="form-mask">{this.props.t('Form Mask')}</Link></li>
                        </ul>
                    </li> */}

                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-list-ul"></i>
                            <span>{this.props.t('Tables')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="tables-basic">{this.props.t('Basic Tables')}</Link></li>
                            <li><Link to="tables-datatable">{this.props.t('Data Tables')}</Link></li>
                            <li><Link to="tables-responsive">{this.props.t('Responsive Table')}</Link></li>
                            <li><Link to="tables-editable">{this.props.t('Editable Table')}</Link></li>
                        </ul>
                    </li> */}

                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bxs-bar-chart-alt-2"></i>
                            <span>{this.props.t('Charts')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="apex-charts">{this.props.t('Apex charts')}</Link></li>
                            <li><Link to="chartist-charts">{this.props.t('Chartist Chart')}</Link></li>
                            <li><Link to="chartjs-charts">{this.props.t('Chartjs Chart')}</Link></li>
                            <li><Link to="e-charts">{this.props.t('E Chart')}</Link></li>
                            <li><Link to="tui-charts">{this.props.t('Toast UI Chart')}</Link></li>
                            <li><Link to="sparkline-charts">{this.props.t('Sparkline Chart')}</Link></li>
                            <li><Link to="charts-knob">{this.props.t('Knob Chart')}</Link></li>
                        </ul>
                    </li> */}
                    {/* 
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-aperture"></i>
                            <span>{this.props.t('Icons')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="icons-boxicons">{this.props.t('Boxicons')}</Link></li>
                            <li><Link to="icons-materialdesign">{this.props.t('Material Design')}</Link></li>
                            <li><Link to="icons-dripicons">{this.props.t('Dripicons')}</Link></li>
                            <li><Link to="icons-fontawesome">{this.props.t('Font awesome')}</Link></li>
                        </ul>
                    </li> */}
                    {/* 
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-map"></i>
                            <span>{this.props.t('Maps')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="maps-google">{this.props.t('Google Maps')}</Link></li>
                            <li><Link to="maps-vector">{this.props.t('Vector Maps')}</Link></li>
                            <li><Link to="maps-leaflet">{this.props.t('Leaflet Maps')}</Link></li>
                        </ul>
                    </li> */}
                    {/* 
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-share-alt"></i>
                            <span>{this.props.t('Multi Level')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="true">
                            <li><Link to="#">{this.props.t('Level 1.1')}</Link></li>
                            <li><Link to="#" className="has-arrow">{this.props.t('Level 1.2')}</Link>
                                <ul className="sub-menu" aria-expanded="true">
                                    <li><Link to="#">{this.props.t('Level 2.1')}</Link></li>
                                    <li><Link to="#">{this.props.t('Level 2.2')}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </React.Fragment>
        );
    }
}

export default withRouter(withNamespaces()(SidebarContent));
