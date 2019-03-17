import React from "react";

const Input = ({ name, method, value, error, success, type}) => {
  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <input
          className={error? 'input' + {error}: 'input'}
          type={type}
          placeholder={name}
          value={value}
          onChange={(e)=> {method(e)}}
        />
      </div>
      {error? <p class="help is-danger">This {name} is invalid</p> : null}
    </div>
  );
};

export default Input;


