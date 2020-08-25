import React, { useState } from "react";

const CreateUser = (props) => {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
    };

    console.log(user);

    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;