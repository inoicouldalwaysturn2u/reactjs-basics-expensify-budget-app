import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = ( e ) => {
    const description = e.target.value;
    this.setState( () => ( { description } ) );
  };

  onNoteChange = ( e ) => {
    const note = e.target.value;
    this.setState( () => ( { note } ) );
  };

  onAmountChange = ( e ) => {
    const amount = e.target.value;
    // if ( amount.match( /^\d*(\.\d{0,2})?$/ ) ) {
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState( () => ( { amount } ) );
    }
  };

  render() {
    return (
      <div>

        <form>

          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={ this.state.description }
            onChange={ this.onDescriptionChange }
          />

          <input 
            type="text"
            placeholder="Amount"
            value={ this.state.amount }
            onChange={ this.onAmountChange }
          />

          <textArea
            placeholder="Add a note for your expense (optional)"
            value={ this.state.note }
            onChange={ this.onNoteChange }
          >
          </textArea>

          <button>
            Add Expense
          </button>

        </form>

      </div>
    )
  };
}

export default ExpenseForm;