import React from 'react';

class TodoSelector extends React.Component {

  handleRadioChange = (event) => {
     const radioValue = event.target.value;

     this.props.onChange(radioValue);
   }

  render () {
    const { todoState, stats } = this.props;

    return <div>
      Show:&nbsp;&nbsp;
      <label>
        <input
          type="radio"
          name="show"
          value="all"
          checked={(todoState === 'all')}
          onChange={this.handleRadioChange}
        />
        All ({stats.all})
      </label>
      &nbsp;&nbsp;&nbsp;
      <label>
        <input
          type="radio"
          name="show"
          value="actual"
          checked={(todoState === 'actual')}
          onChange={this.handleRadioChange}
        />
        Actual ({stats.actual})
      </label>
      &nbsp;&nbsp;&nbsp;
      <label>
        <input
          type="radio"
          name="show"
          value="completed"
          checked={(todoState === 'completed')}
          onChange={this.handleRadioChange}
        />
        Completed ({stats.completed})
      </label>
    </div>
  }
}

export default TodoSelector;