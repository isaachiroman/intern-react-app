import React, { Component } from 'react';
import PropTypes from 'prop-types';
// const LEFT_PAGE = "LEFT";
// const RIGHT_PAGE = "RIGHT";

// const range = (from, to, step = 1) => {
//     let i = from;
//     const range = [];

//     while ( i <= to ) {
//         range.push(i);
//         i += step;
//     };
//     return range;
        
// }

class Pagination extends Component {
    constructor(props) {
        super(props);
        const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;  

        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0

        this.pageNeighbours = typeof pageNeighbours === 'number' 
            ? Math.max(0, Math.min(pageNeighbours, 2))
            : 0;
            // tinh tong so trang
        this.totalRecords = Math.ceil(this.totalRecords / this.pageLimit);

        this.state = { currentPage: 1 }
    }
        
        
    render() {
        return (
            <React.Fragment>
                 <div className="rp-search-result__pagination">
                    <div className="search-result__pagination-container container">
                        <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
                            <a className="sr-pagination--btn sr-pagination--previous" href="#">Trước</a>
                            <div className="sr-pagination__items d-flex align-items-center">
                                <a className="sr-pagination--item is-actived" href="#">1</a>
                                <a className="sr-pagination--item" href="#">2</a>
                                <a className="sr-pagination--item" href="#">3</a>
                                <a className="sr-pagination--item" href="#">4</a>
                                <a className="sr-pagination--item" href="#">5</a>
                            </div>
                            <a className="sr-pagination--btn sr-pagination--next" href="#">Tiếp</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
  };
  
export default Pagination;