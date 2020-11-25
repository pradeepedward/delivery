import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';
import UserProfile from "../../pages/Authentication/UserProfile";

class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enable : "true1"
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


        if(this.props.location.pathname === "/vendor-management") {
            sessionStorage.setItem("identity", "vendor")
        } else if(this.props.location.pathname === "/user-management") {
            sessionStorage.setItem("identity", "user")
        } else if(this.props.location.pathname === "/delivery-management"){
            sessionStorage.setItem("identity", "delivery")
        } else if(this.props.location.pathname === "/order-management"){
            sessionStorage.setItem("identity", "order")
        } else if(this.props.location.pathname === "/report"){
            sessionStorage.setItem("identity", "report")
        } else if(this.props.location.pathname === "/master"){
            sessionStorage.setItem("identity", "master")
        } else {}

        if(this.props.location.pathname === "/restaurant-management") {
            sessionStorage.setItem("subIdentity", "res")
        } else if(this.props.location.pathname === "/homemade-management") {
            sessionStorage.setItem("subIdentity", "homemade")
        } else if(this.props.location.pathname === "/fastfood-management") {
            sessionStorage.setItem("subIdentity", "fastfood")
        } else if(this.props.location.pathname === "/grocery-management") {
            sessionStorage.setItem("subIdentity", "grocery")
        } else {}

        var identity = sessionStorage.getItem("identity")
        var subIdentity = sessionStorage.getItem("subIdentity")

        return (
            <React.Fragment>
                 <div id="sidebar-menu" style = {{display: "none"}}>
                <ul className="metismenu list-unstyled" id="side-menu">
                    {/* <li className="menu-title">{this.props.t('Menu') }</li> */}

                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="fas fa-shopping-cart"></i>
                            <span>{this.props.t('Order Management') }</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="true">
                            <li><Link to="orders-dashboard">{this.props.t('Order Dashboard') }</Link></li>
                            <li><Link to="new-orders">{this.props.t('New Order') }</Link></li>
                            <li><Link to="processing-orders">{this.props.t('Processing Order') }</Link></li>
                            <li><Link to="orders-pickup">{this.props.t('Order Pickup') }</Link></li>
                            <li><Link to="delivered-orders">{this.props.t('Delivered Order') }</Link></li>
                            <li><Link to="cancelled-orders">{this.props.t('Cancelled Order') }</Link></li>
                        </ul>
                    </li> */}

                    {/* <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-bitcoin"></i>
                            <span>{this.props.t('Crypto')}</span>
                        </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><Link to="crypto-wallet">{this.props.t('Wallet')}</Link></li>
                                <li><Link to="crypto-buy-sell">{this.props.t('Buy/Sell')}</Link></li>
                                <li><Link to="crypto-exchange">{this.props.t('Exchange')}</Link></li>
                                <li><Link to="crypto-lending">{this.props.t('Lending')}</Link></li>
                                <li><Link to="crypto-orders">{this.props.t('Orders')}</Link></li>
                                <li><Link to="crypto-kyc-application">{this.props.t('KYC Application')}</Link></li>
                                <li><Link to="crypto-ico-landing">{this.props.t('ICO Landing')}</Link></li>
                            </ul>
                    </li> */}

                </ul>
            </div>
            {identity === "vendor" && subIdentity === "res" ?
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title"><b>{this.props.t('Restaurant') }</b></li>
                    <li>
                        <Link className="waves-effect" to="add-restaurant">
                            <i className="fas fa-utensils"></i>{this.props.t('Add Restaurant')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="restaurant-list">
                            <i className="fas fa-list"></i>{this.props.t('Restaurant List')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="food-management">
                            <i className="fas fa-hamburger"></i>{this.props.t('Food Management')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="restaurant-document">
                            <i className="fas fa-book"></i>{this.props.t('Restaurant Documents')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="restaurant-payouts">
                            <i className="fas fa-chart-line"></i>{this.props.t('Restaurant Payouts')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="restaurant-approvals">
                            <i className="fas fa-check-circle"></i>{this.props.t('Restaurant Approvals')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="restaurant-report">
                            <i className="fas fa-chart-pie"></i>{this.props.t('Restaurant Reports')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}

                {identity === "vendor" && subIdentity === "homemade" ?
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title"><b>{this.props.t('Homemade') }</b></li>
                    <li>
                        <Link className="waves-effect" to="add-homemade">
                            <i className="fas fa-utensils"></i>{this.props.t('Add Homemade')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="homemade-list">
                            <i className="fas fa-list"></i>{this.props.t('Homemade List')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="homemade-food-management">
                            <i className="fas fa-hamburger"></i>{this.props.t('Food Management')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="homemade-document">
                            <i className="fas fa-book"></i>{this.props.t('Homemade Documents')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="homemade-payouts">
                            <i className="fas fa-chart-line"></i>{this.props.t('Homemade Payouts')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="homemade-approvals">
                            <i className="fas fa-check-circle"></i>{this.props.t('Homemade Approvals')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="homemade-report">
                            <i className="fas fa-chart-pie"></i>{this.props.t('Homemade Reports')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}

                {identity === "vendor" && subIdentity === "fastfood" ?
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title"><b>{this.props.t('Fast Food') }</b></li>
                    <li>
                        <Link className="waves-effect" to="add-fastfood">
                            <i className="fas fa-utensils"></i>{this.props.t('Add FastFood')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="fastfood-list">
                            <i className="fas fa-list"></i>{this.props.t('FastFood List')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="fastfood-food-management">
                            <i className="fas fa-hamburger"></i>{this.props.t('Food Management')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="fastfood-document">
                            <i className="fas fa-book"></i>{this.props.t('FastFood Documents')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="fastfood-payouts">
                            <i className="fas fa-chart-line"></i>{this.props.t('FastFood Payouts')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="fastfood-approvals">
                            <i className="fas fa-check-circle"></i>{this.props.t('FastFood Approvals')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="fastfood-report">
                            <i className="fas fa-chart-pie"></i>{this.props.t('FastFood Reports')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}

                {identity === "vendor" && subIdentity === "grocery" ?
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title"><b>{this.props.t('Grocery') }</b></li>
                    <li>
                        <Link className="waves-effect" to="add-grocery">
                            <i className="fas fa-utensils"></i>{this.props.t('Add Grocery')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="grocery-list">
                            <i className="fas fa-list"></i>{this.props.t('Grocery List')}
                        </Link>
                    </li>
                    {/* <li>
                        <Link className="waves-effect" to="food-management">
                            <i className="fas fa-hamburger"></i>{this.props.t('Food Management')}
                        </Link>
                    </li> */}
                    <li>
                        <Link className="waves-effect" to="grocery-document">
                            <i className="fas fa-book"></i>{this.props.t('Grocery Documents')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="grocery-payouts">
                            <i className="fas fa-chart-line"></i>{this.props.t('Grocery Payouts')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="grocery-approvals">
                            <i className="fas fa-check-circle"></i>{this.props.t('Grocery Approvals')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="grocery-report">
                            <i className="fas fa-chart-pie"></i>{this.props.t('Grocery Reports')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}

                {identity === "user" ? 
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li>
                        <Link className="waves-effect" to="user-orders">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Orders')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="user-profile">
                            <i className="fas fa-users"></i>{this.props.t('User Profile')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="user-blog">
                            <i className="fas fa-blog"></i>{this.props.t('Blog')}
                        </Link>
                    </li>
                    {/* <li>
                        <Link className="waves-effect" to="webuser-management">
                            <i className="fas fa-user"></i>{this.props.t('WebUser Management')}
                        </Link>
                    </li> */}
                    </ul>
                </div>: null}
                {identity === "delivery" ? 
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li>
                        <Link className="waves-effect" to="add-delivery-boy">
                            <i className="fas fa-biking"></i>{this.props.t('Add Delivery Boy')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-boy-list">
                            <i className="fas fa-list"></i>{this.props.t('Delivery Boy List')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-partner-profile">
                            <i className="fas fa-user"></i>{this.props.t('Delivery Partner Profile')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-boy-document">
                            <i className="fas fa-book"></i>{this.props.t('Documents')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-order-completed">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Order Completed')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-payouts">
                            <i className="fas fa-chart-line"></i>{this.props.t('Payouts')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-boy-report">
                            <i className="fas fa-chart-pie"></i>{this.props.t('Reports')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}
                {identity === "order" ? 
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li>
                        <Link className="waves-effect" to="new-orders">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('New Order')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="processing-orders">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Processing Order')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="orders-pickup">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Order Pickup')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivered-orders">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Delivery Order')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="cancelled-orders">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Cancelled Order')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="refund-orders">
                            <i className="fas fa-shopping-cart"></i>{this.props.t('Refund Order')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}
                {identity === "report" ? 
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li>
                        <Link className="waves-effect" to="restaurant-report">
                            <i className="fas fa-list"></i>{this.props.t('Restaurant')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="delivery-boy-report">
                            <i className="fas fa-list"></i>{this.props.t('Delivery')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="users-report">
                            <i className="fas fa-list"></i>{this.props.t('User')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="orders-report">
                            <i className="fas fa-list"></i>{this.props.t('Orders')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}
                {identity === "master" ? 
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                    <li>
                        <Link className="waves-effect" to="city-management">
                            <i className="fas fa-map-marker-alt"></i>{this.props.t('City Management')}
                        </Link>
                    </li>
                    {/* <li>
                        <Link className="waves-effect" to="master-zone">
                            <i className="fas fa-city"></i>{this.props.t('Zone')}
                        </Link>
                    </li> */}
                    <li>
                        <Link className="waves-effect" to="master-banners">
                            <i className="fas fa-image"></i>{this.props.t('Banners')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="restaurant-promocode">
                            <i className="fas fa-percent"></i>{this.props.t('Promo Code')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="master-payment-gateway">
                            <i className="fas fa-credit-card"></i>{this.props.t('Payment Gateway')}
                        </Link>
                    </li>
                    <li>
                        <Link className="waves-effect" to="add-webuser">
                            <i className="fas fa-user"></i>{this.props.t('Sub Admin')}
                        </Link>
                    </li>
                    </ul>
                </div>: null}
            </React.Fragment>
        );
    }
}

export default withRouter(withNamespaces()(SidebarContent));
