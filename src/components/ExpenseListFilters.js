import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calFocused: null
  };

  onDatesChange = ( { startDate, endDate } ) => {
    this.props.setStartDate( startDate );
    this.props.setEndDate( endDate );
  };

  onFocusChange = ( calFocused ) => {
    this.setState( () => ( { calFocused } ) );
  };

  onTextChange = ( e ) => {
    this.props.setTextFilter( e.target.value );
  }

  onSortChange = ( e ) => {
    if ( e.target.value === 'date' ) {
      this.props.sortByDate();
    } else if ( e.target.value === 'amount' ) {
      this.props.sortByAmount();
    }
  }


  render() {
    return (
      <div>
        <input 
          type="text" 
          value={ this.props.filters.text } 
          onChange={ onTextChange }
        />

        <select 
          value={ this.props.filters.sortBy }
          onChange={ onSortChange }
        >
          <option value="date">
            Date
          </option>
          <option value="amount">
            Amount
          </option>
        </select>
        <DateRangePicker 
          startDate={ this.props.filters.startDate }
          endDate={ this.props.filters.endDate }
          startDateId="start"
          endDateId="end"
          onDatesChange={ this.onDatesChange }
          focusedInput={ this.state.calFocused }
          onFocusChange={ this.onFocusChange }
          showClearDates={ true }
          numberOfMonths={ 1 }
          isOutsideRange={ () => false }
        />
      </div>
    );
  }
};

const mapStateToProps = ( state ) => ( {
  filters: state.filters
} );

const MapDispatchToProps = ( dispatch ) => ( { 
  setStartDate: ( startDate ) => dispatch( setStartDate( startDate ) ),
  setEndDate: ( endDate ) => dispatch( setEndDate( endDate ) ),
  setTextFilter: ( text ) => dispatch( setTextFilter( text ) ),
  sortByDate: () => dispatch( sortByDate() ),
  sortByAmount: () => dispatch( sortByAmount() ),
} );

export default connect( mapStateToProps, MapDispatchToProps )( ExpenseListFilters );
