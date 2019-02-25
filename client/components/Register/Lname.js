import React from "react";

const Lname = ({method, lName, error}) => {
  return (
    <div className="field">
      <label className="label">Last Name</label>
      <div className="control">
        <input
          className={error.show ? "input is-danger" : "input"}
          type="text"
          placeholder="Last Name"
          value={lName}
          onChange={e => {
            method(e);
          }}
        />
        {error.show ? <p className="help is-danger">{error.message}</p> : null}
      </div>
    </div>
  );
};

export default Lname;
