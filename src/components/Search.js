import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchPostResult from './Searchresult/SearchPostResult';
import SearchProductResult from './Searchresult/SearchProductResult';
import SearchResAddressResult from './Searchresult/SearchResAddressResult';
import Pagination from './Pagination/Pagination';
class Search extends Component {
    state = {
        allSearchPostResult: [],
        currentSearchPostResult: [],
        currentPage: null,
        totalPages: null,
    };
    componentDidMount() {
        const allSearchs = this.props.data;
        this.setState({ allSearchs });
    }

    // onPageChanged = e => {
    //     const { allSearchs } = this.state;
    //     const { currentPage, totalPages, pageLimit } = this.props.data;
    //     const offset = (currentPage -1) * pageLimit;
    //     const currentSearchPostResult = allSearchs.slice(offset, offset + pageLimit);

    //     this.setState({ currentPage, currentSearchPostResult, totalPages })
    // }
    
    render() {
        const { data, totalResult } = this.props;
        // const totalSearchResult = allSearchPostResult.length;
        const searchResult = data.map((item, index) => {
            switch (item.type) {
                case 'post':
                    return <SearchPostResult key={ index } item={ item }/>
                case '':
                    return <SearchProductResult key={ index } item={ item }/>
                case 'res_address':
                    return <SearchResAddressResult key={ index } item={ item }/>
                default:
                    break;
            }
        });

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
                                <div className="text-result">Có khoảng <strong> { totalResult.total_search } </strong> kết quả tìm thấy</div>   
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
                                { searchResult }
                                {/* SEARCH RESULT ITEM*/}
                                
                                </div>
                                {/* pagination start */}
                                    <Pagination 
                                        // totalRecords={ totalSearchResult }
                                        pageLimit={ 10 }
                                        pageNeighbours={ 1 }
                                        onPageChanged={ this.onPageChanged }
                                    />
                                {/* pagination end */}
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
        data: state.search.listSearch ,
        totalResult: state.search.totalResult
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         getTotalSearchResult: (keyword, type) => dispatch(countSearchResult(keyword, type))
//     }
// }
export default connect(mapStateToProps)(Search);