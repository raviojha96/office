import React from 'react';

class Header extends React.Component {
    render() {
        const { isAuthenticated } = this.props;
        return isAuthenticated ? (
            <header>
                <div id="header" className="clearfix">
                    <div className="col-sm-4 header-inner">
                        <a className="nav-link sidebartoggler" href="#"><i className="fas fa-bars"></i></a>
                        <input type="text" name="search_name" placeholder="search & enter" />
                    </div>
                    <div className="col-sm-8 notification-section">
                        <ul>
                            <li><i className="far fa-bell"><span className="noti-number">42</span></i></li>
                        </ul>
                    </div>
                </div>
            </header>)
            : null;
    }
}
export default Header;
