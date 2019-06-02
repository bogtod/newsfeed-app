import React, { Component } from 'react';

class ExchangeWidget extends Component{
    render() {
        return(
            <div className="widget" id="exchangeWrap">
                <h3>Exchange Rates <i className="fas fa-exchange-alt"></i></h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="base">Select the base</label>
                        <select id="base">
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="RON">RON</option>
                        </select>
                    </div>
                    <div className="form-group" id="dropdownWrap">
                        <button type="button" className="dropdownBtn">Choose rates <span></span> <i className="fas fa-caret-down"></i></button>
                        <div className="dropdown">
                            <button type="submit" id="exchangeBtn">Get Rates</button>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
                </form>
                <div id="exchangeOutput">
                </div>
            </div>
        )
    };
};

export default ExchangeWidget;