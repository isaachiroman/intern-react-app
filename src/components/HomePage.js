import React, { Component } from 'react';
import Nav from '../page/Nav';
import HomeInput from '../page/HomeInput';
import HeaderHome from '../layout/headers/HeaderHome';

class Homepage extends Component {
    render() {
        return (
            <>
                <div>
                    <HeaderHome/>
                    <div className="section-homepage">
                        <div className="container-fluid homepage__container">
                        <Nav/>
                        <div className="homepage-header_mobile d-lg-none">
                            <div className="header_mobile__container">
                            <div className="header_mobile__content d-flex justify-content-between">
                                <div className="menu_mobile__drawer">
                                <div className="mobile-drawer__content d-flex align-items-center">
                                    <div className="drawer-toggler" data-toggle="modal" data-target="#drawerToggleExternalContent" aria-controls="drawerToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><img src="../../assets/img/icon-drawer.png" alt="" /></div>
                                    <div className="modal fadeInRight" id="drawerToggleExternalContent" tabIndex={-1} role="dialog" aria-labelledby="drawerToggleExternalContent" aria-hidden="true">
                                    <div className="modal-content">
                                        <nav className="mobile-navbar">
                                        <div className="mobile-navbar__content"><a className="navbar-brand" href="/"><img src="../../assets/img/asset-logo.png" alt="" /></a>
                                            <div className="navbar__items">
                                            <div className="navbar--item"><a href="/ket-qua/thong-tin">Thông tin</a></div>
                                            <div className="navbar--item"><a href="/ban-do">Bản đồ</a></div>
                                            <div className="navbar--item"><a href="/ket-qua/bang-gia">Bảng giá</a></div>
                                            <div className="navbar--item"><a href="#">Danh bạ</a></div>
                                            <div className="navbar--item"><a href="#">Tài nguyên</a></div>
                                            <div className="navbar--item"><a href="#">Hỏi đáp</a></div>
                                            </div>
                                        </div>
                                        </nav>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="menu_mobile__items d-flex align-items-center">
                                <div className="menu_mobile--item dropdown dropdown__menu-tool">
                                    <div className="dropdown-toggle d-flex" data-toggle="dropdown"><img className="img_menu" src="../../assets/img/Group 1.png" alt="" /></div>
                                    <div className="dropdown-menu menu-tool">
                                    <div className="dropdown-item"><a href="#"><img src="../../assets/img/Group 1569.png" alt="" /><span className="menu-tool--text">
                                            Tính toán khoản
                                            vay</span></a></div>
                                    <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="menu-tool--text">Tính toán hiệu quả dự án</span></a></div>
                                    <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="menu-tool--text">Tài chính cá nhân</span></a></div>
                                    </div>
                                </div>
                                <div className="menu_mobile--item">
                                    <div className="menu-notify"><a className="d-flex" href="#"><img className="img_menu" src="../../assets/img/Group 22.png" alt="" /></a></div>
                                </div>
                                <div className="menu_mobile--item"><a className="btn-login" href="/dang-nhap"><img src="../../assets/img/icon-avatar.png" alt="" /></a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="homepage-body">
                            <div className="homepage-body__container">
                            <div className="homepage-body__content">
                                <div className="center d-flex justify-content-center align-items-center">
                                <HomeInput/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="homepage__footer layout-footer">
                            <div className="homepage__footer-container">
                            <div className="hp-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                                <div className="hp-footer--link layout-footer--link"><a href="#">Giới thiệu</a></div>
                                <div className="hp-footer--link layout-footer--link"><a href="#">Hướng dẫn</a></div>
                            </div>
                            {/* Desktop Display*/}
                            <div className="hp-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                                <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                                <marquee>
                                    <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                </marquee>
                                </div>
                                <div className="hp-footer__quick-view layout-footer--quick-view w-50">
                                <marquee>
                                    <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                </marquee>
                                </div>
                            </div>
                            {/* Mobile Display*/}
                            <div className="hp-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                                <div className="hp-footer__quick-view layout-footer--quick-view">
                                <marquee>
                                    <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                    <div className="quick-view__content d-inline-flex"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                </marquee>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </>
        );
    }
}

export default Homepage;