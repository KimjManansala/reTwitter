import React from "react";

const Username = ({method, username, error}) => {
  return (
    <div className="field">
      <label className="label">Username</label>
      <div className="control">
        <input
          className={error.show? "input is-danger": "input"}
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => {
            method(e);
          }}
        />
          {error.show?  <p className="help is-danger">{error.message}</p>:null}
      </div>
    </div>
  );
};

export default Username;
