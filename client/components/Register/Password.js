import React from 'react'

const Password = ({method, password, error}) => {
  return (
    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <input
          className={error.show? "input is-danger": "input"}
          type="password"
          placeholder="password"
          value={password}
          onChange={e => {
            method(e);
          }}
        />
          {error.show?  <p className="help is-danger">{error.message}</p>:null}
      </div>
    </div>
  )
}

export default Password
