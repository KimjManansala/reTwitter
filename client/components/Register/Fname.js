import React from "react";

const Fname = ({method, fName, error}) => {
  return (
    <div className="field">
      <label className="label">Fist Name</label>
      <div className="control">
        <input
          className={error.show ? "input is-danger" : "input"}
          type="text"
          placeholder="Last Name"
          value={fName}
          onChange={e => {
            method(e);
          }}
        />
        {error.show ? <p className="help is-danger">{error.message}</p> : null}
      </div>
    </div>
  );
};

export default Fname;
