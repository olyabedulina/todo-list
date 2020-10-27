import React from 'react';

const TodoSelector = ({ todoState, onChange, stats }) => {

  function handleRadioChange(event) {
    const radioValue = event.target.value;

    onChange(radioValue);
  }

  return <div>
    Show:&nbsp;&nbsp;
    <label>
      <input
        type="radio"
        name="show"
        value="all"
        checked={(todoState === 'all')}
        onChange={handleRadioChange}
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
        onChange={handleRadioChange}
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
        onChange={handleRadioChange}
      />
      Completed ({stats.completed})
    </label>
  </div>

}

export default TodoSelector;