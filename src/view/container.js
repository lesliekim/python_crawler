import React from 'react';
import { connect } from 'react-redux';
import { SimpleView } from './component';
import * as actions from '../actions';

class StockView extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch('http://localhost:5000/init', {
            method: 'GET',
            dataType: 'json',
            mode: 'no-cors'
        })
        .then(resp => (resp.text()))
        .then(result => {
            this.setState({
                todayValue: result.data
            })
        });
    }
    render() {
        return (<div>
            <SimpleView todayValue={this.props.todayValue}/>
        </div>);
    }
};

function mapStateToProps(state) {
    return {
        todayValue: state.todayValue || 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        init: value => (dispatch(actions.init(value)))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockView);