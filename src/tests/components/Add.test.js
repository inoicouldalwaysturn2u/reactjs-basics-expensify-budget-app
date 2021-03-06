import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/Add';

import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach( () => { 
  startAddExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow( <AddExpensePage startAddExpense={ startAddExpense } history={ history } /> );
} );

test( 'should render AddExpensePage correctly', () => { 
  expect( wrapper ).toMatchSnapshot();
} );

test( 'should handle onSubmit', () => { 
  const example = expenses[ 0 ];
  wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( example );
  
  expect( history.push ).toHaveBeenLastCalledWith( '/' );
  expect( startAddExpense ).toHaveBeenLastCalledWith( example );
} );
