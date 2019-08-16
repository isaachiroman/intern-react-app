import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResAddressResult extends Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <div className="rp-search-result-item">
                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                    <div className="sr-item__poster">
                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                        <div className="box-user">
                        <div className="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)'}}>
                        </div>
                        <div className="name">Thanh Huynh</div>
                        <div className="pos">
                            <span className="icon chuyengia">
                            <img src="../../assets/img/handshake.svg" alt="" />
                            </span>
                            <span className="thin">[Chuyên gia</span> <span className="rating">3,5+ <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star-half-o" /></span>
                            ]
                        </div>
                        <div className="friend pos">
                            <span className="icon">
                            <img src="../../assets/img/add-friend.svg" alt="" />
                            </span>
                            Bạn chung với <span className="thick">Trung Hoàng</span>, <span className="thick">Thuong Huỳnh</span>.
                        </div>
                        <div className="actions">
                            <button className="btn">Nhắn tin</button>
                            <button className="btn">Kết bạn</button>
                        </div>
                        </div>
                    </div>
                    <div className="sr-item__details">
                        <div className="item-details__container">
                        <div className="item-details__title">
                            <div className="ids-title__content">
                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset data team</a>
                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                            </div>
                            <p className="mb-0 ids-title--category">đã đăng một <a className="ids-title--category" href="/ket-qua/thong-tin">   </a> </p>
                            <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
                            </div>
                        </div>
                        <div className="item-details__post">
                            <div className="realestate-item">
                            <div className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                <img src="../../assets/img/125x130.jpg" alt="" />
                                <div className="like actived fa fa-heart-o" />
                            </div>
                            <div className="post-content" style={{paddingBottom: '5px'}}>
                                <div className="top">Madison 15 Thi Sách</div>
                                <div className="location">711014P0001- Hồ Thị Kỷ, Phường 4, Quận 6, Hồ Chí Minh</div>
                                <div className="actions">
                                <button className="btn">
                                    <img src="../../assets/img/bxs-edit.svg" alt="" />
                                </button>
                                <button className="btn">
                                    <img src="../../assets/img/earth.svg" alt="" />
                                </button>
                                <button className="btn">
                                    <img src="../../assets/img/baseline-map-24px.svg" alt="" />
                                </button>
                                </div>
                                <div className="map">
                                <img src="../../assets/uploads/map.jpg" alt="" />
                                </div>
                                <div className="info -top">
                                <span>Sản phẩm của <strong style={{color: '#3b63a1'}}>Novoland</strong></span>  <span>Bàn giao T2.2010</span>
                                </div>
                                <div className="info -top">
                                <span>Đang làm móng</span>  <span>Giấy phép xây dựng</span>
                                </div>
                                <div className="info -ban">
                                <span>Avalue: <strong>24.567m <sub className="subtop">2</sub></strong></span>  
                                <span><strong>2 Blocks</strong></span>
                                <span><strong>1.200 CH</strong></span>
                                <span><strong>- - SH</strong></span>
                                <span><strong>120 OFT</strong></span>
                                <span><strong>8.467m <sub className="subtop">2</sub></strong></span>
                                <span><strong>TMDV</strong></span>
                                </div>
                                <div className="info">
                                <span><strong>47,2 triệu/m</strong> <sub className="subtop">2</sub></span>  <span>Trả trước: <strong>700 triệu</strong></span><span>Thanh toán: <strong>13,2 triệu/tháng</strong></span>
                                </div>
                            </div>
                            </div>      
                        </div>
                        <div className="item-details__actions">
                            <div className="action-buttons-bottom">
                            <a href="#" className="btn -marked">
                                <span className="fa fa-star icon" /> 40
                            </a>
                            <a href="#" className="btn -comment">
                                <span className="fa fa-comment-o icon" /> 40
                            </a>
                            <a href="#" className="btn -liked">
                                <span className="-ap  icon-like2 icon" /> 40
                            </a>
                            <a href="#" className="btn -share">
                                <span className="-ap  icon-share4 icon" /> 40
                            </a>
                            <a href="#" className="btn -mail">
                                <span className="-ap  icon-mail6 icon" /> 10
                            </a>
                            <a href="#" className="btn -mail">
                                <span className="-ap   icon-add_shopping_cart icon" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResAddressResult;