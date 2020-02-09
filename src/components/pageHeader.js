import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PageHeader extends Component {
    state = {
        navItem: [],
        logo_url: "",
        activeInMobile: false
    };

    toggleActive = () => {
        this.setState({
            activeInMobile: !this.state.activeInMobile
        });
    };

    render() {
        const { navItem, logo_url } = this.props.data;

        return (
            <header className="pageHeader">
                <nav className="navBar">
                    <div className="navBar_logo">
                        <NavLink to="/">
                            <img src={logo_url} alt="" />
                        </NavLink>
                    </div>
                    <button
                        className="navBar_toggle"
                        onClick={this.toggleActive}
                    >
                        <div className="iconBar"></div>
                        <div className="iconBar"></div>
                        <div className="iconBar"></div>
                    </button>
                    <div
                        className={`navBar_itemWrapper ${
                            this.state.activeInMobile ? "active" : ""
                        }`}
                    >
                        {navItem.map((data, i) => {
                            return (
                                <div className="navItem" key={i}>
                                    <NavLink
                                        to={data.route}
                                        activeStyle={{
                                            color: "#d71247"
                                        }}
                                    >
                                        {data.text}
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </nav>
            </header>
        );
    }
}

export default PageHeader;
