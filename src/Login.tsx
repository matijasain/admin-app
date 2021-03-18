import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Hardcoded password
    if (email === 'mat@test.com' && password === 'mattest123') {
      history.push('/users');
    } else {
      setLoginMessage('Wrong credentials, try again');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>{loginMessage}</h4>
        <div>
          <label>Email</label>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <div></div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
