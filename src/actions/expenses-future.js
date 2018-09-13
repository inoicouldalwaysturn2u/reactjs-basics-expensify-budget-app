import uuid from 'uuid';
import db from '../firebase/firebase';

// 
//// Expenses
// 

// ADD_EXPENSE

const addExpense = ( expense ) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = ( expenseData = {} ) => {
  return ( dispatch ) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    db.ref( 'expenses' ).push( expense).then( ( ref ) => { 
      dispatch( addExpense( { 
        id: ref.key,
        ...expense
      } ) );
    } );
  };
};

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE

const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export { addExpense, removeExpense, editExpense };