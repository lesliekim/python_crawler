import React from 'react';
import { StockStyle } from './style.js';

export const SimpleView = () => ({
    render() {
        return (<div style={StockStyle}>
            {this.props.todayValue}
        </div>);
    }
});

export const GraphView = () => ({
    render() {
        return (<div>
        </div>);
    }
});
