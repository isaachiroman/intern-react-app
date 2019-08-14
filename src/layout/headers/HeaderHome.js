import React, { Component } from 'react';

class HeaderHome extends Component {
    render() {
        return (
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Trang chủ</title>
                {/* VENDORS STYLES*/}
                <link rel="stylesheet" href="../../vendor/ap8/css/style.css" />
                <link rel="stylesheet" href="../../vendor/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" href="../../vendor/bootstrap/css/bootstrap.min.css" />
                {/* INCLUDES STYLES*/}
                <link rel="stylesheet" href="../../assets/stylesheets/index.css" />
                <link rel="stylesheet" href="../../assets/stylesheets/pages/_home.css" />
                {/* INCLUDES SCRIPTS*/}
            </>
        );
    }
}

export default HeaderHome;