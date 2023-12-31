import React from 'react';

const InputRow = ({ index, value, onUpdate, onRemove, placeholder }) => (
  <div>
    <span>{index + 1}. </span>
    <input
      type='text'
      value={value}
      name='choice'
      id={index+1}
      onChange={(e) => onUpdate(index, e.target.value)}
      placeholder={placeholder}
    />
    <button onClick={() => onRemove(index)}>Remove</button>
  </div>
);

export default InputRow;
