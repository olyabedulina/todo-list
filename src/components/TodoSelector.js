import React from 'react';

const TodoSelector = ({ todoState, onChange }) => {

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
      All
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
      Completed
    </label>
    &nbsp;&nbsp;&nbsp;
    <label>
      <input
        type="radio"
        name="show"
        value="progress"
        checked={(todoState === 'progress')}
        onChange={handleRadioChange}
      />
      In progress
    </label>
  </div>

}

export default TodoSelector;