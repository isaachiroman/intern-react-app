import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPostResult from './Searchresult/SearchPostResult';

class Search extends Component {
   
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }
    render() {
        
        const searchResult = this.props.data.map((item, index) => {
            if (item.type === 'post') {
                return <SearchPostResult key={index} item={item}/>
            }
            // else if (item.type === 'product') {
            //     return <SearchProductResult key={index} item={item}/>
            // }
            // else if (item.type === 'res_address') {
            //     return <SearchResAddresstResult key={index} item={item}/>
            // }
           
        })
        // console.log(searchResult)
        console.log(this.props.data)
        return (
            <>
                <div>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>Trang kết quả</title>
                    {/* VENDORS STYLES*/}
                    <link rel="stylesheet" href="../../vendor/ap8/css/style.css" />
                    <link rel="stylesheet" href="../../vendor/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="../../vendor/bootstrap/css/bootstrap.min.css" />
                    {/* INCLUDES STYLES*/}
                    <link rel="stylesheet" href="../../assets/stylesheets/index.css" />
                    <link rel="stylesheet" href="../../assets/stylesheets/pages/_resultpages.css" />
                    <link rel="stylesheet" href="../../assets/stylesheets/partials/map/filter-bar.css" />
                    <link rel="stylesheet" href="../../assets/stylesheets/partials/map/bootstrap-tagsinput.css" />
                    <link rel="stylesheet" href="../../assets/stylesheets/partials/chat/index.css" />
                    {/* INCLUDES SCRIPTS*/}
                    <section className="section__result-pages">
                        <div className="container-fluid result-pages__container">
                        <div className="result-pages__header layout-header">
                            <div className="result-pages__header-container layout-header__container">
                            <div className="result-pages__header-top layout-header__top">
                                <div className="d-flex align-items-center rp-header-top__container lh-top__container">
                                <div className="rp-header-top__logo lh-top__logo">
                                    <div className="header-top--logo lh-top--logo"><a href="/"><img src="../../../assets/img/icon-asset.png" alt="" /></a></div>
                                </div>
                                <div className="rp-header-top__search-input lh-top__search-input">
                                    <div className="search-input">
                                    <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                                        <input className="form-control" id="autoComplete" type="text" placeholder="Search ..." tabIndex={1} />
                                    </div>
                                    </div>
                                </div>
                                <div className="ml-auto rp-header-top__menu lh-top__menu">
                                    <div className="d-flex align-items-center ht-menu__items">
                                    <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                                        <div className="menu-tools__btn-toggle dropdown-toggle" data-toggle="dropdown"><img className="ht-menu--icon" src="../../../assets/img/Group 1.png" alt="" /></div>
                                        <div className="menu-tools__dropdown-menu dropdown-menu">
                                        <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/Group 1569.png" alt="" /><span className="ht-menu--text">
                                                Tính
                                                toán
                                                khoản
                                                vay</span></a></div>
                                        <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="ht-menu--text">
                                                Tính
                                                toán hiệu quả dự án</span></a></div>
                                        <div className="mt--dropdown-item dropdown-item"><a href="#"><img src="../../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="ht-menu--text">Tài chính cá nhân</span></a></div>
                                        </div>
                                    </div>
                                    <div className="ht-menu--item">
                                        <div className="ht-menu__notify"><a href="#"><img className="ht-menu--icon" src="../../assets/img/Group 22.png" alt="" /></a></div>
                                    </div>
                                    <div className="ht-menu--item"><a className="ht-menu__login menu-tools--btn-login" href="/dang-nhap"><img className="ht-menu--icon ht-menu--icon-avatar" src="../../assets/img/icon-avatar.png" alt="" /></a></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="result-pages__header-navigation">
                                <div className="rp-header-navigation header-navigation__container">
                                <div className="header-navigation__items d-flex">
                                    <div className="header-navigation--item is-actived"><a className="hn-item--text" href="/ket-qua">Tất cả</a></div>
                                    <div className="header-navigation--item"><a className="hn-item--text" href="/ket-qua/thong-tin">Thông tin</a></div>
                                    <div className="header-navigation--item"><a className="hn-item--text" href="/ban-do">Bản đồ</a></div>
                                    <div className="header-navigation--item"><a className="hn-item--text" href="/ket-qua/bang-gia">Bảng giá</a></div>
                                    <div className="header-navigation--item dropdown">
                                    <div className="hn-item--text dropdown-toggle" data-toggle="dropdown">Thêm <span className="fa icon" /></div>
                                    <div className="dropdown-menu hn-menu__add">
                                        <div className="dropdown-item"><a href="#">Danh bạ</a></div>
                                        <div className="dropdown-item"><a href="#">Tài nguyên</a></div>
                                        <div className="dropdown-item"><a href="#">Hỏi đáp</a></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="result-pages__body">
                            <div className="result-pages__body-container container">
                            <div className="result-pages__search-result">
                                <div className="rp-search-result__header">
                                <div className="text-result">Khoảng <strong>1.782</strong> kết quả</div>
                                <div className="search-result__header-map">
                                    <div className="header-map__container">
                                    <div className="header-map__main">
                                        <div className="header-map--map">
                                        <div className="header-map__map-group"><img src="../../assets/img/result-map.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                    <div className="header-map__details">
                                        <div className="map-details--name"><span>Lý Chính Thắng</span></div>
                                        <div className="map-details--address"><span>Quận 3, Tp Hồ Chí Minh</span></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="rp-search-result__items">
                                {/* SEARCH RESULT ITEM*/}
                                <div className="rp-search-result-item">
                                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/Rectangle 97.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                        <div className="item-details__title">
                                            <div className="ids-title__content">
                                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset News</a>
                                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 4,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                            </div>
                                            <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Thông tin</a></p>
                                            <p className="mb-0 ids-title--date-posted">15 ngày trước</p>
                                            </div>
                                        </div>
                                        <div className="item-details__post">
                                            <div className="ids-post--title"><a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện</a></div>
                                            <div className="ids-post--content"><span>
                                                Ngày 10-12/05: Có 123 thông báo kế hoạch lựa chọn nhà thầu chậm .... 1527/QĐ-UBND ngày
                                                14/02/2019; KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng
                                                …. cho dự án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc,
                                                Quyết Thắng, Tân ...</span></div>
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
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                { searchResult }
                                {/* SEARCH RESULT ITEM*/}
                                <div className="rp-search-result-item">
                                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                        <div className="item-details__title">
                                            <div className="ids-title__content">
                                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Duc Le</a>
                                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                            </div>
                                            <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Thông tin</a></p>
                                            <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
                                            </div>
                                        </div>
                                        <div className="item-details__post">
                                            <div className="ids-post--title"><a href="#">Lý Chính Thắng khu đô thị tương lai đang trong giai đoạn hoàn thiện</a></div>
                                            <div className="ids-post--content"><span>
                                                Ngày 10-12/05: Có 123 thông báo kế hoạch lựa chọn nhà thầu chậm .... 1527/QĐ-UBND ngày
                                                14/02/2019; KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng
                                                …. cho dự án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc,
                                                Quyết Thắng, Tân ...</span></div>
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
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="rp-search-result-item">
                                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                        <div className="item-details__title">
                                            <div className="ids-title__content">
                                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset data team</a>
                                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                            </div>
                                            <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Nhà riêng</a> cùng với <a href="#" className="ids-title--category">Homekeys 97891</a> cập nhật trạng thái <span className="red bold">Bán</span></p>
                                            <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
                                            </div>
                                        </div>
                                        <div className="item-details__post">
                                            <div className="realestate-item">
                                            <div className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                                <img src="../../assets/img/125x130.jpg" alt="" />
                                                <div className="like  fa fa-heart-o" />
                                            </div>
                                            <div className="post-content">
                                                <div className="top"><span>2,66 tỷ</span>  <span className="#" style={{color: '#189655'}}>60,78m<sub className="subtop">2</sub></span>  <span className="#" style={{color: '#189655'}}>150,0m<sub className="subtop">2</sub> <em style={{fontWeight: 'normal'}}>sàn</em> </span> </div>
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
                                                <span>Nhà xây dựng</span>  <span>Bàn giao T2.2010</span>  <span>Đã hoàn công</span>  <span>Sổ hồng</span>
                                                </div>
                                                <div className="info -ban">
                                                <span className="status -ban">Bán</span>  <span>Avalue: <strong>2,65 tỷ</strong></span>  <span>Arent: <strong>7,5 triệu/ Tháng</strong></span>
                                                </div>
                                                <div className="info">
                                                <span><strong>47,2 triệu/m</strong> <sub className="subtop">2</sub></span>  <span>Trả trước: <strong>700 triệu</strong></span><span>Thanh toán: <strong>13,2 triệu/tháng</strong></span>
                                                </div>
                                                <div className="location"> <span>Hẻm xe hơi</span> <span>Đường vào 4,5m (LG 5,0m)</span></div>
                                                <div className="bottom-info">
                                                <span>
                                                    <img src="../../assets/img/cauthang.svg" alt="" /> 3 tầng
                                                </span>
                                                <span>
                                                    <img src="../../assets/img/icons/bx-bed.svg" alt="" /> 2
                                                </span>
                                                <span>
                                                    <img src="../../assets/img/icons/bx-bath.svg" alt="" /> 2
                                                </span>
                                                <span>
                                                    <img src="../../assets/img/icons/location.svg" alt="" /> Đông Nam
                                                </span>
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
                                {/* nha rieng end */}
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
                                            <p className="mb-0 ids-title--category">đã đăng một <a className="ids-title--category" href="/ket-qua/thong-tin">Con đường</a> </p>
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
                                <div className="rp-search-result-item">
                                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                        <div className="item-details__title">
                                            <div className="ids-title__content">
                                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset data team</a>
                                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                            </div>
                                            <p className="mb-0 ids-title--category">đã đăng một <a className="ids-title--category" href="/ket-qua/thong-tin">Con đường</a> </p>
                                            <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
                                            </div>
                                        </div>
                                        <div className="item-details__post box-info-line">
                                            <div className="row">
                                            <div className="col-sm-4 col-xs-12">
                                                <div className="name">Lý Chính Thắng</div>
                                                <div className="location">Phường 7, Quận Tân Bình, Hồ Chí Minh</div>
                                                <p className="info-left">Bất động sản trên đường này</p>
                                                <div className="info-row">
                                                <span>
                                                    <span className="value">12</span>
                                                    <span className="key">đất nền</span>
                                                </span>
                                                <span>
                                                    <span className="value">12</span>
                                                    <span className="key">căn hộ</span>
                                                </span>
                                                </div>  
                                            </div>
                                            <div className="col-sm-4 col-xs-12">
                                                <div className="map">
                                                <img src="../../assets/uploads/map.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-xs-12 box-right">
                                                <p className="info-right">Phân đoạn: <span style={{color: '#707070'}}>Toàn đường</span></p>
                                                <div className="info-line">
                                                <span>Hiện hữu 15,5m</span>
                                                <span>Lộ giới 15,5m</span>
                                                </div>
                                                <p className="info-right">Lộ giới 15,5m</p>
                                                <p className="info-right">Avalue: 140tr/m <span className="subtop">2</span></p>
                                                <p className="info-right">Gợi ý kinh doanh: Làm khách sạn</p>
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
                                <div className="rp-search-result-item">
                                    <div className="box-company-info">
                                    <div className="row">
                                        <div className="col-sm-8 col-xs-12">
                                        <div className="company-info">
                                            <div className="avatar">
                                            <span className="img" style={{backgroundImage: 'url(https://dongphucocean.vn/wp-content/uploads/2018/12/logo-dong-phuc-ocean.jpg)'}}>
                                            </span>
                                            </div>
                                            <div className="name">Song Kim Land</div>
                                            <div className="info">89 Lý Chính Thắng Phường 7, Quận Tân Bình, Hồ Chí Minh</div>
                                            <div className="info">(+84) 098176761</div>
                                            <div className="rating-box">
                                            <div className="rating">
                                                <span className="star fa fa-star -good" />
                                                <span className="star fa fa-star -good" />
                                                <span className="star fa fa-star" />
                                                <span className="star fa fa-star" />
                                                <span className="star fa fa-star" />
                                            </div>
                                            <span className="total">540 total reviews</span>
                                            </div>
                                            <div className="actions">
                                            <button className="btn btn-like">
                                                <span className="-ap  icon-like2 icon" /> Thích
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-4 col-xs-12">
                                        <div className="map-canvas">
                                            <img src="../../assets/uploads/map.jpg" alt="" />
                                        </div>
                                        <div className="action-buttons-bottom">
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
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="rp-search-result-item">
                                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                        <div className="item-details__title">
                                            <div className="ids-title__content">
                                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset data team</a>
                                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                            </div>
                                            <p className="mb-0 ids-title--category">đã đăng một <a className="ids-title--category" href="/ket-qua/thong-tin">Con đường</a> </p>
                                            <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
                                            </div>
                                        </div>
                                        <div className="item-details__post box-info-line">
                                            <div className="box-info-tn">
                                            <div className="icon">
                                                <img src="../../assets/img/home/googlepdf@3x.jpg" alt="" />
                                            </div>
                                            <div className="title">Cần thông tin pháp lý khi mua nhà tại quận 2? </div>
                                            <div className="description">Chiều cao, cân nặng hiển thị thông tin từ lịch sử ra. Cho phép sửa đổi và lưu lại thành lịch sử (Thong tin lưu cùng chỗ với thông tin thể lực của bệnh nhân)Bổ sung thêm cột: Thời gian tạo.Danh sách bệnh nhân được order mặc định theo thời gian tạo, từ mới nhất xuống cũ nhất. Khi tạo mới 1 bệnh nhân, mặc định bệnh nhân mới được tạo sẽ được sắp xếp ngày lên đầu tiên</div>
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
                                <div className="rp-search-result-item">
                                    <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                                    <div className="sr-item__poster">
                                        <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                                    </div>
                                    <div className="sr-item__details">
                                        <div className="item-details__container">
                                        <div className="item-details__title">
                                            <div className="ids-title__content">
                                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset data team</a>
                                                <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                            </div>
                                            <p className="mb-0 ids-title--category">đã đăng một <a className="ids-title--category" href="/ket-qua/thong-tin">Hỏi đáp</a> </p>
                                            <p className="mb-0 ids-title--date-posted">57 ngày trước</p>
                                            </div>
                                        </div>
                                        <div className="item-details__post box-info-line">
                                            <div className="box-info-tn">
                                            <div className="icon">
                                                <img src="../../assets/img/hoidap.svg" alt="" />
                                            </div>
                                            <div className="title">Cần thông tin pháp lý khi mua nhà tại quận 2? </div>
                                            <div className="description">Chiều cao, cân nặng hiển thị thông tin từ lịch sử ra. Cho phép sửa đổi và lưu lại thành lịch sử (Thong tin lưu cùng chỗ với thông tin thể lực của bệnh nhân)Bổ sung thêm cột: Thời gian tạo.Danh sách bệnh nhân được order mặc định theo thời gian tạo, từ mới nhất xuống cũ nhất. Khi tạo mới 1 bệnh nhân, mặc định bệnh nhân mới được tạo sẽ được sắp xếp ngày lên đầu tiên</div>
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
                                <div className="rp-search-result__pagination">
                                <div className="search-result__pagination-container container">
                                    <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end"><a className="sr-pagination--btn sr-pagination--previous" href="#">Trước</a>
                                    <div className="sr-pagination__items d-flex align-items-center"><a className="sr-pagination--item is-actived" href="#">1</a><a className="sr-pagination--item" href="#">2</a><a className="sr-pagination--item" href="#">3</a><a className="sr-pagination--item" href="#">4</a><a className="sr-pagination--item" href="#">5</a></div><a className="sr-pagination--btn sr-pagination--next" href="#">Tiếp</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>



                        </div>
                        <div className="result-pages__footer layout-footer">
                            <div className="result-pages__footer-container">
                            <div className="rs-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                                <div className="rs-footer--link layout-footer--link"><a href="#">Giới thiệu</a></div>
                                <div className="rs-footer--link layout-footer--link"><a href="#">Hướng dẫn</a></div>
                            </div>
                            {/* Desktop*/}
                            <div className="rs-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                                <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                                <marquee>
                                    <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 1: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                </marquee>
                                </div>
                                <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                                <marquee>
                                    <div className="quick-view__content"><span><span className="quick-view--title">Tin nhanh 2: </span> Lorem Ipsum. Proin gravida nibh vel velit
                                        auctor aliquet. Aenean
                                        sollicitudin, lorem quis biben <a href="#">Xem nhanh</a></span></div>
                                </marquee>
                                </div>
                            </div>
                            {/* Mobile*/}
                            <div className="rs-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                                <div className="rs-footer__quick-view layout-footer--quick-view">
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
                        {/* CHAT SIDEBAR*/}
                        <div className="d-none d-lg-block chat-sidebar collapsed" id="chat-sidebar">
                        <div className="chat-sidebar__container">
                            <div className="chat-sidebar__content d-flex flex-column justify-content-between">
                            {/* Chat Sidebar Top*/}
                            <div className="chat-sidebar__top">
                                <div className="chat-sidebar--btn-collapse">
                                <div className="btn-expand__content">
                                    <button className="btn btn-chat--expand" id="btn-chat--expand"><img src="../../assets/img/Path 115.png" alt="" /></button>
                                </div>
                                </div>
                            </div>
                            {/* Chat Sidebar Bottom*/}
                            <div className="chat-sidebar__bottom">
                                {/* Chat list*/}
                                <div className="chat-sidebar__list chat-list">
                                <div className="chat-list__container">
                                    <div className="chat-list__content">
                                    <div className="chat-list__contact">
                                        <div className="chat-list--contact-items">
                                        {/* Contact items*/}
                                        <div className="contact-items contact-items__active">
                                            {/* Contact item*/}
                                            <div className="contact-item d-flex justify-content-center">
                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-1.png" alt="" /></div>
                                            <div className="contact-item--name">Lê Ánh Hồng Nga</div>
                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                            </div>
                                            {/* Contact item*/}
                                            <div className="contact-item d-flex justify-content-center">
                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-2.png" alt="" /></div>
                                            <div className="contact-item--name">Peter Parker</div>
                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                            </div>
                                            {/* Contact item*/}
                                            <div className="contact-item d-flex justify-content-center">
                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-3.png" alt="" /></div>
                                            <div className="contact-item--name">Tom Hank</div>
                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                            </div>
                                            {/* Contact item*/}
                                            <div className="contact-item d-flex justify-content-center">
                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-4.png" alt="" /></div>
                                            <div className="contact-item--name">Amy Lee Johnson</div>
                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                            </div>
                                            {/* Contact item*/}
                                            <div className="contact-item d-flex justify-content-center">
                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-5.png" alt="" /></div>
                                            <div className="contact-item--name">Picasa Poo</div>
                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                            </div>
                                        </div>
                                        {/* Contact items*/}
                                        <div className="contact-items contact-items__inactive">
                                            {/* Contact item*/}
                                            <div className="contact-item d-flex justify-content-center">
                                            <div className="contact-item--avatar"><img src="../../assets/img/chat-avt-6.png" alt="" /></div>
                                            <div className="contact-item--name">Jessica Snow</div>
                                            <div className="contact-item--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* Chat message*/}
                                <div className="chat-sidebar__chat-message">
                                <div className="chat-message__container">
                                    <div className="chat-message__content">
                                    <div className="chat-message d-flex justify-content-center align-items-center">
                                        <div className="chat-message--icon"><img src="../../assets/img/chat-message.png" alt="" /></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* Chat Search*/}
                                <div className="chat-sidebar__search-input">
                                <div className="search-input">
                                    <div className="search-input__container">
                                    <div className="search-input__content">
                                        <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="search-icon"><img src="../../assets/img/SVG/search.svg" alt="" /></div>
                                        </div>
                                        <input className="form-control" type="text" placeholder="Tìm kiếm bạn bè" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* Chat pop-up*/}
                                <div id="chat-sidebar__pop-up">
                                <div className="chat-popup">
                                    <div className="chat-popup__container">
                                    <div className="chat-popup__content">
                                        <div className="chat-popup__items" id="chat-popup__items">
                                        <div className="chat-popup--item">
                                            <div className="chat-popup--header d-flex">
                                            <div className="chat-popup--status"><img src="../../assets/img/icon-chat-active.png" alt="" /></div><span className="ml-2 header--text">Test</span>
                                            <div className="chat-popup--close">×</div>
                                            </div>
                                            <div className="chat-popup--body">
                                            <div className="message-received">
                                                <div className="message-received__content row">
                                                <div className="col-2 px-0 received__content--icon"><img src="../../assets/img/chat-avt-1.png" alt="" /></div>
                                                <div className="col-10 received__content--text"><span>
                                                    KHLCNT của Ban Quản lý dự án đầu tư xây .... KHLCNT của Sở Tài chính tỉnh Hưng Yên
                                                    cho dự
                                                    án “Mua sắm thiết bị định .... Hạng mục: Xóm Ao Vàng, Cổ Rùa, Gò Chè, Phúc Lộc, Quyết
                                                    Thắng, Tân ...</span></div>
                                                <div className="col-12 received__content--time text-right"><span>12:09 - 18/10/2019</span></div>
                                                </div>
                                            </div>
                                            <div className="message-send">
                                                <div className="message-send__content row align-items-end flex-column">
                                                <div className="message-send--text"><span>OK</span></div>
                                                <div className="message-send--time text-right"><span>1 min</span></div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat-popup--input">
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Nhập tin nhắn" aria-label="Username" aria-describedby="basic-addon1" />
                                                <div className="input-group-append">
                                                <div className="send-icon"><img src="../../assets/img/icon-send.png" alt="" /></div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>

            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.search.listSearch 
    }
}
export default connect(mapStateToProps, null)(Search);