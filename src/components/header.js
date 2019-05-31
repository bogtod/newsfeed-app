import React, { Component } from 'react';


class Header extends Component {
    
    render() {
        console.log('bogdan');
        return (
        <header>
            <a href="./" id="brand"><span id="brandOne">NEWS</span><span id="brandTwo">AGGREGATOR</span></a>
            <form className="searchForm focusControl">
                <i className="fas fa-search"></i>
                <input id="searchInput" type="search" />
                <button type="submit" value="query" id="formBtn">Search</button>
            </form>
            <div className="authButtons">
                <button type="button" href="#">Log In</button>
                <button type="button" href="#">Sign In</button>
            </div>
        </header>
        );
    }

}

export default Header;