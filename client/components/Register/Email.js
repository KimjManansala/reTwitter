import React from "react";

const Email = ({ method, email, error }) => {
  return (
    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={error.show ? "input is-danger" : "input"}
          type="email"
          placeholder="Email input"
          value={email}
          onChange={e => {
            method(e);
          }}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>

        {error.show ? (
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle" />{" "}
          </span>
        ) : (
          <i />
        )}
      </div>
      {error.show ? <p className="help is-danger">{error.message}</p> : null}
    </div>
  );
};

export default Email;
{
  /* value={this.state.email} */
}
{
  /* onChange={e => {
                this.handleEmailChange(e);
              }} */
}
