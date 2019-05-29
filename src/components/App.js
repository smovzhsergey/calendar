import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Year from './Year';
import Month from './Month';
import Week from './Week';

import actions from '../store/actionCreators';
import { getMonthInfo } from '../helpers';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount () {
        
    }

    setYear = ( direction ) => {

        const { currentMonthIndex, currentYear, actions: { changeCurrentDate } } = this.props;
        const nextYear = direction === 'next' ? currentYear + 1 : currentYear - 1;
        const monthData = getMonthInfo(nextYear, currentMonthIndex);
        
        changeCurrentDate({
            currentYear: nextYear,
            ...monthData
        });
    }

    setMonth = ( direction ) => {
        const { currentMonthIndex, currentYear, actions: { changeCurrentDate } } = this.props;
        let nextYear = currentYear,
            nextMonthIndex;
            
        if (direction === 'next' && currentMonthIndex < 11) {
            nextMonthIndex = currentMonthIndex + 1;
        }
        else if (direction === 'next' && currentMonthIndex === 11) {
            nextMonthIndex = 0;
            nextYear += 1;
        }
        else if (direction === 'prev' && currentMonthIndex > 0) {
            nextMonthIndex = currentMonthIndex - 1;
        }
        else if (direction === 'prev' && currentMonthIndex === 0) {
            nextMonthIndex = 11;
            nextYear -= 1;
        }

        const monthData = getMonthInfo(nextYear, nextMonthIndex);

        changeCurrentDate({
            currentMonthIndex: nextMonthIndex,
            currentYear: nextYear,
            ...monthData
        });
    }

    render() {

        const {
            currentMonthIndex,
            currentYear
        } = this.props;

        return (
            <section className = 'calendar'>
                <Year
                    year = { currentYear }
                    setCurrentYear = { this.setYear }
                />
                <Month
                    monthIndex = { currentMonthIndex }
                    setCurrentMonth = { this.setMonth }
                />
                <Week />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    currentMonthIndex: state.currentMonthIndex,
    currentYear: state.currentYear,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);