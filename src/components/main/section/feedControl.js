import React, { Component } from 'react';

class FeedControl extends Component {
    render() {
        return (
            <div id="feedControl">
                <div id="feedOptions">
                    <button type="button" value="top" className="active"><i className="fas fa-newspaper"></i> Top News</button>
                    <button type="button" value="sports"><i className="fas fa-futbol"></i> Sports</button>
                    <button type="button" value="technology"><i className="fas fa-laptop"></i> Technology</button>
                </div>
            </div>
        )
    };
};

export default FeedControl;