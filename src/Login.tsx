import { useState, FC,ChangeEvent } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import "./styles/login.css";

const Login:FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');

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
    <div className="centeredForm">
      <form className=" ui error form" onSubmit={handleSubmit}>
        <h4>{loginMessage}</h4>
        <div className="field">
          <label>Email</label>
          <div className="ui input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <div className="ui input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="ui error message"></div>
        <button className="ui button">Login</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
