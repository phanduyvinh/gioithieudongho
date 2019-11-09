import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class HeaderAdmin extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={`/controlpanel`}>
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Bảng điều khiển</div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <Link className="nav-link" to={`/controlpanel`}>
                <i className="fas fa-fw fa-tachometer-alt" />
                <span><b>Tổng quan</b></span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to={`/add`}>
                <i className="fab fa-product-hunt"></i>
                <span><b>Thêm sản phẩm</b></span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to={`/productlist`}>
                <i className="fab fa-intercom"></i>
                <span><b>Danh sách sản phẩm</b></span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to={`/gopylist`}>
                <i className="fas fa-sticky-note"></i>
                <span><b>Góp ý</b></span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to={`/`}>
                <i className="fas fa-sticky-note"></i>
                <span><b>Về trang chủ</b></span></Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
            </ul>
        );
    }
}

export default HeaderAdmin;