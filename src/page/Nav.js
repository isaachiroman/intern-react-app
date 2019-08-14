import React, { Component } from 'react';
import { Route, Link, Router } from 'react-router-dom';

class nav extends Component {
    render() {
        return (
            <>
            <Route>
                <div className="homepage__header layout-header d-none d-lg-block">
                    <div className="homepage__header-container layout-header__container">
                        <div className="homepage__header-top layout-header__top">
                            <div className="d-flex align-items-center hp-header-top__container lh-top__container">
                                <div className="ml-auto hp-header-top__menu lh-top__menu">
                                    <div className="d-flex align-items-center ht-menu__items">
                                        <div className="ht-menu--item"><Link to="/ket-qua/thong-tin">Thông tin</Link></div>
                                        <div className="ht-menu--item"><Link to="/ban-do">Bản đồ</Link></div>
                                        <div className="ht-menu--item"><Link to="/ket-qua/bang-gia">Bảng giá</Link></div>
                                        <div className="ht-menu--item dropdown">
                                            <div className="dropdown-toggle" data-toggle="dropdown">Thêm</div>
                                            <div className="dropdown-menu ht-menu__add">
                                                <div className="dropdown-item"><Link to="#">Danh bạ</Link></div>
                                                <div className="dropdown-item"><Link to="#">Tài nguyên</Link></div>
                                                <div className="dropdown-item"><Link to="#">Hỏi đáp</Link></div>
                                            </div>
                                        </div>
                                        <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                            <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt="" /></div>
                                            <div className="menu-tools__dropdown-menu dropdown-menu">
                                                <div className="mt--dropdown-item dropdown-item"><Link to="#"><img src="../../../assets/img/Group 1569.png" alt="" /><span className="ht-menu--text">Tính toán khoản vay</span></Link></div>
                                                <div className="mt--dropdown-item dropdown-item"><Link to="#"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="ht-menu--text">
                                                    Tính
                                                toán hiệu quả dự án</span></Link></div>
                                                <div className="mt--dropdown-item dropdown-item"><Link to="#"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="ht-menu--text">Tài chính cá nhân</span></Link></div>
                                            </div>
                                        </div>
                                        <div className="ht-menu--item">
                                            <div className="ht__menu-notify"><Link to="#"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt="" /></Link></div>
                                        </div>
                                        <div className="ht-menu--item"><Link className="ht-menu__login menu-tools--btn-login btn btn-primary" to="/dang-nhap">Đăng nhập</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                </Route>
            </>
        );
    }
}

export default nav;