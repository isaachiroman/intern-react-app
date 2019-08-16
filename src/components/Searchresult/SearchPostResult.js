import React, { Component } from 'react';
import { connect } from 'react-redux'
import Post from '../Post/Post';

class SearchPostResult extends Component {
    
   
    showPopup = () => {
        // alert(this.props.dataPost)
        const { isShowPopup } = this.props;
        alert(isShowPopup)
    }
    hidePopup = () => {
        this.setState({ isShowPopup: false })
    }
    render() {
        // console.log(this.props.item)
        const { item } = this.props;
        return (
            <div>
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
                            <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Thong tin</a></p>
                            <p className="mb-0 ids-title--date-posted">15 ngày trước</p>
                            </div>
                        </div>
                        <div className="item-details__post">
                            <div onClick={ this.showPopup } className="ids-post--title">
                                <a  href="">{ item.name }</a>
                            </div>
                            <div className="ids-post--content"><span>
                               { item.short_description }</span></div>
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataPost: state.search.listSearch ,
        isShowPopup : state.search.isShowPopup
    }
}
export default connect(mapStateToProps, null)(SearchPostResult);