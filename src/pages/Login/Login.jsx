import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleDarkMode, initializeDarkMode } from '../../components/DarkMode' ;
import authenticateUser from '../../data/Authenticate';

const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (authenticateUser(username, password)) {
      setLoggedInUser(username);
      navigate('/');
    } else {
      alert('Nome ou senha inválido.');
    }
  };

  return (
    <><button class="dark-mode-toggle" onClick={toggleDarkMode}>Toggle Dark Mode</button>
    <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div></>
  );
};

export default Login;