import configureStore from '../store/configureStore';

import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('visibleExpenses: ');
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', note: 'what you think?', amount: 2500, createdAt: 7777 }));
store.dispatch(addExpense({ description: 'Gas bill', note: 'you smell something?', amount: 5050, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', note: 'you got to pay or?', amount: 110000, createdAt: 0 }));

// store.dispatch( setTextFilter( 'water' ) );
// setTimeout( () => {
//   store.dispatch( setTextFilter( 'bill' ) );
// }, 3000 );
